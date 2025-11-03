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
    if (coords) {
      setLoading(true);
      getCityByCoordinates(coords.latitude, coords.longitude).then((city) => {
        getWeatherByCity(city[0].name).then((weather) => {
          setData((prevData) => ({
            ...prevData,
            [city[0].name]: weather,
          }));
          setLoading(false);
        });
      });
    }
  }, [coords]);

  return { data, loading };
};
