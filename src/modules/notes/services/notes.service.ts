import { supabase } from "../../../services/supabaseClient";
import { Notes, noteSchema } from "../@types/notes.types";

export const notesService = {
  getNotes: async (): Promise<Notes> => {
    const { data, error } = await supabase
      .from<"notes", Notes>("notes")
      .select("*");

    if (error) throw error;
    if (!data) throw new Error("No hay notas disponibles");
    return data;
  },
  suscribeChannel: (
    callback: (
      notes: Notes,
      type: "INSERT" | "UPDATE" | "DELETE",
      id?: number
    ) => void
  ): (() => void) => {
    const channel = supabase
      .channel("public:notes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notes" },
        (payload) => {
          switch (payload.eventType) {
            case "INSERT":
              const newNote = noteSchema.parse(payload.new);
              callback([newNote], "INSERT", newNote.id);
              break;
            case "UPDATE":
              const updatedNote = noteSchema.parse(payload.new);
              callback([updatedNote], "UPDATE", updatedNote.id);
              break;
            case "DELETE":
              const deletedNote = noteSchema.parse(payload.old);
              callback([deletedNote], "DELETE", deletedNote.id);
              break;
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  },
};
