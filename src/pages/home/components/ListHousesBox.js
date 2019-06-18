import React, { useGlobal } from 'reactn'
import "./ListHousesBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import BackButton from "../../../components/buttons/BackButton"

function ListHousesBox() {

  const [ activeBox, setActiveBox ] = useGlobal('activeBox')

  if(activeBox === 'ListHousesBox') {
    return (
      <Jumbotron className="list-houses-box">
        <BackButton onClick={() => setActiveBox('HomePageBox')} />
        <h1>Evler</h1>
        <ul>
          <li>ev 1</li>
          <li>ev 2</li>
          <li>ev 3</li>
        </ul>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default ListHousesBox;
