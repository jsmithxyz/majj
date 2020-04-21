// goes in /src

import React from "react";
// import BtnNavBar from "./components/BtnNavBar/BtnNavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav.js";
import "./App.css";
import CreateProfile from "./components/CreateProfile/CreateProfile.js";

function App() {
  return (
    <Router>
      <div>
        <MainNav />
        {/* <BtnNavBar /> */}
        <CreateProfile />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
