import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useState } from "react";

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bf2e2a98e7bbda839be7a1e9845a85ed";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const jsonResponse = await response.json();

    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      country: jsonResponse.sys.country,
      weather: jsonResponse.weather[0].description,
    };
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!city.trim()) return;

    try {
      const newInfo = await getWeatherInfo();

      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="Search">
      <div className="search-card">
        <div className="search-heading">
          <h2>🌤️ Weather Search</h2>
          <p>Find the current weather of any city</p>
        </div>

        <form onSubmit={handleSubmit} className="search-form">
          <TextField
            id="city"
            label="Enter city name"
            placeholder="e.g. Patna, Delhi, Mumbai"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            fullWidth
            className="search-input"
          />

          <Button
            variant="contained"
            type="submit"
            startIcon={<SearchIcon />}
            className="search-button"
          >
            Search Weather
          </Button>
        </form>

        {error && (
          <p className="error-message">
            ⚠️ City not found. Please enter a valid city name.
          </p>
        )}
      </div>
    </div>
  );
}





// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./Search.css";
// import { useState } from "react";

// export default function Search({ updateInfo }) {
//   let [city, setCity] = useState("");
//   let [error, setError] = useState(false);

//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "bf2e2a98e7bbda839be7a1e9845a85ed";

//   /* WEATHER INFORRMATION is a async function */
//   let getWeatherInfo = async () => {
//     try {
//       //query string send kar rahe hai
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );

//       let jsonResponse = await response.json();
//       // console.log(jsonResponse);
//       let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         country: jsonResponse.sys.country,
//         weather: jsonResponse.weather[0].description,
//       };
//       console.log(result);
//       return result;
//     } catch (err) {
//       console.log(err);
//       // throw err;
//     }
//   };

//   let handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   let handleSubmit = async (evt) => {
//     try {
//       evt.preventDefault();
//       console.log(city);
//       setCity("");  //city set to null after refresh
//       let newInfo = await getWeatherInfo();
//       updateInfo(newInfo);
//     } catch (err) {
//       console.log(err);
//       setError(true);
//     }
//   };

//   return (
//     <div className="Search">
//       {/* <h3>Search for weather</h3> */}

//       <form action="" onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//           className="searchBox"
//         />
//         <br /> <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && <p style={{color:"red"}} >No such place exist</p>}
//       </form>
//     </div>
//   );
// }