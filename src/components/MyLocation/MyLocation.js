import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 23.765133509140806,
  lng: 90.38356609668395
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBu58Xg_rQKdoeLzM9XAz0oW-MGChktuD4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
