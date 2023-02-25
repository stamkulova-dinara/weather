import { FC } from "react";
import "./style.css";

interface IMain {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}
interface IWeather {
  description: string;
  icon: string;
}
interface IWind {
  speed: number;
}
interface IWeathers {
  weather: Array<IWeather>;
  city: string;
  main: IMain;
  wind: IWind;
}

type WeatherProps = {
  data: IWeathers;
};

export const CurrentWeather: FC<WeatherProps> = ({ data }) => {
  const { weather, city, main, wind }: IWeathers = data;
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
