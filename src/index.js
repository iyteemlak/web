import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

setGlobal({
  center: {
    lat: 38.3322481,
    lng: 26.6346842
  },
  activeBox: "HomePageBox",
  activeHouse: {
    id: 1,
    location: {
      lat: 38.3322481,
      lng: 26.6346842
    },
    rooms: "3+1",
    price: 200,
    contact: "+90 (507) 153 76 81",
    description: "asdasd"
  },
  allHouses: [
    {
      id: 1,
      location: {
        lat: 38.3322481,
        lng: 26.6346842
      },
      rooms: "3+1",
      price: 200,
      contact: "+90 (507) 153 76 81",
      description: "asdasd"
    },
    {
      id: 2,
      location: {
        lat: 38.3222481,
        lng: 26.6446842
      },
      rooms: "2+1",
      price: 300,
      contact: "+90 (507) 153 76 81",
      description: "asdlhfgsdfjasdfd"
    },
  ]
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
