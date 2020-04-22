import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MainNav from "../components/MainNav/MainNav";
import sampleQueue from "../utils/sample-queue";
import IFrame from "../components/Iframe/Iframe";
// import { Link } from "react-router-dom"; //TBD do we need?

function Mine() {
  const [queue, setQueue] = useState(sampleQueue);
  const [topics, setTopics] = useState(["puppies", "guitar"]);

  // useEffect(() => {
  //   loadQueue();
  // }, []);

  function loadQueue() {
    //sets empty array to drop results in
    let resultsArray = [];
    //calls api with topics, returns filled resultsArray
    API.getQueue(topics)
      .then((res) => {
        res.data.value.map((result) => {
          resultsArray.push(result);
          return resultsArray;
          // so this would be dispatch({type: 'CREATE_QUEUE', payload: res});
        });
        //sets the 'queue' state with the resultsArray from the api call
        setQueue({ queue: resultsArray });
      })
      .catch((err) => console.log(err));
  }

  function nextGem() {
    // pop the queue array, update state
    const newQueue = queue.shift();
    setQueue({ queue: newQueue });
  }

  // function saveGem() {
  //   // adds current gem to DB
  // }

  // function showProfile() {
  //   // goes to profile page? not sure if it belongs in this page
  // }

  return (
    <div>
      <MainNav />
      <IFrame queue={queue} />
    </div>
  );
}

export default Mine;
