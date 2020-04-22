import React, { useState, useEffect } from "react";
import API from "../utils/API"; //TBD
import { Link } from "react-router-dom"; //TBD do we need?

function Mine() {
  const [queue, setQueue] = useState([])

  // only called upon initial render of page
  useEffect(() => {
    loadQueue()
  }, [])

  // your basic call to Bing to get the queue
  function loadQueue() {
    API.getQueue()
      .then(res =>
        setQueue(res.data)
      )
      .catch(err => console.log(err));
  };

  function nextGem() {
    // pop the queue array, update state
  }

  function saveGem() {
    // adds current gem to DB
  }

  function showProfile() {
    // goes to profile page? not sure if it belongs in this page
  }

  return; // TBD
}


export default Mine;
