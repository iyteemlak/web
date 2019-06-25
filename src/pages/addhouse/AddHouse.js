import React, { useGlobal, useState } from 'reactn'
import "./AddHouse.css"

import { Button, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'

import { API_URL } from "../../Const";

const ROOMS = [ "Studyo (1+0)", "1+1", "1.5+1", "2+0", "2+1", "2.5+1", "2+2", "3+1", "3.5+1", "3+2", 
  "4+1", "4.5+1", "4+2", "4+3", "4+4", "5+1", "5+2", "5+3", "5+4", "6+1", "6+2", "6+3", "7+1", "7+2",
  "7+3", "8+1", "8+2", "8+3", "8+4", "9+1", "9+2", "9+3", "9+4", "9+5", "9+6", "10+1", "10+2", "10 Uzeri"
];

function AddHouseBox() {

  const [ addHouseLocation, setAddHouseLocation ] = useGlobal('addHouseLocation')
  const [ selectedRoom, setSelectedRoom ] = useState(ROOMS[0]);
  const [ price, setPrice ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ response, setResponse ] = useState(null);

  return (
    <div className="add-house-container">
      <Link to="/">Geri</Link>
      { response === null ? (
        <div>
          <h1>Ev Ekle</h1>
          <Form>
            <Form.Group controlId="formRooms">
              <Form.Label>Oda Sayısı</Form.Label>
              <Form.Control as="select" value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
                {ROOMS.map((room, index) => <option key={index}>{room}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Fiyat</Form.Label>
              <Form.Control type="number" placeholder="500" value={price} onChange={e => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>İletişim</Form.Label>
              <Form.Control type="text" placeholder="telefon no veya e-posta adresi"
                value={contact} onChange={e => setContact(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Ek Açıklamalar</Form.Label>
              <Form.Control as="textarea" rows="3" value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Konum</Form.Label>
              <Form.Check type="checkbox" checked={addHouseLocation != null} label={addHouseLocation != null ? "Secildi" : "Secilmedi"} readOnly />
              <Form.Text className="text-muted">
                Haritadan evin konumunu seçmeyi unutmayın!
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formSubmit">
              <Button variant="primary" disabled={price == "" || contact == "" || addHouseLocation == null} onClick={() => {
                let location = addHouseLocation == null ? null : {
                  lat: addHouseLocation.lat(),
                  lng: addHouseLocation.lng()
                }
                fetch(`${API_URL}/house`, {
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
                  setResponse("Ev ekleme isteginiz incelemeye alindi.");
                  setSelectedRoom(ROOMS[0])
                  setPrice("")
                  setContact("")
                  setDescription("")
                  setAddHouseLocation(null)
                }).catch(err => {
                  setResponse("error code: " + err.status)
                });
              }}>
                Ekle
              </Button>
              <Form.Text className="text-muted">
                İsteğiniz incelendikten sonra listeye eklenecektir ve 1 hafta içerisinde yayından kaldırılacaktır. Evinizi derhal listeden çıkarmak için bize <a href="mailto:ahmetozdemirden@std.iyte.edu.tr">bu adresten</a> ulaşabilirsiniz.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      ) : (
        <h6 style={{paddingTop: "12px", textAlign: "center"}}>{response}</h6>
      )}
    </div>
  )
}

export default AddHouseBox;
