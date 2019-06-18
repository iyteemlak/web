import React from 'react';
import "./AddHouseBox.css"

import { Jumbotron, InputGroup, FormControl, Button } from "react-bootstrap"
import BackButton from "../../../components/buttons/BackButton"

function AddHouseBox() {
  return (
    <Jumbotron className="list-houses-box">
      <BackButton />
      <h1>Ev Ekle</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="primary">Ekle</Button>
    </Jumbotron>
  );
}

export default AddHouseBox;
