import React from 'react';
import "./ListHousesBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import BackButton from "../../../components/buttons/BackButton"

function ListHousesBox() {
  return (
    <Jumbotron className="list-houses-box">
      <BackButton />
      <h1>Evler</h1>
      <ul>
        <li>ev 1</li>
        <li>ev 2</li>
        <li>ev 3</li>
      </ul>
    </Jumbotron>
  );
}

export default ListHousesBox;
