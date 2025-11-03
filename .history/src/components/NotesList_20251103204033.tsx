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
    <div className="flex flex-col gap-4  overflow-y-auto w-max min-w-[200px] max-w-md p-4 bg-white bg-opacity-30 backdrop-blur-md rounded-xl">
      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-lg text-left text-gray-500">
            {noteToShow.from}
          </h3>
          <small className="text-xs text-right">
            {new Date(noteToShow.created_at).toLocaleString()}
          </small>
        </div>
        <p className="text-left">{noteToShow.message}</p>
      </div>
    </div>
  );
};
