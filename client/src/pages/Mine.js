import React, { useState, useEffect, Component, componentDidUpdate } from "react";
import { useStoreContext } from "../utils/GlobalState"
import API from "../utils/API";
import MainNav from "../components/MainNav/MainNav";
import LeftNav from "../components/LeftNav/LeftNav";
import sampleQueue from "../utils/sample-queue";
import Gems from "../components/Gems/Gems";
// import { Link } from "react-router-dom"; //TBD do we need?

function Mine() {
  const [state, dispatch] = useStoreContext();

  const [queue, setQueue] = useState(sampleQueue);
  // const [topics, setTopics] = useState(["sports"]);
  const { filter } = state;

  useEffect(() => {
    loadQueue();
  }, [filter]);



  function loadQueue() {
    //calls api with topics, setsQueue to res.data.value
    API.getQueue(filter)
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

  let flexbox = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div>
      <MainNav />
      <div className="flexbox-containter" style={flexbox}>
        <LeftNav />
        {Object.keys(queue).map((key) => (
          <Gems key={key} details={queue[key]} />
        ))}
      </div>
    </div>
  );
}

export default Mine;
