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

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const city = await getCityByCoordinates(
          coords.latitude,
          coords.longitude
        );
        const weather = await getWeatherByCity(city[0].name);
        setData({ [city[0].name]: weather });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  return { data, loading };
};
