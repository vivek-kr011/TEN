
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&auto=format&fit=crop&q=80";

  const COLD_URL =
    "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=800&auto=format&fit=crop&q=80";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?w=800&auto=format&fit=crop&q=80";

  const isRainy = info.humidity > 80;
  const isHot = info.temp > 15;

  const weatherImage = isRainy
    ? RAIN_URL
    : isHot
    ? HOT_URL
    : COLD_URL;

  const WeatherIcon = isRainy
    ? ThunderstormIcon
    : isHot
    ? SunnyIcon
    : AcUnitIcon;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className="weather-card">

          {/* Weather Image */}
          <CardMedia
            className="weather-image"
            image={weatherImage}
            title={`${info.weather} in ${info.city}`}
          />

          {/* Weather Content */}
          <CardContent className="weather-content">

            {/* City */}
            <div className="location">
              <Typography variant="h5" className="city-name">
                {info.city}, {info.country}
              </Typography>

              <WeatherIcon className="weather-icon" />
            </div>

            {/* Temperature */}
            <div className="temperature-section">
              <span className="temperature">
                {Math.round(info.temp)}
              </span>

              <span className="degree">°C</span>
            </div>

            {/* Weather Description */}
            <p className="weather-description">
              {info.weather}
            </p>

            {/* Weather Details */}
            <div className="weather-details">

              <div className="weather-detail">
                <ThermostatIcon />
                <div>
                  <span>Feels Like</span>
                  <strong>{Math.round(info.feelsLike)}°C</strong>
                </div>
              </div>

              <div className="weather-detail">
                <WaterDropIcon />
                <div>
                  <span>Humidity</span>
                  <strong>{info.humidity}%</strong>
                </div>
              </div>

              <div className="weather-detail">
                <DeviceThermostatIcon />
                <div>
                  <span>Min Temp</span>
                  <strong>{Math.round(info.tempMin)}°C</strong>
                </div>
              </div>

              <div className="weather-detail">
                <DeviceThermostatIcon />
                <div>
                  <span>Max Temp</span>
                  <strong>{Math.round(info.tempMax)}°C</strong>
                </div>
              </div>

            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}


// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import "./InfoBox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';

// export default function InfoBox({ info }) {
//   const INIT_URL =
//     " https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww ";

//   const HOT_URL =
//     "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwc3VtbWVyfGVufDB8fDB8fHww";
//   const COLD_URL =
//     "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
//   const RAIN_URL =
//     "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";


//   return (
//     <div className="InfoBox">
//       {/* <h1>Weather Info - {info.weather}</h1> */}
//       <div className="cardContainer">
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             sx={{ height: 140 }}
//             // image={INIT_URL}
//             image={
//               info.humidity > 80
//                 ? RAIN_URL
//                 : info.temp > 15
//                 ? HOT_URL
//                 : COLD_URL
//             }
//             title="green iguana"
//           />

//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city} {
//                 info.humidity > 80
//                 ? <ThunderstormIcon/>
//                 : info.temp > 15
//                 ? <AcUnitIcon/>
//                 : <SunnyIcon/>
                
//               }
//             </Typography>

//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary" }}
//               component={"span"}
//             >
//               <div>Humidity = {info.humidity}</div>
//               <div>Temperature = {info.temp}&deg;C</div>
//               <div>Weather = {info.weather}</div>
//               <div>Min-Temp = {info.tempMin}&deg;C</div>
//               <div>Max-Temp = {info.tempMax}&deg;C</div>
//               <div>
//                 The weather can be described as <i>{info.weather}</i> and feels
//                 Like = {info.feelslike}&deg;C
//               </div>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
