import { useEffect, useState } from "react";
import {
  getCityByCoordinates,
  getWeatherByCity,
} from "../services/weatherService";
import { WeatherData } from "../types/weather";
import { useGeolocation } from "./useGeolocation";

export const useWeather = () => {
  const { coords, error } = useGeolocation();
  const [data, setData] = useState<Record<string, WeatherData> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (!coords) return;
    async function fetchWeather() {
      setLoading(true);
      try {
        let cities: string[];

        if (coords) {
          const { latitude, longitude } = coords;
          const userCity = await getCityByCoordinates(latitude, longitude);
          cities = [userCity || "Meco", "Alcala de Henares"];
        } else {
          // fallback si aún no hay coordenadas (primera carga)
          cities = ["Meco", "Alcala de Henares"];
        }

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
