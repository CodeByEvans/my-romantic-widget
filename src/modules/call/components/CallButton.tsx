import { authService } from "@/modules/auth/services/auth.service";
import { IoMdCall } from "react-icons/io";

export const CallButton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="p-4 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-transform"
        onClick={authService.logout}
      >
        <IoMdCall size={24} />
      </button>
    </div>
  );
};
