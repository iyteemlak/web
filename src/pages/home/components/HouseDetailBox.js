import React from 'react';
import "./HouseDetailBox.css"

import { Jumbotron, Button } from "react-bootstrap"
import CloseButton from "../../../components/buttons/CloseButton"

function HouseDetailBox() {
  return (
    <Jumbotron className="home-page-box">
      <CloseButton />
      <h1>Ev deneme</h1>
      <p>
        Aciklama
      </p>
      <Button variant="primary">Learn more</Button>
    </Jumbotron>
  );
}

export default HouseDetailBox;
