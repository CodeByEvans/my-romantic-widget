import { useWeather } from "../hooks/useWeather";
import { WeatherData } from "../types/weather";

export const WeatherWidget = () => {
  const { data, loading, errorWeather } = useWeather();

  if (errorWeather) {
    return <div>{errorWeather}</div>;
  }

  if (loading || !data) {
    return <div>Cargando clima...</div>;
  }

  return (
    <div className="flex gap-6 w-full justify-center bg-blue-200 bg-opacity-30 backdrop-blur-md rounded-xl">
      {Object.entries(data).map(([city, info]: [string, WeatherData]) => (
        <div key={city} className="p-4 rounded-xl">
          <h2 className="text-sm font-bold mb-2">{city}</h2>

          <p className="text-xl font-semibold">{info.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};
