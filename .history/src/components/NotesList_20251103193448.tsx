import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  const noteToShow = () => {
    const sortedNotes = notes.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  };

  return (
    <div className="flex flex-col gap-4 mt-6 overflow-y-auto ">
      {notes.map((note) => (
        <div key={note.id}>
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-bold text-lg text-left">{note.from}</h3>
            <small className="text-xs text-right">
              {new Date(note.created_at).toLocaleString()}
            </small>
          </div>
          <p className="text-left">{note.message}</p>
        </div>
      ))}
    </div>
  );
};
