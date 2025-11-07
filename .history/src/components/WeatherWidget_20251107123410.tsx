export const WeatherWidget = () => {
  const { data, loading, errorWeather } = useWeather();

  if (errorWeather)
    return <div className="text-xs text-red-400">{errorWeather}</div>;
  if (loading || !data)
    return <div className="text-xs text-gray-400">Cargando clima...</div>;

  const [city, info] = Object.entries(data)[0] || [];
  const temp = Math.round(info.main.temp);
  const condition = info.weather[0].main;

  const style = weatherStyles[condition] || weatherStyles["Clouds"];

  return (
    <div
      className={`theme-glass flex flex-col items-center justify-center
                  w-[150px] h-[100px] transition-all duration-500`}
    >
      <div className="flex items-center gap-4">
        <div className="animate-pulse-slow">{style.icon}</div>
        <div className="flex flex-col items-start leading-tight">
          <h2 className="text-xs font-semibold tracking-wide drop-shadow-sm">
            {city}
          </h2>
          <p className="text-lg font-bold drop-shadow-sm">{temp}°C</p>
        </div>
      </div>
    </div>
  );
};
