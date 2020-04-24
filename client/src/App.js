import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import CreateProfile from "./components/CreateProfile/CreateProfile.js";
// import UserSignIn from "./components/UserSignIn/UserSignIn.js";
// import NoMatch from "./pages/NoMatch";
import LeftNav from "./components/LeftNav/LeftNav";
import Mine from "./pages/Mine";
import { StoreProvider } from "../src/utils/GlobalState"

class App extends React.Component {
  render() {
    return (
      <StoreProvider>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Mine} />
              {/* <Route path='*' component={NoMatch} /> */}
            </Switch>
            {/* <CreateProfile /> */}
            {/* <UserSignIn /> */}

            <LeftNav />
          </div>
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
