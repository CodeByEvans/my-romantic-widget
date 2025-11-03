import { useEffect, useState } from "react";
import z from "zod";
import { supabase } from "../services/supabaseClient";

const noteSchema = z.object({
  id: z.string(),
  from: z.string(),
  message: z.string(),
  created_at: z.string(),
});

type Note = z.infer<typeof noteSchema>;

export const useRealTimeNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Cargar notas iniciales
    supabase
      .from<"notes", Note>("notes")
      .select("*")
      .then(({ data, error }) => {
        if (data) {
          setNotes(data);
          console.log("Notas cargadas:", data);
        } else {
          console.error("Error fetching notes:", error);
        }
      });

    // Suscripción en tiempo real
    const channel = supabase
      .channel("public:notes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notes" },
        (payload) => {
          console.log("Cambio dettectado:", payload);

          if (payload.eventType === "INSERT") {
            const newNote = noteSchema.parse(payload.new);
            setNotes((prevNotes) => [...prevNotes, newNote]);
          } else if (payload.eventType === "UPDATE") {
            setNotes((prev) =>
              prev.map((note) =>
                note.id === payload.new.id
                  ? noteSchema.parse(payload.new)
                  : note
              )
            );
          } else if (payload.eventType === "DELETE") {
            setNotes((prev) =>
              prev.filter((note) => note.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [notes]);

  return notes;
};
