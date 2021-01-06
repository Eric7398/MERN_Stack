import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard
        lname="Doe"
        fname="Jane"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        lname="Smith"
        fname="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        lname="Fillmore"
        fname="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        lname="Smith"
        fname="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
