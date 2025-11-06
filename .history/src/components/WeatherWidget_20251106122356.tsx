import { useWeather } from "../hooks/useWeather";

export const WeatherWidget = () => {
  const { data, loading, errorWeather } = useWeather();

  if (errorWeather)
    return <div className="text-sm text-red-400">{errorWeather}</div>;
  if (loading || !data)
    return <div className="text-sm text-gray-400">Cargando clima...</div>;

  const [city, info] = Object.entries(data)[0] || [];
  const temp = Math.round(info.main.temp);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 bg-opacity-40 backdrop-blur-md rounded-xl p-3 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700">{city}</h2>
      <p className="text-3xl font-bold text-gray-800">{temp}°C</p>
    </div>
  );
};
