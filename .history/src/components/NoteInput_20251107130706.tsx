import { IoMdSend } from "react-icons/io";

export const NoteInput = () => {
  return (
    <form className="flex items-center gap-2 mt-2" data-theme="glass">
      <input type="text" placeholder="Escribe una nota..." />
      <button type="submit">
        <IoMdSend size={16} />
      </button>
    </form>
  );
};
