import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.message}</p>
          <small>{new Date(note.created_at).toLocaleString()}</small>
        </div>
      ))}
      hola
    </div>
  );
};
