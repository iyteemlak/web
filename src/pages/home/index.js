import React, { useGlobal, useEffect } from 'reactn';
import "./main.css";

import Map from "./components/Map";
import HomePageBox from "./components/HomePageBox";
import ListHousesBox from './components/ListHousesBox';
import AddHouseBox from './components/AddHouseBox';
import HouseDetailBox from "./components/HouseDetailBox";

function HomePage() {

  const [ allHouses, setAllHouses ] = useGlobal('allHouses');
  
  useEffect(() => {
    fetch("http://localhost:8082/house")
    .then(response => response.json())
    .then(json => setAllHouses(json))
  }, []);

  return (
    <>
      <Map />
      <div className="home-page">
        <HomePageBox />
        <ListHousesBox />
        <AddHouseBox />
        <HouseDetailBox />
      </div>
    </>
  );
}

export default HomePage;
