import { envs } from "../config/envs";

export const getWeatherByCity = async (lat: string, lon: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${envs.openWeatherApiKey}&units=metric&lang=es`
  );

  if (!response.ok) {
    throw new Error("No se pudo obtener el clima");
  }
  return response.json();
};
