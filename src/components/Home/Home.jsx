import React from "react";
import "../../assets/Styles/home.css";
import OurServices from "./OurServices";
import MusicSearch from "../Music/MusicSearch";

function Home() {
  return (
    <div className="home-container">
      <MusicSearch />
      <br />
      <OurServices />
    </div>
  );
}

export default Home;
