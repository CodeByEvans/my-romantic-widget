import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  const sortedNotes = [...notes].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const noteToShow = sortedNotes[0];

  if (!noteToShow) return <div>No hay notas</div>;

  return (
    <div className="flex flex-col gap-1 p-3 bg-white/20 rounded-lg">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-gray-700">{noteToShow.from}</h3>
        <small className="text-[10px] text-gray-400">
          {new Date(noteToShow.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
      <p className="text-sm text-gray-700">{noteToShow.message}</p>
    </div>
  );
};
