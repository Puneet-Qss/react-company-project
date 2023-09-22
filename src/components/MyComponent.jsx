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

    const map = L.map(mapElement.current, {
      dragging: true,
    }).setView([42.2808, -83.743], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "./../assets/location.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const youAreHereMarker = L.marker([42.2808, -83.743], {
      icon: customIcon,
    }).addTo(map);
    youAreHereMarker.bindPopup("You are here").openPopup();

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const userLocation = [latitude, longitude];

      youAreHereMarker.setLatLng(userLocation);
      map.setView(userLocation, 13);
    });
  }, []);

  return (
    <div
      id="location"
      style={{ width: "100%", height: "300px" }}
      ref={mapElement}
    />
  );
};

export default MyComponent;
