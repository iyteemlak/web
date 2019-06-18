import React from 'react';
import "./main.css"

import Map from "./components/Map"
import HomePageBox from "./components/HomePageBox"
import ListHousesBox from './components/ListHousesBox';
import AddHouseBox from './components/AddHouseBox';
import HouseDetailBox from "./components/HouseDetailBox"

function HomePage() {



  return (
    <>
      <Map />
      <div className="home-page">
        {/* <HomePageBox /> */}
        {/* <ListHousesBox /> */}
        <AddHouseBox />
        <HouseDetailBox />
      </div>
    </>
  );
}

export default HomePage;
