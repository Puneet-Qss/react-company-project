import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MyComponent = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    if (!mapElement.current) {
      return;
    }
  
    if (mapElement.current._leaflet_id) {
      mapElement.current._leaflet_id = null;
    }
  
    const map = L.map(mapElement.current).setView([42.2808, -83.7430], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Create a marker for "You are here"
    const youAreHereMarker = L.marker([42.2808, -83.7430]).addTo(map);
    youAreHereMarker.bindPopup("You are here"); 

  }, []);
  
  return <div style={{width : "100%",height: "300px"}} ref={mapElement} />;
};

export default MyComponent;
