import React, { useGlobal } from 'reactn'
import "./HomePageBox.css"

import { Jumbotron, Button } from "react-bootstrap"

function HomePageBox() {

  const [ activeBox, setActiveBox ] = useGlobal('activeBox')

  if (activeBox === 'HomePageBox') {
    return (
      <Jumbotron className="house-detail-box">
        <h1>Iyte Emlak</h1>
        <p>
          Bu site Iyteli arkadaslarimizin gulbahce cevresinde ev bulma problemini gidermek icin Iyteliler tarafindan yapilmistir. Her turlu gorus, oneri ve yardimlariniza acigiz. Eklenen evler moderatorler tarafindan incelendikten sonra sisteme eklenecektir.
        </p>
        <Button className="list-houses" variant="primary" onClick={() => setActiveBox('ListHousesBox')}>Evleri Listele</Button>
        <Button className="add-house" variant="primary" onClick={() => setActiveBox('AddHouseBox')}>Ev ekle</Button>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default HomePageBox;
