import React, {
  useState,
  useEffect,
} from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { NEW_ITEMS } from "../utils/actions";
import MainNav from "../components/MainNav/MainNav";
import LeftNav from "../components/LeftNav/LeftNav";
import sampleItems from "../utils/sample-items";
import Gems from "../components/Gems/Gems";
import UserSignIn from "../components/UserSignIn/UserSignIn";

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

  //would like to dry this up
  if (items) {
    return (
      <div>
        <MainNav />
        <div className='flexbox-containter' style={flexbox}>
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
        <div className='flexbox-containter' style={flexbox}>
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
