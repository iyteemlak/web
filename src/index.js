import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

setGlobal({
  center: {
    lat: 38.332282,
    lng: 26.643439
  },
  activeHouse: null,
  allHouses: [],
  addHouseLocation: null
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
