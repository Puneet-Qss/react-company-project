import React, { useState } from "react";
import search from "../../assets/magnifying-glass.png";
import axios from "axios";

function Search({ onSearchResults }) {

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = async () => {
    const options = {
      method: "GET",
      url: "https://trustpilot-company-and-reviews-data.p.rapidapi.com/company-search",
      params: {
        query: input,
        page: "1",
        locale: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "536c30b475msh43b577d55418735p153dd2jsn3f245da7bec7",
        "X-RapidAPI-Host": "trustpilot-company-and-reviews-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data);
      onSearchResults(response.data);
      setError(null);
      console.log("Search Results:", response.data);
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="input-group mb-3 w-50"
        style={{ textAlign: "center", margin: "5% auto" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter your company name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
          onChange={inputHandler}
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

      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
}

export default Search;
