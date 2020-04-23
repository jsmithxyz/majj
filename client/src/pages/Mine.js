import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MainNav from "../components/MainNav/MainNav";
import sampleQueue from "../utils/sample-queue";
import Gems from "../components/Gems/Gems";
// import { Link } from "react-router-dom"; //TBD do we need?

function Mine() {
  const [queue, setQueue] = useState(sampleQueue);
  const [topics, setTopics] = useState(["jeff lemire"]);

  // useEffect(() => {
  //   loadQueue();
  // }, []);

  function loadQueue() {
    //calls api with topics, setsQueue to res.data.value
    API.getQueue(topics)
      .then((res) => {
        setQueue({ queue: res.data.value });
      })
      .catch((err) => console.log(err));
  }

  // function nextGem() {
  //   // pop the queue array, update state
  //   const newQueue = queue.shift();
  //   setQueue({ queue: newQueue });
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
      {Object.keys(queue).map((key) => (
        <Gems key={key} details={queue[key]} />
      ))}
    </div>
  );
}

export default Mine;
