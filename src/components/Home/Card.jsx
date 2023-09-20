import React, { useEffect, useState } from "react";
import "../../assets/Styles/card.css";

function Card({ results }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (results && results.data && results.data.companies) {
      setLoading(false);
    }
  }, [results]);

  console.log("Results", results.data?.companies);

  return (
    <>
      <div className="main-container">
        {loading ? (
          <p style={{ marginLeft: "45%" }}>Loading...</p>
        ) : (
          <>
            ``
            {results.data?.companies.map((val, index) => {
              return (
                <div className="card-details" key={index}>
                  <div className="card-data">
                    <p className="name">{val.name}</p>
                    <br />
                    <p>
                      <strong>Domain : </strong>
                      {val.domain}
                    </p>
                    <br />
                    <p>
                      <strong>rating: </strong>
                      {val.rating}
                    </p>
                  </div>
                  <br />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Card;
