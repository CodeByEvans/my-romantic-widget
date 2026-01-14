import { useRealTimeNotes } from "../hooks/useRealTimeNotes";

export const NotesList = () => {
  const notes = useRealTimeNotes();

  const sortedNotes = [...notes].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const noteToShow = sortedNotes[0];
  if (!noteToShow)
    return (
      <div className="flex items-center justify-center h-[110px] text-gray-500 text-sm">
        No hay notas
      </div>
    );

  return (
    <div className="bg-white rounded-xl backdrop-blur-sm shadow-inner p-3 h-[110px] overflow-hidden">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-sm text-gray-700">
          {noteToShow.from}
        </h3>
        <small className="text-xs text-gray-400">
          {new Date(noteToShow.created_at).toLocaleString()}
        </small>
      </div>
      <p className="text-gray-700 text-sm italic line-clamp-3">
        {noteToShow.message}
      </p>
    </div>
  );
};
