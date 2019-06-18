import React, { useGlobal } from 'reactn';
import "./main.css";

import Map from "./components/Map";
import HomePageBox from "./components/HomePageBox";
import ListHousesBox from './components/ListHousesBox';
import AddHouseBox from './components/AddHouseBox';
import HouseDetailBox from "./components/HouseDetailBox";

function HomePage() {

  const [ activeBox, setActiveBox ] = useGlobal('activeBox');
  
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
