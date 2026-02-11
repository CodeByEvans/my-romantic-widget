import { getValue } from "@/services/store.service";
import { supabase } from "../../../services/supabaseClient";
import { Note, Notes, noteSchema } from "../@types/notes.types";

export const notesService = (() => {
  let connectionId: string | unknown = null;
  let myUserId: string | null = null;

  const init = async () => {
    if (!connectionId) connectionId = await getValue("connection_id");
    if (!connectionId) throw new Error("No hay conexión establecida");

    if (!myUserId) {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("Usuario no autenticado");
      myUserId = user.id;
    }
  };

  const getLastPartnerNote = async (): Promise<Note> => {
    await init();

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("connection_id", connectionId)
      .neq("author_id", myUserId)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;
    if (!data) throw new Error("No hay notas disponibles");

    return noteSchema.parse(data);
  };

  const suscribeChannel = (
    callback: (
      notes: Notes,
      type: "INSERT" | "UPDATE" | "DELETE",
      id?: number,
    ) => void,
  ): (() => void) => {
    const channel = supabase
      .channel("public:notes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notes" },
        async (payload) => {
          await init(); // asegura que myUserId esté cargado

          const note = noteSchema.parse(payload.new || payload.old);

          // solo notas del otro usuario
          if (note.author_id === myUserId) return;

          switch (payload.eventType) {
            case "INSERT":
              callback([note], "INSERT", note.id);
              break;
            case "UPDATE":
              callback([note], "UPDATE", note.id);
              break;
            case "DELETE":
              callback([note], "DELETE", note.id);
              break;
          }
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  };

  return {
    getLastPartnerNote,
    suscribeChannel,
  };
})();
