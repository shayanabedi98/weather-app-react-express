import { CurrentWeatherType } from "../types";

type CountriesList = {
  [countries: string]: string;
};

type Props = {
  city: string;
  setCity: (city: string) => void;
  setCountryCode: (code: string) => void;
  countriesList: CountriesList;
  fetchCurrentWeather: () => void;
  fetchFutureWeather: () => void;
  present: null | CurrentWeatherType;
};

export default function Search({
  city,
  setCity,
  setCountryCode,
  countriesList,
  fetchCurrentWeather,
  fetchFutureWeather,
}: Props) {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <select
        onChange={(event) => {
          setCountryCode(event.target.value);
        }}
      >
        {Object.entries(countriesList).map(([name, code]) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          fetchCurrentWeather();
          fetchFutureWeather();
        }}
      >
        Search
      </button>
    </div>
  );
}
