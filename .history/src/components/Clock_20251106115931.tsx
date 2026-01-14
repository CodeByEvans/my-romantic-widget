import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const day = time.toLocaleDateString("es-ES", { weekday: "long" });
  const date = time.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white backdrop-blur-md rounded-xl shadow-md p-4 flex flex-col items-center justify-center min-w-[140px]">
      <p className="text-xl font-mono tracking-widest text-gray-700">
        {hours}:{minutes}:{seconds}
      </p>
      <p className="text-sm text-gray-600 mt-1">{day}</p>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  );
};
