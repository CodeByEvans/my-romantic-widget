import { IoMdSend } from "react-icons/io";

export const NoteInput = () => {
  return (
    <form className="flex items-center gap-2 mt-2" data-theme="glass">
      <input type="text" placeholder="Escribe una nota..." className="" />
      <button type="submit" className="">
        <IoMdSend size={16} />
      </button>
    </form>
  );
};
