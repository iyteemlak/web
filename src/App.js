import React, { useGlobal, useEffect } from 'reactn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Map from "./components/map/Map";
import ListHouses from "./pages/listhouses/ListHouses";
import AddHouse from "./pages/addhouse/AddHouse";
import NotFound from "./pages/notfound/NotFound";

import { API_URL } from "./Const";

function App() {

  const [ allHouses, setAllHouses ] = useGlobal('allHouses');
  
  // TODO: error handling
  useEffect(() => {
    fetch(`${API_URL}/house`)
    .then(response => response.json())
    .then(json => setAllHouses(json))
  }, []);

  return (
    <>
      <Router>
        <div className="route-container">
          <Switch>
            <Route path="/" component={ListHouses} exact/>
            <Route path="/ekle" component={AddHouse} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Map />
      </Router>
    </>
  );
}

export default App;
