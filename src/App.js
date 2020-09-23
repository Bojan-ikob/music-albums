import React from "react";
import "./App.css";
import ToHome from "./components/ToHome";
import List from "./components/List";
import ArtistDetails from "./components/ArtistDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ToHome />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/artist/:id" component={ArtistDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
