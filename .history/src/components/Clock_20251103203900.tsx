import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // actualiza cada segundo

    return () => clearInterval(interval); // limpia al desmontar
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className=" text-lg font-bold bg-white rounded-xl bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center">
      <p className="text-4xl font-mono text-gray-500 px-4">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};
