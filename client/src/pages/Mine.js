import React, { useState, useEffect, Component, componentDidUpdate } from "react";
import { useStoreContext } from "../utils/GlobalState"
import API from "../utils/API";
import { NEW_ITEMS } from "../utils/actions";
import MainNav from "../components/MainNav/MainNav";
import LeftNav from "../components/LeftNav/LeftNav";
import sampleItems from "../utils/sample-items";
import Gems from "../components/Gems/Gems";
// import { Link } from "react-router-dom"; //TBD do we need?

// queue = user's list of saved items (DB)
// item = individual Bing return, displayed on card (local)

function Mine() {
  const [state, dispatch] = useStoreContext();
  const { filter, queue, items } = state;

  const [tempItems, setTempItems] = useState(sampleItems);

  let flexbox = {
    display: "flex",
    flexDirection: "row",
  };

  useEffect(() => {
    loadItems();
  }, [filter]);

  async function loadItems() {
    if (filter) {
      const arr = await API.getItems(filter)
      const items = []
      await arr.forEach(async element => {
        var topic = await element;
        topic.data.value.forEach(newsObject => {
          items.push(newsObject)
        })
      });
      // console.log("if(filter) path of loadItems()")
      console.log(items)
      dispatch({
        type: NEW_ITEMS,
        items: items
      });
      //i know this super WET, will condense once debugged
    } else {
      const arr = await API.getItems()
      const items = []
      await arr.forEach(async element => {
        var topic = await element;
        topic.data.value.forEach(newsObject => {
          items.push(newsObject)
        })
      });
      // console.log("else statement in loadItems(), so no filter")
      // console.log(items)
      dispatch({
        type: NEW_ITEMS,
        items: items
      });
    }
  }

  //would like to dry this up
  if (items) {
    return (
      <div>
        <MainNav />
        <div className="flexbox-containter" style={flexbox}>
          <LeftNav />
          {Object.keys(items).map((key) => (
            <Gems key={key} details={items[key]} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <MainNav />
        <div className="flexbox-containter" style={flexbox}>
          <LeftNav />
          {Object.keys(tempItems).map((key) => (
            <Gems key={key} details={tempItems[key]} />
          ))}
        </div>
      </div>
    );
  }
}






export default Mine;