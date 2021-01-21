import React from "react";
import { Link, Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Edit from "./views/Edit";

function App() {
  return (
    <div className="App container">
      <Link to="/">Main</Link>
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
        <Edit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;