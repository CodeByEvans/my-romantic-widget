import { useEffect, useState } from "react";

import { Notes } from "../@types/notes.types";
import { notesService } from "../services/notes.service";

export const useRealTimeNotes = () => {
  const [notes, setNotes] = useState<Notes>([]);

  useEffect(() => {
    notesService
      .getNotes()
      .then((notes) => setNotes(notes))
      .catch((err) => console.error(err));

    const unsubscribe = notesService.suscribeChannel((notes, type, id) => {
      switch (type) {
        case "INSERT":
          setNotes((prev) => [...prev, notes[0]]);
          break;
        case "UPDATE":
          setNotes((prev) =>
            prev.map((note) => (note.id === id ? notes[0] : note))
          );
          break;
        case "DELETE":
          setNotes((prev) => prev.filter((note) => note.id !== id));
          break;
      }
    });

    return unsubscribe;
  }, []);

  return notes;
};
