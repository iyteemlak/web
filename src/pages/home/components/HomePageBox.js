import React from 'react';
import "./HomePageBox.css"

import { Jumbotron, Button } from "react-bootstrap"

function HomePageBox() {
  return (
    <Jumbotron className="house-detail-box">
      <h1>Iyte Emlak</h1>
      <p>
        Bu site iyteli arkadaslarimizin gulbahce cevresinde ev bulma problemini gidermek icin yapilmistir.
      </p>
      <Button className="list-houses" variant="primary">Evleri Listele</Button>
      <Button className="add-house" variant="primary">Ev ekle</Button>
    </Jumbotron>
  );
}

export default HomePageBox;
