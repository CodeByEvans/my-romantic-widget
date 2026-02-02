import { supabase } from "@/services/supabaseClient";

export const generateLink = async (sender_id: string, receiver_id: string) => {
  try {
    const session = (await supabase.auth.getSession()).data.session;
    if (!session) {
      throw new Error("User is not authenticated");
    }
    const response = await fetch(
      "https://otvudprkslkrilfkmalz.supabase.co/functions/v1/create_connection_request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ sender_id, receiver_id }),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating link:", error);
    return null;
  }
};
