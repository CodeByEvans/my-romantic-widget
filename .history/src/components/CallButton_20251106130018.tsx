import { IoMdCall } from "react-icons/io";

export const CallButton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="p-4 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-transform">
        <IoMdCall size={24} />
      </button>
      <p className="text-sm text-gray-600 mt-1 font-medium">Llamar</p>
    </div>
  );
};
