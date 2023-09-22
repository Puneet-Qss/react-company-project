import React from "react";
import "../../assets/Styles/home.css";
import OurServices from "./OurServices";
import MusicSearch from "../Music/MusicSearch";
import WeatherForecast from "./weatherForecast";

function Home() {
  return (
    <div className="home-container">
      <WeatherForecast/>
      <MusicSearch />
      <br />
      <br />
      <br />
      
      <OurServices />
    </div>
  );
}

export default Home;
