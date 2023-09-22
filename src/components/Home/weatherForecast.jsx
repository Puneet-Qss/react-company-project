import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "6b3eba60e47db87166821d035da1f485";

        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );

            setForecastData(response.data);
          });
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div style={{marginTop:"5px", marginRight:"5px"}}>
      {forecastData ? (
        <div className="card forecast-card" style={{ width: "300px", lineHeight:"6px"  , fontSize:"13px" , marginLeft:"75%", padding:"3px" , borderColor : "lightcoral", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <img
            src={`https://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}.png`}
            alt=""
            height={"100px"}
            width={"80px"}
            style={{margin: "0 auto"}}
          />
          <p>City Name: <span> {forecastData.city.name}  </span></p>
          <p>Description:<span>  {forecastData.list[0].weather[0].description} </span></p>
          <p>wind speed : {forecastData.list[0].wind.speed}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
