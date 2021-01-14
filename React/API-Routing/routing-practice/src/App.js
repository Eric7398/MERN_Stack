import './App.css';
import Home from './components/Home'
import Word from './components/Word'
import Number from './components/Number'
import Color from './components/Color'

import { Router } from '@reach/router';
import { Link } from '@reach/router';

function App() {
  return (


    <div className="App">
      <Router>
        <Home path="/welcome" />
        <Word path="/:word" />
        <Number path="/:number" />
        <Color path="/:aword/:tcolor/:bgcolor" />
      </Router>

      <Link to="/welcome">Home</Link><br></br>
      <Link to="/:number">Display Number</Link><br></br>
      <Link to="/:word">Display Word</Link><br></br>
      < Link to="/:aword/:tcolor/:bgcolor" > Text Color / Background Color</Link >

    </div >
  );
}

export default App;
