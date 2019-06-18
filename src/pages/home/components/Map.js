import React, { useGlobal } from 'reactn'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Map() {

  const [ center, setCenter ] = useGlobal('center');
  const [ map, setMap ] = useGlobal('map');
  const [ allHouses, setAllHouses ] = useGlobal('allHouses');
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGT2oqCkTQBBIFmkyiKIwDMVtY3cJclDY"
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    return <GoogleMap
      id='map'
      onLoad={(map) => setMap(map)}
      mapContainerStyle={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      }}
      zoom={15}
      center={center}
      onCenterChanged={() => setCenter(map.getCenter())}
      options={{
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      {allHouses.map(house => {
        return <Marker onClick={e => setActiveHouse(house)} position={house.location} />
      })}
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>loading...</div>//<Spinner />
}

export default Map;
