import React, { useGlobal } from 'reactn'
import "./ListHousesBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import BackButton from "../../../components/buttons/BackButton"

function ListHousesBox() {

  const [ map, setMap ] = useGlobal('map')
  const [ activeBox, setActiveBox ] = useGlobal('activeBox')
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse')
  const [ allHouses, setAllHouses ] = useGlobal('allHouses')

  if(activeBox === 'ListHousesBox') {
    return (
      <Jumbotron className="list-houses-box">
        <BackButton onClick={() => setActiveBox('HomePageBox')} />
        <h1>Evler</h1>
        <ul>
          {allHouses.map(house => {
            return (
              <li style={{lineHeight: "40px", marginBottom: "8px"}}>
                {house.rooms}, {house.price}TL
                {house.location != null ? (
                  <Button 
                    style={{float: "right"}} 
                    onClick={() => {
                      setActiveHouse(house)
                      map.panTo(house.location)
                    }}>
                    Haritada Goster
                  </Button>
                ) : (
                  <Button style={{float: "right"}} onClick={() => setActiveHouse(house)}>
                    Aciklamalar
                  </Button>
                )}
              </li>
            )
          })}
        </ul>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default ListHousesBox;
