import { envs } from "../config/envs";

export const getWeatherByCity = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${envs.openWeatherApiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("No se pudo obtener el clima");
  }
  return response.json();
};
