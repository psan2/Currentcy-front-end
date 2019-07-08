import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import LeftNav from "./containers/LeftNav";
import Header from "./containers/Header";
import FxContainer from "./containers/FxContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LeftNav />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginSignup} />
        <Route path="/new" component={New} />
      </div>
    </Router>
  );
}

function LoginSignup() {
  return <div>will return a signup page</div>;
}

function New() {
  return <div>will return a div to add a new currency track</div>;
}

function Home() {
  return <FxContainer />;
}

export default App;
