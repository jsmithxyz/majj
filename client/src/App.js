import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import NoMatch from "./pages/NoMatch";
import Mine from "./pages/Mine";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Mine} />
            {/* <Route path='*' component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
