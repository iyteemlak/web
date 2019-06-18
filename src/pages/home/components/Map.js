import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyCGT2oqCkTQBBIFmkyiKIwDMVtY3cJclDY"
    >
      <GoogleMap
        id='example-map'
        mapContainerStyle={{
          height: "400px",
          width: "800px"
        }}
        zoom={7}
        center={{
          lat: -3.745,
          lng: -38.523
        }}
      >
        ...Your map components
      </GoogleMap>
    </LoadScript>
   )
}

export default Map;
