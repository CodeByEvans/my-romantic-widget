import partnerService from "@/services/partner.service";
import { setValue } from "@/services/store.service";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";

const SUPABASE_FUNCTIONS_URL =
  "https://otvudprkslkrilfkmalz.supabase.co/functions/v1";

const getSession = async () => {
  const session = (await supabase.auth.getSession()).data.session;
  if (!session) throw new Error("User is not authenticated");
  return session;
};

export const connectionService = {
  async generateLink() {
    try {
      // Primero obtenemos la sesión para saber quién es el usuario actual
      const session = await getSession();
      const { access_token } = session;

      // Luego hacemos una petición a la función de Supabase para generar el enlace de conexión
      const response = await fetch(
        `${SUPABASE_FUNCTIONS_URL}/create_connection_request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
          body: JSON.stringify({ sender_id: session.user.id }),
        },
      );

      // Extraemos el enlace de la respuesta y lo devolvemos
      const data = await response.json();
      return data.invitation;
    } catch (error) {
      console.error("Error generating link:", error);
      return null;
    }
  },

  async createConnection(requestId: string) {
    try {
      // Primero obtenemos la sesión para saber quién es el usuario actual
      const session = await getSession();
      const { access_token } = session;

      // Luego hacemos una petición a la función de Supabase para crear la conexión usando el requestId
      const response = await fetch(
        `${SUPABASE_FUNCTIONS_URL}/create_connection?request_id=${requestId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
          body: JSON.stringify({ request_id: requestId }),
        },
      );

      const data = await response.json();

      // Guardamos el ID de la conexión y el nombre del partner en el store para futuras referencias
      await setValue("connection_id", data.connection[0].id);

      const partnerId =
        data.connection[0].user_a === session.user.id
          ? data.connection[0].user_b
          : data.connection[0].user_a;

      const partnerData = await partnerService.getPartnerData(partnerId);

      await setValue("partner_name", partnerData.nickname);

      // Devolvemos los datos de la conexión junto con el nombre del partner
      const connectionData = {
        id: data.connection[0].id,
        partnerName: partnerData.nickname,
      };

      // Mostramos un toast de éxito y recargamos la página para reflejar los cambios
      toast.success("Conexión creada exitosamente");
      window.location.reload();

      return connectionData;
    } catch (error) {
      console.error("Error creating connection:", error);
      toast.error("Error creating connection");
      return null;
    }
  },

  async getConnection() {
    try {
      // Primero obtenemos la sesión para saber quién es el usuario actual
      const session = await getSession();
      const userId = session.user.id;

      // Buscamos la conexión del usuario actual en la tabla "connections"
      const { data, error } = await supabase
        .from("connections")
        .select("*")
        .or(`user_a.eq.${userId},user_b.eq.${userId}`)
        .single();

      if (error) throw error;

      // Determinamos quién es el partner en la conexión
      const partnerId = data.user_a === userId ? data.user_b : data.user_a;

      // Obtenemos los datos del partner usando el partnerService
      const partnerData = await partnerService.getPartnerData(partnerId);

      // Guardamos los datos del partner usando storeService
      await setValue("partner_name", partnerData.nickname);
      await setValue("partner_id", partnerId);

      // Devolvemos los datos de la conexión junto con el nombre del partner
      const connectionData = {
        id: data.id,
        partnerName: partnerData.nickname,
      };

      return connectionData;
    } catch (error) {
      console.error("Error getting connection:", error);
      return null;
    }
  },

  async getConnectionRequestLink() {
    try {
      // Primero obtenemos la sesión para saber quién es el usuario actual
      const session = await getSession();
      const userId = session.user.id;

      // Buscamos la solicitud de conexión del usuario actual en la tabla "connection_requests"
      const { data, error } = await supabase
        .from("connection_requests")
        .select("*")
        .eq("sender_id", userId)
        .single();

      if (error) throw error;

      // Devolvemos el enlace de la solicitud de conexión
      return `${SUPABASE_FUNCTIONS_URL}/create_connection?request_id=${data.id}`;
    } catch (error) {
      console.error("Error getting connection request:", error);
      return null;
    }
  },
};
