"use client";

import React from "react";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/globals/components/atoms/input";
import { Button } from "@/globals/components/atoms/button";

interface Note {
  id: string;
  content: string;
  fromPartner: boolean;
  timestamp: Date;
}

interface NotesSectionProps {
  notes: Note[];
  onSendNote: (content: string) => void;
}

export function NotesSection({ notes, onSendNote }: NotesSectionProps) {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      onSendNote(newNote.trim());
      setNewNote("");
    }
  };

  const latestNote = notes.length > 0 ? notes[notes.length - 1] : null;

  return (
    <div className="flex flex-col h-full flex-1 min-w-0 px-2 ">
      {/* Notes display area with paper texture */}
      <div className="flex-1 paper-texture rounded-lg overflow-hidden border border-border/50 shadow-inner">
        <div className="h-full p-3 overflow-y-auto">
          {latestNote ? (
            <div className="flex flex-col gap-1">
              <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                {latestNote.content}
              </p>
              <span className="text-[10px] text-muted-foreground">
                {latestNote.fromPartner ? "De tu pareja" : "Enviado"} -{" "}
                {latestNote.timestamp.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic text-center pt-6">
              Sin notas aun...
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
