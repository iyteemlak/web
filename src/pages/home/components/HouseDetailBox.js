import React, { useGlobal } from 'reactn'
import "./HouseDetailBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import CloseButton from "../../../components/buttons/CloseButton"

function HouseDetailBox() {

  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse')

  if (activeHouse != null) {
    return (
      <Jumbotron className="home-page-box">
        <CloseButton onClick={() => setActiveHouse(null)}/>
        <h1>Ev deneme</h1>
        <p>
          Aciklama
        </p>
        <Button variant="primary">Learn more</Button>
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default HouseDetailBox;
