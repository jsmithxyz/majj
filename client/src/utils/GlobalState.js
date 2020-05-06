import React, { createContext, useReducer, useContext } from "react";

import {
  ADD_TO_QUEUE,
  UPDATE_QUEUE,
  CLEAR_QUEUE,
  PASS,
  APPLY_FILTER,
  FILTER_CHANGE,
  NEW_ITEMS,
  SIGN_IN,
  SIGN_OUT,
  ADD_USER,
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  // would love to DRY this up somehow
  filter: {
    sports: false,
    art: false,
    technology: false,
    decoration: false,
    movies: false,
    literature: false,
    science: false,
    food: false,
    politics: false,
    fashion: false,
    animals: false,
    music: false,
    home: false,
    entertainment: false,
    travel: false,
    health: false,
    business: false,
    gardening: false,
    recipes: false,
    hobbies: false,
    astrology: false,
    crafts: false,
  },
  mutateFilter: {
    sports: false,
    art: false,
    technology: false,
    decoration: false,
    movies: false,
    literature: false,
    science: false,
    food: false,
    politics: false,
    fashion: false,
    animals: false,
    music: false,
    home: false,
    entertainment: false,
    travel: false,
    health: false,
    business: false,
    gardening: false,
    recipes: false,
    hobbies: false,
    astrology: false,
    crafts: false,
  },
  // queue: [],
  items: [],
  backupItems: [],
  user: {
    username: "default",
    email: "",
    queue: [],
    filter: {},
    loggedIn: false,
  },
};

const reducer = (state, action) => {
  let { filter, mutateFilter, items, backupItems, user } = state;
  let { id } = action;
  // let { queue } = user;
  let replacementItem;

  switch (action.type) {
    case SIGN_IN:
      console.log(action);
      return {
        ...state,
        user: {
          username: action.user.name,
          email: action.user.email,
          queue: action.user.queue,
          filter: action.user.filter,
          loggedIn: true,
        },
        // filter: action.user.filter,
      };

    case SIGN_OUT:
      console.log("yo!");
      return {
        ...state,
        user: {
          username: "default",
          email: "",
          queue: [],
          filter: {},
          loggedIn: false,
        },
      };

    case UPDATE_QUEUE:
      return {
        ...state,
        queue: [action.queue],
      };

    case ADD_TO_QUEUE:
      let item = items[0][action.id];
      items[0].splice(id, 1);
      replacementItem = backupItems[0][0];
      items[0].push(replacementItem);
      backupItems[0].splice(0, 1);
      user.queue.push(JSON.stringify(item));
      return {
        ...state,
        user: user,
        items: items,
      };

    case CLEAR_QUEUE:
      user.queue = [];
      return {
        ...state,
        user: user,
      };

    case PASS:
      items[0].splice(id, 1);
      replacementItem = backupItems[0][0];
      items[0].push(replacementItem);
      backupItems[0].splice(0, 1);
      return {
        ...state,
        items: items,
      };

    case FILTER_CHANGE:
      let { topic, value } = action;
      let newMutation = { ...mutateFilter };
      newMutation[topic] = value;
      return {
        ...state,
        mutateFilter: { ...newMutation },
      };

    case APPLY_FILTER:
      let newFilter = action.filter;
      return {
        ...state,
        filter: newFilter,
      };

    case NEW_ITEMS:
      let top15 = [];
      for (var i = 0; i < 15; i++) {
        top15.push(action.items[i]);
        action.items.splice(i, 1);
      }
      return {
        ...state,
        items: [top15],
        backupItems: [action.items],
      };

    default:
      return state;
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = [state, dispatch];
  return <StoreContext.Provider value={value} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
