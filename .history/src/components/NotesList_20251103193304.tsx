import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  return (
    <div className="flex flex-col gap-4 mt-6 overflow-y-auto ">
      {notes.map((note) => (
        <div key={note.id}>
          <div>
            <h3 className="font-bold text-lg text-left">{note.from}</h3>
            <small>{new Date(note.created_at).toLocaleString()}</small>
          </div>
          <p className="text-left">{note.message}</p>
        </div>
      ))}
    </div>
  );
};
