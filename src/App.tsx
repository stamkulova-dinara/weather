import { useEffect, useState } from "react";
import { CurrentWeather } from "./components/currentWeather";
import { Search } from "./components/Inputs";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./requestApi";
import "./App.css";
import { Loader } from "./components/Loader";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleSearch = async (e: any) => {
    const currentWeatherFetch = await fetch(
      `${WEATHER_API_URL}/weather?q=${e?.value}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const json = await currentWeatherFetch.json();
    setCurrentWeather({ city: e.value, ...json });
  };

  function getCurrentLocationWeather() {
    navigator.geolocation.getCurrentPosition(async (position: any) => {
      const a = await fetch(
        `${WEATHER_API_URL}/weather?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&appid=${WEATHER_API_KEY}`
      );
      const b = await a.json();
      const currentWeatherFetch = await fetch(
        `${WEATHER_API_URL}/weather?q=${b.name}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const json = await currentWeatherFetch.json();
      setCurrentWeather({ city: b.name, ...json });
    });
  }

  useEffect(() => getCurrentLocationWeather(), []);
  return (
    <div className="app">
      <Search onSearchChange={handleSearch} />
      {currentWeather ? <CurrentWeather data={currentWeather} /> : <Loader />}
    </div>
  );
};

export default App;
