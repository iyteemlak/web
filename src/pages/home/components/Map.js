import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGT2oqCkTQBBIFmkyiKIwDMVtY3cJclDY"
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    return <GoogleMap
      id='map'
      mapContainerStyle={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      }}
      zoom={15}
      center={{
        lat: 38.3322481,
        lng: 26.6346842
      }}
      options={{
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      ...Your map components
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>loading...</div>//<Spinner />
}

export default Map;
