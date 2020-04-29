import React, { createContext, useReducer, useContext } from "react";
import {
  CREATE_QUEUE,
  ADD_TO_QUEUE,
  PASS,
  NEW_FILTER,
  NEW_ITEMS
} from "./actions";

export const StoreContext = createContext();
// const { Provider } = StoreContext;
const initialState = {
  // filter: {},
  queue: [],
  items: []
};

const reducer = (state, action) => {
  let { queue, items } = state;
  let { id } = action;
<<<<<<< HEAD
=======

>>>>>>> 6500d22afaaf5a7a4b16ec22d84b267c03b23fe4

  switch (action.type) {
    case CREATE_QUEUE:
      return {
        ...state,
        queue: [action.queue]
      };
    case ADD_TO_QUEUE:
      items[0].splice(id, 1);
      return {
        ...state,
        // queue: newQueue,
        items: items,
      };
    case PASS:
      items[0].splice(id, 1);
      return {
        ...state,
        items: items,
      };
    case NEW_FILTER:
      return {
        ...state,
        filter: [action.filter],
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
  const value = [ state, dispatch ];
  return <StoreContext.Provider value={value} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
