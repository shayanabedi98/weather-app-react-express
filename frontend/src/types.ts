export type FutureWeatherType = {
    cod: string 
    list: WeatherList[]
}

export type WeatherList = {
    main: {
        temp: number
    }
    weather: [
        {
            main: string
            icon: string
        }
    ]
    dt_txt: string
}  

export type CurrentWeatherType = {
    main: {
      temp: number;
      feels_like: number;
      humidity: number
    };
    weather: [
      {
        main: string
        description: string;
        icon: string
      }
    ];
    wind: {
      speed: number;
    };
    name: string;
    cod: number | string;
  };

