import React, { useGlobal } from 'reactn'
import { GoogleMap, useLoadScript, Marker, OverlayView } from '@react-google-maps/api'

function Map() {

  const [ center, setCenter ] = useGlobal('center');
  const [ map, setMap ] = useGlobal('map');
  const [ allHouses, setAllHouses ] = useGlobal('allHouses');
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse');
  const [ addHouseLocation, setAddHouseLocation ] = useGlobal('addHouseLocation');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGT2oqCkTQBBIFmkyiKIwDMVtY3cJclDY"
  })

  const renderMap = () => {
    return <GoogleMap
      id='map'
      onLoad={(map) => setMap(map)}
      zoom={15}
      center={center}
      onClick={e => setAddHouseLocation(e.latLng)}
      onCenterChanged={() => setCenter(map.getCenter())}
      options={{
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      {allHouses.map((house, index) => {
        return house.location != null && 
        <Marker 
          key={index} 
          onClick={e => activeHouse != null && activeHouse === house ? setActiveHouse(null) : setActiveHouse(house)} position={house.location} />
      })}
      {addHouseLocation !== null &&
        <Marker
          onClick={e => setAddHouseLocation(null)} 
          position={addHouseLocation} 
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }} />}
      {activeHouse !== null && 
        <OverlayView
          position={activeHouse.location}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div
            style={{
              marginTop:"-245px",
              marginLeft:"-120px",
              width:"240px",
              height:"200px",
              background: `white`,
              border: `1px solid #dee2e6`,
              borderRadius: "4px",
              padding: "15px",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              overflow: "scroll"
            }}>
              <b>Odalar:</b> {activeHouse.rooms}<br/>
              <b>Fiyat:</b> {activeHouse.price}TL<br/>
              <b>İletişim:</b> {activeHouse.contact}<br/>
              {activeHouse.description}<br/>
          </div>
        </OverlayView>}
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  // TODO: <Spinner />
  return isLoaded ? renderMap() : <div>loading...</div>
}

export default Map;
