import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NoMatch from "./pages/NoMatch";
import Mine from "./pages/Mine";
import { StoreProvider } from "../src/utils/GlobalState";
import Splash from "./pages/Splash";
import { SnackbarProvider } from "react-snackbar-toast";
import Profile from "./pages/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "#e1e0e5" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <StoreProvider>
        <SnackbarProvider>
          <Router>
            <div style={{ background: this.state.color }}>
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/mine" component={Mine} />
                <Route exact path="/profile" component={Profile} />
                <Route path="*" component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </SnackbarProvider>
      </StoreProvider>
    );
  }
}

export default App;
