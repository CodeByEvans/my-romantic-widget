import { useWeather } from "../hooks/useWeather";

export const WeatherWidget = () => {
  const { data, loading, errorWeather } = useWeather();

  if (errorWeather)
    return <div className="text-xs text-red-400">{errorWeather}</div>;
  if (loading || !data)
    return <div className="text-xs text-gray-400">Cargando clima...</div>;

  const [city, info] = Object.entries(data)[0] || [];
  const temp = Math.round(info.main.temp);

  return (
    <div className="flex flex-col items-center justify-center bg-white/40 rounded-xl shadow-sm px-3 py-2">
      <h2 className="text-xs font-semibold text-gray-700">{city}</h2>
      <p className="text-2xl font-bold text-gray-800">{temp}°C</p>
    </div>
  );
};
