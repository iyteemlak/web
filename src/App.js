import React, { useGlobal, useEffect } from 'reactn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import "./App.css";

import Map from "./components/map/Map";
import ListHouses from "./pages/listhouses/ListHouses";
import AddHouse from "./pages/addhouse/AddHouse";
import NotFound from "./pages/notfound/NotFound";

import { API_URL, TRACKING_ID } from "./Const";

function App() {

  ReactGA.initialize(TRACKING_ID);

  const [ allHouses, setAllHouses ] = useGlobal('allHouses');
  
  useEffect(() => {
    fetch(`${API_URL}/house`)
    .then(response => {
      if (!response.ok)
        throw response
      return response.json()
    })
    .then(json => setAllHouses(json))
    .catch(err => console.error("error code: " + err.status))
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
