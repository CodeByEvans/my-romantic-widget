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

const weatherStyles: Record<string, { icon: JSX.Element }> = {
  Thunderstorm: {
    icon: <WiThunderstorm size={28} />,
  },
  Drizzle: {
    icon: <WiRain size={28} />,
  },
  Rain: {
    icon: <WiRain size={28} />,
  },
  Snow: {
    icon: <WiSnow size={28} />,
  },
  Mist: {
    icon: <WiFog size={28} />,
  },
  Haze: {
    icon: <WiDayHaze size={28} />,
  },
  Clear: {
    icon: <WiDaySunny size={28} />,
  },
  Clouds: {
    icon: <WiCloud size={28} />,
  },
  Fog: {
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
                  w-[150px] h-[100px]
                  border border-white/20 overflow-hidden transition-all duration-500`}
    >
      {/* borde de reflejo superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />

      {/* contenido */}
      <div className="flex items-center gap-5">
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
