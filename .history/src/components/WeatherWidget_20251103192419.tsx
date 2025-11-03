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
    <div className="flex gap-6 w-auto">
      {Object.entries(data).map(([city, info]: [string, WeatherData]) => (
        <div key={city} className="p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-2">{city}</h2>
          <p>{info.weather[0].description}</p>
          <p className="text-3xl font-semibold">{info.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};
