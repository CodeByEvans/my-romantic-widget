import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  return (
    <div className="flex gap-4 mt-6 overflow-y-auto w-48">
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.from}</h3>
          <p>{note.message}</p>
          <small>{new Date(note.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};
