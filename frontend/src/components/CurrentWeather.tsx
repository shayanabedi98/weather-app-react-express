import { CurrentWeatherType } from "../types";

type Props = {
  present: CurrentWeatherType | null;
  system: string;
};

export default function CurrentWeather({ present, system }: Props) {
  let currentImage = "";

  if (present?.cod === 200) {
    if (present?.weather[0].icon === "01d") {
      currentImage = "weather-assets/clear-d.png";
    } else if (present?.weather[0].icon === "01n") {
      currentImage = "weather-assets/clear-n.png";
    } else if (
      present?.weather[0].icon === "02d" ||
      present?.weather[0].icon === "04d"
    ) {
      currentImage = "weather-assets/cloud-d.png";
    } else if (
      present?.weather[0].icon === "02n" ||
      present?.weather[0].icon === "04n"
    ) {
      currentImage = "weather-assets/cloud-n.png";
    } else if (
      present?.weather[0].icon === "03d" ||
      present?.weather[0].icon === "03n"
    ) {
      currentImage = "weather-assets/cloud-d-n.png";
    } else if (
      present?.weather[0].icon === "09d" ||
      present?.weather[0].icon === "10d"
    ) {
      currentImage = "weather-assets/rain-d.png";
    } else if (
      present?.weather[0].icon === "09d" ||
      present?.weather[0].icon === "10d"
    ) {
      currentImage = "weather-assets/rain-d.png";
    } else if (
      present?.weather[0].icon === "09n" ||
      present?.weather[0].icon === "10n"
    ) {
      currentImage = "weather-assets/rain-n.png";
    } else if (present?.weather[0].icon === "13d") {
      currentImage = "weather-assets/snow-d.png";
    } else if (present?.weather[0].icon === "13n") {
      currentImage = "weather-assets/snow-n.png";
    }
  }

  return (
    <div className="current-container">
      {present?.cod === 200 && (
        <div className="current-card">
          <h2>{present.name}</h2>
          <img src={currentImage} alt="" />
          <h3>{present.weather[0].description}</h3>
          <h3>
            {Math.round(
              system === "metric"
                ? present.main.temp - 273.15
                : (present.main.temp - 273.15) * 1.8 + 32
            )}
            {system === "metric" ? "°C" : "°F"}
          </h3>
          <p>
            Feels like:{" "}
            {Math.round(
              system === "metric"
                ? present.main.feels_like - 273.15
                : (present.main.feels_like - 273.15) * 1.8 + 32
            )}
            {system === "metric" ? "°C" : "°F"}
          </p>
          <div className="additional-info">
            <p>
              Wind speed:{" "}
              {system === "metric"
                ? (present.wind.speed * 3.6).toFixed(2) + " km/h"
                : (present.wind.speed * 2.23694).toFixed(2) + " mph"}
            </p>
            <p>Humidity: {present.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
