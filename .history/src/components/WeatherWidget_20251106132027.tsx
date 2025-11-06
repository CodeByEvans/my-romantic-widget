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
    gradient: "from-indigo-700 via-purple-600 to-indigo-900 text-white",
    icon: <WiThunderstorm size={36} />,
  },
  Drizzle: {
    gradient: "from-sky-300 via-sky-400 to-sky-600 text-white",
    icon: <WiRain size={36} />,
  },
  Rain: {
    gradient: "from-blue-400 via-sky-500 to-blue-700 text-white",
    icon: <WiRain size={36} />,
  },
  Snow: {
    gradient: "from-cyan-100 via-blue-200 to-blue-300 text-gray-800",
    icon: <WiSnow size={36} />,
  },
  Mist: {
    gradient: "from-gray-200 via-gray-300 to-gray-400 text-gray-800",
    icon: <WiFog size={36} />,
  },
  Haze: {
    gradient: "from-amber-200 via-amber-300 to-amber-400 text-gray-800",
    icon: <WiDayHaze size={36} />,
  },
  Clear: {
    gradient: "from-yellow-300 via-orange-400 to-pink-500 text-gray-900",
    icon: <WiDaySunny size={36} />,
  },
  Clouds: {
    gradient: "from-gray-300 via-gray-400 to-gray-600 text-gray-900",
    icon: <WiCloud size={36} />,
  },
  Fog: {
    gradient: "from-gray-300 via-gray-400 to-gray-500 text-gray-900",
    icon: <WiFog size={36} />,
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

  const style = weatherStyles[condition] || weatherStyles["Clouds"]; // fallback si no hay coincidencia

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl shadow-lg 
                  bg-gradient-to-br ${style.gradient} px-4 py-3 w-[150px] h-full
                  backdrop-blur-sm bg-opacity-80`}
    >
      <h2 className="text-sm font-semibold drop-shadow-sm">{city}</h2>
      <div className="flex flex-col items-center mt-1">{style.icon}</div>
      <p className="text-2xl font-bold mt-1 drop-shadow-sm">{temp}°C</p>
      <small className="capitalize opacity-80 text-xs mt-1">
        {info.weather[0].description}
      </small>
    </div>
  );
};
