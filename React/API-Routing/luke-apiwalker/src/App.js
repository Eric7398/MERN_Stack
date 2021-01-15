import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, navigate } from "@reach/router";
import React, { useState } from 'react';
import Main from './components/Main';

function App() {
  const [choice, setChoice] = useState({
    choice: "error",
    id: 1,
  })

  const handleInput = e => {
    setChoice({
      ...choice, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    //On submit load page to this url
    navigate(`/${choice.choice}/${choice.id}`)
    //Setting which option is choosen and the ID with it and adding onto the back of the existing query
    setChoice({
      ...choice, [e.target.name]: e.target.value
    })
  }


  return (
    <div className="App">
      <h1 className="display-4" style={{ color: 'blue' }}>Everything StarWars</h1>
      <form onSubmit={handleSubmit}>
        <select name="choice" onChange={handleInput}>
          <option value="error">--Select--</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="films">Films</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
          <option value="starships">Starships</option>
        </select>
        <br></br>

        <label>ID: &emsp;</label>
        <input type="number" min="1" max="" name="id" onChange={handleInput} />
        <input type="submit" value="Search" />

      </form>

      <Router>
        <Main path="/:choice/:id" />
      </Router>



    </div>
  );
}

export default App;
