import React, { useState, useMemo, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { setKey, setLanguage, fromAddress } from "react-geocode";

function Subscribe() {
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  setKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  setLanguage("en");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapOptions = useMemo(
    () => ({
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    }),
    []
  );

  useEffect(() => {
    fromAddress(process.env.REACT_APP_LOCATION)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setLat(lat);
        setLng(lng);
      })
      .catch(console.error);
  }, []);

  return (
    <div id={"location"} className="subscribe">
      {isLoaded && lat && lng && (
        <GoogleMap
          mapContainerStyle={{
            height: "500px",
            width: "100%",
          }}
          options={mapOptions}
          center={{ lat: lat, lng: lng }}
          zoom={18}
        >
          <Marker position={{ lat: lat, lng: lng }} />
        </GoogleMap>
      )}
    </div>
  );
}

export default Subscribe;
