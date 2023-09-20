import React, { useState } from "react";
import "../../assets/Styles/home.css";
import OurServices from './OurServices';
import Search from "./Search";
import Card from "./Card";

function Home() {
  const [searchResults, setSearchResults] = useState([]); 

  return (
    <div className="home-container">
      <Search onSearchResults={(results) => setSearchResults(results)} />
      <br />
      <Card results={searchResults} />
      <br />
      <OurServices />
    </div>
  );
}

export default Home;
