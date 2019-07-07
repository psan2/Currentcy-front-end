import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import FxContainer from "./containers/FxContainer";
import NewTracker from "./components/NewTracker";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignupLogin} />
      <Route path="/new" component={newTrack} />
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <FxContainer />
    </div>
  );
}

function SignupLogin() {}

function newTrack() {
  return (
    <div className="App">
      <NewTracker />
    </div>
  );
}

export default App;
