import { IoMdSend } from "react-icons/io";

export const NoteInput = () => {
  return (
    <form className="flex items-center gap-2 mt-2">
      <input
        type="text"
        placeholder="Escribe una nota..."
        className="flex-1 text-sm px-3 py-2 rounded-lg  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
      >
        <IoMdSend size={16} />
      </button>
    </form>
  );
};
