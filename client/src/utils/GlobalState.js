import React, { createContext, useReducer, useContext } from "react";
import {
  CREATE_QUEUE,
  ADD_TO_QUEUE,
  PASS,
  APPLY_FILTER,
  FILTER_CHANGE,
  NEW_ITEMS,
  SIGN_IN,
  SIGN_OUT
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  // would love to DRY this up somehow
  filter: {
    kitten: true, //always true
    sports: false,
    art: false,
    technology: false,
    homeDecor: false,
    movies: false,
    literature: false,
    science: false,
    food: false,
    politics: false,
    fashion: false,
    animals: false,
    music: false,
    entertainment: false,
    style: false,
    travel: false,
    health: false
  },
  mutateFilter: {
    kitten: true,  //always true
    sports: false,
    art: false,
    technology: false,
    homeDecor: false,
    movies: false,
    literature: false,
    science: false,
    food: false,
    politics: false,
    fashion: false,
    animals: false,
    music: false,
    entertainment: false,
    style: false,
    travel: false,
    health: false
  },
  queue: [],
  items: []
};

const reducer = (state, action) => {
  let { queue, filter, mutateFilter, items } = state;
  let { id } = action;

  switch (action.type) {

    case SIGN_IN:
      return {
        ...state,
        //some api call here
        queue: [action.queue]
      };

    case CREATE_QUEUE:
      return {
        ...state,
        queue: [action.queue]
      };

    case ADD_TO_QUEUE:
      let item = items[0][action.id];
      items[0].splice(id, 1);
      return {
        ...state,
        queue: [...queue, item],
        items: items,
      };

    case PASS:
      items[0].splice(id, 1);
      return {
        ...state,
        items: items,
      };

    case FILTER_CHANGE:
      let { topic, value } = action;
      mutateFilter[topic] = value;
      console.log(mutateFilter)
      console.log(filter);
      return state;

    case APPLY_FILTER:
      return {
        ...state,
        filter: mutateFilter,
      };

    case NEW_ITEMS:
      return {
        ...state,
        items: [action.items],
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
