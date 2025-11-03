import { useEffect, useState } from "react";
import {
  getCityByCoordinates,
  getWeatherByCity,
} from "../services/weatherService";
import { WeatherData } from "../types/weather";
import { useGeolocation } from "./useGeolocation";

export const useWeather = () => {
  const { coords } = useGeolocation();
  const [data, setData] = useState<Record<string, WeatherData> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        const cities = await (async () => {
          if (coords) {
            const lat = coords.latitude;
            const lon = coords.longitude;
            return [await getCityByCoordinates(lat, lon)];
          } else {
            return ["Meco", "Alcala de Henares"];
          }
        })();
        setLoading(true);
        const results = await Promise.all(cities.map(getWeatherByCity));
        const formatted = cities.reduce((acc, city, index) => {
          acc[city] = results[index];
          return acc;
        }, {} as Record<string, WeatherData>);
        setData(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [coords]);

  return { data, loading };
};
