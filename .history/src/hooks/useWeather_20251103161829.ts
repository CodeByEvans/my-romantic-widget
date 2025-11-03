import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/weatherService";
import { WeatherData } from "../types/weather";

export const useWeather = (cities: string[]) => {
  const [data, setData] = useState<Record<string, WeatherData> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const results = await Promise.all(cities.map(getWeatherByCity));
        const formatted = cities.reduce((acc, city, index) => {
          acc[city] = results[index];
          return acc;
        }, {} as Record<string, any>);
        setData(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [cities]);

  return { data, loading };
};
