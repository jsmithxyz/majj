import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateProfile from "./components/CreateProfile/CreateProfile.js";
// import NoMatch from "./pages/NoMatch";
import Mine from "./pages/Mine";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <CreateProfile />
          <Switch>
            <Route exact path='/' component={Mine} />
            {/* <Route path='*' component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
