import React, { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { NEW_ITEMS, UPDATE_QUEUE } from "../utils/actions";
import MainNav from "../components/MainNav/MainNav";
import LeftNav from "../components/LeftNav/LeftNav";
import Gems from "../components/Gems/Gems";
import Database from "../utils/Database";
// import SavedGems from "../components/SavedGems/SavedGems";


function Mine() {
  const [state, dispatch] = useStoreContext();
  const { filter, items, user } = state;

  let newGems = itemizer(items);
  const [gems, setGems] = useState(newGems);

  let flexbox = {
    display: "flex",
    flexDirection: "row",
  };

  useEffect(() => {
    loadItems();
  }, [filter]);

  useEffect(() => {
    Database.getUserQueue(user.username).then((res) => {
      dispatch({
        type: UPDATE_QUEUE,
        queue: res.data.queue,
      });
    });
  }, []);

  useEffect(() => {
    let newGems = itemizer(items);
    setGems(newGems);
  }, [items[0]]);

  async function loadItems() {
    let arr = [];
    if (filter) {
      arr = await API.getItems(filter);
    } else {
      arr = await API.getItems();
    }
    const items = [];
    arr.map(async (element) => {
      var topic = element;
      topic.data.value.forEach((newsObject) => {
        items.push(newsObject);
      });
    });
    shuffle(items);
    dispatch({
      type: NEW_ITEMS,
      items: items,
    });
  }

  // knuth shuffle
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function itemizer(items) {
    let newGems = Object.keys(items).map((key) => (
      <Gems key={key} details={items[key]} />
    ));
    return newGems;
  }

  return (
    <div>
      <MainNav />
      <div className="flexbox-containter" style={flexbox}>
        <LeftNav>
          {/* <SavedGems /> */}
        </LeftNav>

        {gems}
      </div>
    </div>
  );
}

export default Mine;
