import React, { useGlobal, useState } from 'reactn'
import ReactGA from 'react-ga';
import "./ListHouses.css"

import { Button, Table } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMapMarkedAlt, FaCaretUp, FaCaretDown, FaGithub, FaTrello } from 'react-icons/fa'

function nextSorting(sort) {
  if (sort == 'asc') {
    return 'desc'
  } else if (sort == 'desc') {
    return null
  } else {
    return 'asc'
  }
}

function sortRooms(houses, roomSort) {
  if (roomSort === 'asc') {
    return houses.sort((e1, e2) => e1.rooms > e2.rooms ? 1 : -1)
  } else if (roomSort === 'desc') {
    return houses.sort((e1, e2) => e2.rooms > e1.rooms ? 1 : -1)
  } else {
    return houses
  }
}

function sortPrice (houses, priceSort) {
  if (priceSort === 'asc') {
    return houses.sort((e1, e2) => e1.price - e2.price)
  } else if (priceSort === 'desc') {
    return houses.sort((e1, e2) => e2.price - e1.price)
  } else {
    return houses
  }
}

function handleContactFormat(phoneStr, callable){
  phoneStr = phoneStr.slice(phoneStr.indexOf("5"))
  s2 = (""+phoneStr).replace(/\D/g, ''),
  m = s2.match(/^(\d{3})?[- ]??[\s]?(\d{3})?[\s]?(\d{2})?[\s]?(\d{2})(.*)?$/);
  if (callable){
    // may be a problem with foreign phone numbers
    phoneStr = (!m) ? null : "+90-" + m[1] + "-" + m[2] + "-" + m[3]+ "-" + m[4];
  } else {
    // may be a problem with foreign phone numbers
    phoneStr = (!m) ? null : "+90 " + m[1] + " " + m[2] + " " + m[3]+ " " + m[4];
  }
	return phoneStr;
}

function ListHousesBox() {

  ReactGA.pageview('/');

  const [ allHouses, setAllHouses ] = useGlobal('allHouses')
  const [ activeHouse, setActiveHouse ] = useGlobal('activeHouse')
  const [ map, setMap ] = useGlobal('map')

  const [ roomSort, setRoomSort ] = useState('asc');
  const [ priceSort, setPriceSort ] = useState(null);

  const panTo = (house) => {
    setActiveHouse(house)
    map.panTo(house.location)
  }

  return (
    <div className="list-houses-container">
      <h1 className="header"><FaMapMarkedAlt className="header-icon" /> İyte Emlak</h1>
      <div className="add-house">
        <Link to="/ekle">Ev Ekle</Link>
      </div>
      <div className="table-container">
        <Table responsive hover>
          <thead>
            <tr>
              <th onClick={() => {
                setRoomSort(nextSorting(roomSort))
                setPriceSort(null)
              }}>Odalar {roomSort === 'asc' ? <FaCaretUp /> : (roomSort === 'desc' ? <FaCaretDown /> : null)}</th>
              <th onClick={() => {
                setPriceSort(nextSorting(priceSort))
                setRoomSort(null)
              }}>Fiyat {priceSort === 'asc' ? <FaCaretUp /> : (priceSort === 'desc' ? <FaCaretDown /> : null)}</th>
              <th>İletişim</th>
              <th className="button-col"/>
            </tr>
          </thead>
          <tbody>
            {sortPrice(sortRooms(JSON.parse(JSON.stringify(allHouses)), roomSort), priceSort).map((house, index) => {
              return (
                <tr key={index}>
                  <td>{house.rooms}</td>
                  <td>{house.price}TL</td>
                  <td><a href={this.handleContactFormat(house.contact, true)}>{this.handleContactFormat(house.contact, false)}</a></td>
                  <td>
                    {house.location !== null && house.location.lat !== null && 
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
      <footer className="footer">
        <a href="https://github.com/iyteemlak" className="icon-container" target="_blank"><FaGithub className="icon" /></a>
        <a href="https://trello.com/iyteemlakcom" className="icon-container" target="_blank"><FaTrello className="icon" /></a>
      </footer>
    </div>
  )
}

export default ListHousesBox;
