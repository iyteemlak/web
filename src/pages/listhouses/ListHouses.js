import React, { useGlobal } from 'reactn'
import "./ListHouses.css"

import { Button, Table } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'

function ListHousesBox() {

  const [ allHouses, setAllHouses ] = useGlobal('allHouses')
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse')
  const [ map, setMap ] = useGlobal('map')

  const panTo = (house) => {
    setActiveHouse(house)
    map.panTo(house.location)
  }

  return (
    <div className="list-houses-container">
      <h1 className="header">İyte Emlak</h1>
      <div className="add-house">
        <Link to="/ekle">Ev Ekle</Link>
      </div>
      <div className="table-container">
        <Table responsive hover>
          <thead>
            <tr>
              <th>Oda Sayısı</th>
              <th>Fiyat</th>
              <th>İletişim</th>
              <th>Açıklamalar</th>
              <th className="button-col"/>
            </tr>
          </thead>
          <tbody>
            {allHouses.map((house, index) => {
              return (
                <tr key={index}>
                  <td>{house.rooms}</td>
                  <td>{house.price}TL</td>
                  <td>{house.contact}</td>
                  <td>{house.description}</td>
                  <td>
                    {house.location != null && 
                      <Button onClick={() => panTo(house)}>
                        <FaMapMarkerAlt />
                      </Button>
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ListHousesBox;
