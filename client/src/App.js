import React from "react";
import BtnNavBar from "./components/BtnNavBar/BtnNavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav.js";
import "./App.css";
import CreateProfile from "./components/CreateProfile/CreateProfile.js";
// import NoMatch from "./pages/NoMatch";
import API from "./utils/API";

import IFrame from "./components/Iframe/Iframe";


class App extends React.Component {
  //this state will obviously change, just have it like this for now to make sure the API works
  state = {
    query: "spiders, guitars, baseball",
    results: [],
  };

  //calls the getResults method as this component mounts
  componentDidMount = () => {
    this.getResults();
  };

  //method to make the API call, using the query state -- right now, just sets results state to what it returns
  getResults = () => {
    let resultsArray = [];
    API.getData(this.state.query)
      .then((res) => {
        res.data.value.map((result) => {
          resultsArray.push(result);
          return resultsArray;
            // so this would be dispatch({type: 'CREATE_QUEUE', payload: res});
        });
        this.setState({ results: resultsArray });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <MainNav />
          <BtnNavBar />

          <IFrame />
          <CreateProfile />
          <Switch>
            <Route exact path="/" />

            {/* <Route path='*' component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
