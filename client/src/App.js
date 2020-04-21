import React from "react";
// import BtnNavBar from "./components/BtnNavBar/BtnNavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav.js";
import "./App.css";
import CreateProfile from "./components/CreateProfile/CreateProfile.js";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API";


class App extends React.Component {
  //this state will obviously change, just have it like this for now to make sure the API works
  state = {
    query: "news, videos, spiders, guitar",
  };

  //calls the getResults method as this component mounts
  componentDidMount = () => {
    this.getResults();
  };

  //method to make the API call, using the query state -- right now, just console logs results
  getResults = () => {
    API.getData(this.state.query)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <MainNav />
        {/* <BtnNavBar /> */}
        <CreateProfile />
          <Switch>
            <Route exact path='/' />
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
