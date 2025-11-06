import { IoMdCall } from "react-icons/io";

export const CallButton = () => {
  return (
    <div>
      <button className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
        <IoMdCall size={24} />
      </button>
      <p>Ultima conexión: </p>
    </div>
  );
};

export default CallButton;
