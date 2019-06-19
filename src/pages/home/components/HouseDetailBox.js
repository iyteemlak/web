import React, { useGlobal } from 'reactn'
import "./HouseDetailBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import CloseButton from "../../../components/buttons/CloseButton"

function HouseDetailBox() {

  const [ map, setMap ] = useGlobal('map')
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse')

  if (activeHouse != null) {
    return (
      <Jumbotron className="home-page-box">
        <CloseButton onClick={() => setActiveHouse(null)}/>
        <p>Odalar: {activeHouse.rooms}</p>
        <p>Fiyat: {activeHouse.price}TL</p>
        <p>Iletisim: {activeHouse.contact}</p>
        <p>Ek aciklamalar: {activeHouse.description}</p>
        {activeHouse.location != null &&
          <Button onClick={() => map.panTo(activeHouse.location)}>
            Haritada Goster
          </Button>
        }
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default HouseDetailBox;
