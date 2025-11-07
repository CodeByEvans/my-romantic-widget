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
    <div className=" rounded-xl  px-3 py-2 flex flex-col items-center justify-center w-[150px] h-[130px] theme-container">
      <h1 className="text-2xl font-mono tracking-widest text-white">
        {hours}:{minutes}
      </h1>
      <p className="text-xs mt-1 capitalize">{day}</p>
      <small className="text-xs ">{date}</small>
    </div>
  );
};
