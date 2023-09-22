import React, { useState } from "react";
import axios from "axios";
import search from "../../assets/magnifying-glass.png";
import MusicCard from "./MusicCard";
import "../../assets/Styles/music.css";

import { ColorRing } from "react-loader-spinner";

function MusicSearch() {
  const [query, setQuery] = useState("");
  const [prevQuery, setPrevQuery] = useState("");
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchHandler = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: {
        q: query,
      },
      headers: {
        "X-RapidAPI-Key": "536c30b475msh43b577d55418735p153dd2jsn3f245da7bec7",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Response from Music", response.data);
      setData(response.data);
      setError(null);
      setPrevQuery(query);
      
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputClick = () => {
    setQuery(prevQuery);
  };

  return (
    <>
      <div
        className="input-group mb-3 w-50  main-music-container"
        style={{ textAlign: "center", margin: "5% auto" }}
      >
        <input
          type="text"
          className="form-control "
          placeholder="enter artist name, song name, album name"
          aria-label="Search query"
          aria-describedby="basic-addon2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={handleInputClick}
        />
        <div className="input-group-append">
          <span
            className="input-group-text"
            id="basic-addon2"
            style={{ cursor: "pointer" }}
            onClick={searchHandler}
          >
            <img src={search} alt="" height={"20px"} width={"20px"} />
            Search
          </span>
        </div>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <MusicCard data={data} />
      )}

      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
}

export default MusicSearch;
