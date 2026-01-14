import { IoMdSend } from "react-icons/io";

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
        className="mt-4 p-2 bg-blue-500 text-white rounded max-w-sm"
      >
        <IoMdSend size={20} />
      </button>
    </form>
  );
};
