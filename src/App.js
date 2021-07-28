import {React, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewCEP from './ViewCEP';

function App() {
  const {events, setEvents} = useState([]);

  const toArray = (obj) => {
    const arr = [obj];
    return arr;
  }

  const submitHandler = (e) => {
    e.preventDefaul();

    const formData = new FormData();
    const data = Object.fromEntries(formData);
    
    fetch('http://localhost:3333/?cepFind=' + data.txtCEP)
    .then(response => response.json)
    .then(data => {
      const array = toArray(data);
      setEvents(array);
    })
    .catch(console.error());

    console.log(data);
  }

  return (
    <div className="container">
      <h1>Buscar CEP</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="txtCEP" className="form-control"></input>
        </div>
        <button type="button" name="btnBuscar" className="btn btn-primary">Buscar</button>
      </form>
      <ViewCEP events={events}/>
    </div>
  );
}

export default App;
