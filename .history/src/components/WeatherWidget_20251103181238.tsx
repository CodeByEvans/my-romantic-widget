import { useWeather } from "../hooks/useWeather";
import { WeatherData } from "../types/weather";

export const WeatherWidget = () => {
  const { data, loading, error } = useWeather();

  if (loading) {
    return <div>Cargando clima...</div>;
  }

  if (error) {
    return <div>No se pudo obtener el clima</div>;
  }

  return (
    <div className="flex gap-6">
      {Object.entries(!data).map(([city, info]: [string, WeatherData]) => (
        <div key={city} className="p-4 rounded-xl shadow bg-gray-100">
          <h2 className="text-xl font-bold mb-2">{city}</h2>
          <p>{info.weather[0].description}</p>
          <p className="text-3xl font-semibold">{info.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};
