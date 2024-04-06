import React from "react";
import { Container } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <i
      class="fa-solid fa-location-dot"
      style={{ color: "#cb0101", fontSize: 40 }}
    ></i>
    <p className="pin-text">{text}</p>
  </div>
);

function Subscribe() {
  return (
    <div className="subscribe">
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={JSON.parse(process.env.REACT_APP_LOCATION)}
          defaultZoom={17}
          style={{ height: 300, margin: 20 }}
        >
          <LocationPin
            lat={JSON.parse(process.env.REACT_APP_LOCATION).lat}
            lng={JSON.parse(process.env.REACT_APP_LOCATION).lng}
            text={JSON.parse(process.env.REACT_APP_LOCATION).address}
          />
        </GoogleMapReact>
      </Container>
    </div>
  );
}

export default Subscribe;
