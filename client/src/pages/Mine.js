import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MainNav from "../components/MainNav/MainNav";
import BtnNavBar from "../components/BtnNavBar/BtnNavBar";
import IFrame from "../components/Iframe/Iframe";
// import { Link } from "react-router-dom"; //TBD do we need?

function Mine() {
  const [queue, setQueue] = useState([]);
  const [topics, setTopics] = useState(["spiders", "guitar", "cactus"]);

  // only called upon initial render of page
  useEffect(() => {
    loadQueue();
  }, []);

  function loadQueue() {
    let resultsArray = [];
    API.getQueue(topics)
      .then((res) => {
        res.data.value.map((result) => {
          resultsArray.push(result);
          return resultsArray;
          // so this would be dispatch({type: 'CREATE_QUEUE', payload: res});
        });
        this.setQueue({ queue: resultsArray });
      })
      .catch((err) => console.log(err));
  }

  // function nextGem() {
  //   // pop the queue array, update state
  // }

  // function saveGem() {
  //   // adds current gem to DB
  // }

  // function showProfile() {
  //   // goes to profile page? not sure if it belongs in this page
  // }

  return (
    <div>
      <MainNav />
      <BtnNavBar />
      <IFrame />
    </div>
  );
}

export default Mine;
