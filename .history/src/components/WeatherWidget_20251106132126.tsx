import { useWeather } from "../hooks/useWeather";

const weatherColors: Record<string, string> = {
  Thunderstorm: "from-gray-600 to-gray-800 text-white",
  Drizzle: "from-sky-300 to-sky-400 text-white",
  Rain: "from-sky-400 to-blue-600 text-white",
  Snow: "from-slate-100 to-slate-300 text-gray-800",
  Mist: "from-gray-200 to-gray-400 text-gray-700",
  Clear: "from-yellow-300 to-orange-400 text-gray-800",
  Clouds: "from-gray-300 to-gray-500 text-gray-800",
  Haze: "from-amber-100 to-amber-300 text-gray-800",
  Fog: "from-gray-200 to-gray-400 text-gray-700",
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
  const colorClass =
    weatherColors[condition] || "from-gray-200 to-gray-400 text-gray-800";

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl shadow-sm px-3 py-2 w-[150px] bg-gradient-to-b ${colorClass} h-full mb-2`}
    >
      <h2 className="text-xs font-semibold">{city}</h2>
      <p className="text-2xl font-bold">{temp}°C</p>
    </div>
  );
};
