// goes in /src

import React from "react";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
