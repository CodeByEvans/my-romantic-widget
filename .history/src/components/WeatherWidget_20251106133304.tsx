import { JSX } from "react";
import { useWeather } from "../hooks/useWeather";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiDayHaze,
} from "react-icons/wi";

const weatherStyles: Record<string, { gradient: string; icon: JSX.Element }> = {
  Thunderstorm: {
    gradient: "from-indigo-800 via-purple-700 to-indigo-900 text-white",
    icon: <WiThunderstorm size={28} />,
  },
  Drizzle: {
    gradient: "from-sky-400 via-sky-500 to-blue-600 text-white",
    icon: <WiRain size={28} />,
  },
  Rain: {
    gradient: "from-blue-500 via-indigo-500 to-blue-700 text-white",
    icon: <WiRain size={28} />,
  },
  Snow: {
    gradient: "from-cyan-100 via-blue-100 to-blue-300 text-gray-700",
    icon: <WiSnow size={28} />,
  },
  Mist: {
    gradient: "from-gray-200 via-gray-300 to-gray-400 text-gray-800",
    icon: <WiFog size={28} />,
  },
  Haze: {
    gradient: "from-amber-200 via-amber-300 to-amber-400 text-gray-800",
    icon: <WiDayHaze size={28} />,
  },
  Clear: {
    gradient: "from-yellow-200 via-orange-300 to-pink-400 text-gray-900",
    icon: <WiDaySunny size={28} />,
  },
  Clouds: {
    gradient: "from-gray-300 via-gray-400 to-gray-600 text-gray-900",
    icon: <WiCloud size={28} />,
  },
  Fog: {
    gradient: "from-gray-300 via-gray-400 to-gray-500 text-gray-900",
    icon: <WiFog size={28} />,
  },
};

export const WeatherWidget = () => {
  const { data, loading, errorWeather } = useWeather();

  if (errorWeather)
    return <div className="text-xs text-red-400">{errorWeather}</div>;
  if (loading || !data)
    return <div className="text-xs text-gray-400">Cargando clima...</div>;

  const [city, info] = Object.entries(data)[0] || [];
  const temp = Math.round(info.main.temp);
  const condition = info.weather[0].main;

  const style = weatherStyles[condition] || weatherStyles["Clouds"];

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-2xl
                  bg-gradient-to-br ${style.gradient} w-[150px] h-[100px]
                  backdrop-blur-md bg-opacity-70 shadow-[0_2px_10px_rgba(0,0,0,0.3)]
                  border border-white/20 overflow-hidden transition-all duration-500`}
    >
      {/* sutil capa de brillo animado */}
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-500" />

      {/* borde de reflejo superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />

      {/* contenido */}
      <div className="flex items-center gap-2">
        <div className="animate-pulse-slow">{style.icon}</div>
        <div className="flex flex-col items-start leading-tight">
          <h2 className="text-xs font-semibold tracking-wide drop-shadow-sm">
            {city}
          </h2>
          <p className="text-lg font-bold drop-shadow-sm">{temp}°C</p>
        </div>
      </div>
    </div>
  );
};
