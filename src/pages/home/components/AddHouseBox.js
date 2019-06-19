import React, { useGlobal, useState } from 'reactn'
import "./AddHouseBox.css"

import { Jumbotron, Button, Form } from "react-bootstrap"
import BackButton from "../../../components/buttons/BackButton"

const ROOMS = [ "Studyo (1+0)", "1+1", "1.5+1", "2+0", "2+1", "2.5+1", "2+2", "3+1", "3.5+1", "3+2", 
  "4+1", "4.5+1", "4+2", "4+3", "4+4", "5+1", "5+2", "5+3", "5+4", "6+1", "6+2", "6+3", "7+1", "7+2",
  "7+3", "8+1", "8+2", "8+3", "8+4", "9+1", "9+2", "9+3", "9+4", "9+5", "9+6", "10+1", "10+2", "10 Uzeri"
];

function AddHouseBox() {

  const [ activeBox, setActiveBox ] = useGlobal('activeBox')
  const [ addHouseLocation, setAddHouseLocation ] = useGlobal('addHouseLocation')

  const [ selectedRoom, setSelectedRoom ] = useState(ROOMS[0]);
  const [ price, setPrice ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ description, setDescription ] = useState("");

  if(activeBox === "AddHouseBox") {
    return (
      <Jumbotron className="list-houses-box">
        <BackButton onClick={() => setActiveBox('HomePageBox')} />
        <h1>Ev Ekle</h1>
        <Form>
          <Form.Group controlId="formRooms">
            <Form.Label>Oda Sayisi</Form.Label>
            <Form.Control as="select" value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
              {ROOMS.map((room, index) => <option key={index}>{room}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Fiyat</Form.Label>
            <Form.Control type="number" placeholder="500" value={price} onChange={e => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formContact">
            <Form.Label>Iletisim</Form.Label>
            <Form.Control type="text" placeholder="telefon no veya e-posta adresi"
              value={contact} onChange={e => setContact(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Ek Aciklamalar</Form.Label>
            <Form.Control as="textarea" rows="3" value={description} onChange={e => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Lokasyon</Form.Label>
            <Form.Check type="checkbox" checked={addHouseLocation != null} label={addHouseLocation != null ? "Secildi" : "Secilmedi"} readOnly />
          </Form.Group>
          <Button variant="primary" onClick={() => {
            let location = addHouseLocation == null ? null : {
              lat: addHouseLocation.lat(),
              lng: addHouseLocation.lng()
            }
            fetch(`http://localhost:8082/house`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                rooms: selectedRoom,
                price,
                contact,
                description,
                location
              })
            }).then(res => {
              if (!res.ok) 
                throw res;
              console.log("house succesfully added!");
            })
            // .catch(err => {
            //   err.text().then(text => createNotification(text, "danger", this.refs.notify));
            // });
          }}>
            Ekle
          </Button>
        </Form>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default AddHouseBox;
