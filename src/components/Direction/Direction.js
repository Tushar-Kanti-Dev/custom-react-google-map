import React, { useState } from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  LoadScript,
  GoogleMap,
} from "@react-google-maps/api";

const Direction = ({ origin, destination }) => {
  const [response, setResponse] = useState(null);
  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBu58Xg_rQKdoeLzM9XAz0oW-MGChktuD4">
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "100wh",
          width: "100%",
        }}
        // required
        zoom={16}
        // required
        center={{
          lat: 23.765133509140806,
          lng: 90.38356609668395
        }}
      >
        {destination !== "" && origin !== "" && (
          <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            // required
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            // required
            options={{
              directions: response,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Direction;
