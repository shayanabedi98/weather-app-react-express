// import { useState } from "react";
// import "./App.css";
// import { getNameList } from "country-list";
// import {v4 as uuid} from 'uuid'

// function App() {
//   type CountryList = {
//     [countryName: string]: string;
//   };

//   type WeatherForecast = {
//     dt_txt: string
//     weather: {
//       main: string
//     }[]
//     main: {
//       temp_min: string
//       temp_max: string
//     }
//   }

//   type WeatherData = {
//     list: WeatherForecast[]
//   }

//   const apiKey: string = import.meta.env.VITE_API_KEY;

//   const [countries, setCountries] = useState<CountryList>(getNameList());
//   const [countryCode, setCountryCode] = useState<string | null>(null);
//   const [city, setCity] = useState<string>("");
//   const [data1, setData1] = useState();
//   const [data2, setData2] = useState();

//   const fetchWeather = async () => {
//     try {
//       // fetching current weather
//       const response1 = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
//       )
//       const responseData1 = await response1.json() 
//       setData1(responseData1)
//       console.log(data1);
      
//       // fetching 5day/3hr step weather
//       const response2 = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
//       );
//       const responseData2 = await response2.json() 
//       setData2(responseData2)
//       console.log(data2);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={city}
//         onChange={(event) => {
//           setCity(event.target.value);
//         }}
//       />
//       <select
//         onChange={(event) => {
//           setCountryCode(event.target.value);
//         }}
//         name="country"
//       >
//         {Object.entries(countries).map(([name, code]) => {
//           return (
//             <option value={code} key={code}>
//               {name}
//             </option>
//           );
//         })}
//       </select>
//       <button onClick={fetchWeather}>Search</button>
//       {/* <div>
//         {data2?.list.map((item: WeatherForecast) => {
//           return (
//             <div key={uuid()}>

//             </div>
//           );
//         })}
//       </div> */}
//     </>
//   );
// }

// export default App;
