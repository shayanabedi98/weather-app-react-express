import { FutureWeatherType, WeatherList } from "../types";

type Props = {
  future: FutureWeatherType;
  day: number;
  system: string;
};
export function DayWeather({ future, day, system }: Props) {
  return (
    <div>
      <h2>
        {
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][day]
        }
      </h2>
      {future.list
        .filter((item: WeatherList) => new Date(item.dt_txt).getDay() === day)
        .map((data: WeatherList) => {
          let forecastImage = "";
          if (data?.weather[0].icon === "01d") {
            forecastImage = "weather-assets/clear-d.png";
          } else if (data?.weather[0].icon === "01n") {
            forecastImage = "weather-assets/clear-n.png";
          } else if (
            data?.weather[0].icon === "02d" ||
            data?.weather[0].icon === "04d"
          ) {
            forecastImage = "weather-assets/cloud-d.png";
          } else if (
            data?.weather[0].icon === "02n" ||
            data?.weather[0].icon === "04n"
          ) {
            forecastImage = "weather-assets/cloud-n.png";
          } else if (
            data?.weather[0].icon === "03d" ||
            data?.weather[0].icon === "03n"
          ) {
            forecastImage = "weather-assets/cloud-d-n.png";
          } else if (
            data?.weather[0].icon === "09d" ||
            data?.weather[0].icon === "10d"
          ) {
            forecastImage = "weather-assets/rain-d.png";
          } else if (
            data?.weather[0].icon === "09d" ||
            data?.weather[0].icon === "10d"
          ) {
            forecastImage = "weather-assets/rain-d.png";
          } else if (
            data?.weather[0].icon === "09n" ||
            data?.weather[0].icon === "10n"
          ) {
            forecastImage = "weather-assets/rain-n.png";
          } else if (data?.weather[0].icon === "13d") {
            forecastImage = "weather-assets/snow-d.png";
          } else if (data?.weather[0].icon === "13n") {
            forecastImage = "weather-assets/snow-n.png";
          }
          return (
            <div key={data.dt_txt}>
              <img src={forecastImage} alt="" />
              <p>
                {Math.round(
                  system === "metric"
                    ? data.main.temp - 273.15
                    : (data.main.temp - 273.15) * 1.8 + 32
                )}
                {system === "metric" ? "°C" : "°F"}
              </p>
            </div>
          );
        })}
    </div>
  );
}
