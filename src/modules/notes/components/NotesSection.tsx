import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/globals/components/atoms/input";
import { Button } from "@/globals/components/atoms/button";

import { Note as NoteType } from "../@types/notes.types";
import { notesService } from "../services/notes.service";

interface Note {
  id: number;
  content: string;
  timestamp: Date;
}

interface NotesSectionProps {
  onSendNote: (content: string) => void;
}

export function NotesSection({ onSendNote }: NotesSectionProps) {
  const [latestNote, setLatestNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState("");

  // Obtener la última nota del otro usuario al montar
  useEffect(() => {
    const fetchLastNote = async () => {
      try {
        const data: NoteType = await notesService.getLastPartnerNote();
        setLatestNote({
          id: data.id,
          content: data.content,
          timestamp: new Date(data.created_at),
        });
      } catch (error) {
        console.log("No hay notas disponibles aún");
      }
    };

    fetchLastNote();

    // Suscribirse a nuevas notas del otro usuario
    const unsubscribe = notesService.suscribeChannel((notes, type) => {
      if (type === "INSERT" && notes.length > 0) {
        const newNoteData = notes[0];
        setLatestNote({
          id: newNoteData.id,
          content: newNoteData.content,
          timestamp: new Date(newNoteData.created_at),
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      onSendNote(newNote.trim());
      setNewNote("");
    }
  };

  return (
    <div className="flex flex-col h-full flex-1 min-w-0 px-2">
      {/* Notes display area with paper texture */}
      <div className="flex-1 paper-texture rounded-lg overflow-hidden border border-border/50 shadow-inner">
        <div className="h-full p-3 overflow-y-auto">
          {latestNote ? (
            <div className="flex flex-col gap-1">
              <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                {latestNote.content}
              </p>
              <span className="text-[10px] text-muted-foreground">
                {latestNote.timestamp.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic text-center pt-6">
              Sin notas aún...
            </p>
          )}
        </div>
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
        <Input
          type="text"
          placeholder="Escribe una nota..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-1 h-8 text-sm bg-input/50 border-border/50 focus:border-primary/50"
        />
        <Button
          type="submit"
          size="sm"
          className="h-8 w-8 p-0 bg-primary hover:bg-primary/90"
          disabled={!newNote.trim()}
        >
          <Send className="w-4 h-4" />
          <span className="sr-only">Enviar nota</span>
        </Button>
      </form>
    </div>
  );
}
