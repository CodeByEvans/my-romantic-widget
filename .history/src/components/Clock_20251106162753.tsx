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

  const day = time.toLocaleDateString("es-ES", { weekday: "long" });
  const date = time.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className=" rounded-xl  px-3 py-2 flex flex-col items-center justify-center w-[150px] h-[130px] ">
      {/* sutil capa de brillo animado */}
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-500" />

      {/* borde de reflejo superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
      <p className="text-2xl font-mono tracking-widest text-white">
        {hours}:{minutes}
      </p>
      <p className="text-xs text-white-600 mt-1 capitalize">{day}</p>
      <p className="text-xs text-white-500">{date}</p>
    </div>
  );
};
