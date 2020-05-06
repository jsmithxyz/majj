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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "#e1e0e5" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    // material ui theme
    let theme = createMuiTheme({
      typography: {
        fontFamily: "Gotu",
      },
    });

    return (
      <StoreProvider>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </StoreProvider>
    );
  }
}

export default App;
