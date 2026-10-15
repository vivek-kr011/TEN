import Search from "./Search.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Patna",
    feelslike: 24.89,
    temp: 25.62,
    tempMax: 25.62,
    tempMin: 25.62,
    humidity: 47,
    weather: "haze",
  });

  //new result ke sath updateInfo call hoga
  let updateInfo = (newInfo) => {   //result -> weather result
    setWeatherInfo(newInfo); // new result add 
  }

  return (
    <div>
      {/*-> Inside the div style={{textAlign: "center"}} */}
      {/* <h2>Weather App</h2> */}
      <Search updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
