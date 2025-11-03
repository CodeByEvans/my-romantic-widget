export const NoteInput = () => {
  return (
    <form action="" className="flex flex-row items-center">
      <input
        type="text"
        placeholder="Escribe una nota..."
        className="mt-4 p-2 border rounded w-full max-w-md"
      />
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded w-full max-w-sm"
      >
        Guardar
      </button>
    </form>
  );
};
