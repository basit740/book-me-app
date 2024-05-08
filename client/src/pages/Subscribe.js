import React, { useState, useMemo, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { setKey, setLanguage, fromAddress } from "react-geocode";

function Subscribe() {
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

  const showInMapClicked = (lat, lng) => {
    window.open("https://maps.google.com?q=" + lat + "," + lng);
  };

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
          onClick={() => showInMapClicked(lat, lng)}
        >
          <Marker
            position={{ lat: lat, lng: lng }}
            onClick={(marker) => {
              const lat = marker.latLng.lat();
              const lng = marker.latLng.lng();
              showInMapClicked(lat, lng);
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
}

export default Subscribe;
