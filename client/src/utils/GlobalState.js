import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_TO_QUEUE,
  PASS,
  NEW_FILTER,
  NEW_ITEMS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  let { items } = state;
  let { id } = action;
  console.log(action);
  console.log(id)
  switch (action.type) {
    case ADD_TO_QUEUE:
      items[0].splice(id, 1)
      return {
        ...state,
        // queue: [action.item, ...state.queue],
        items: items,
      };
    case PASS:
      items[0].splice(id, 1)
      return {
        ...state,
        items: items,
      };
    case NEW_FILTER:
      return {
        ...state,
        filter: [action.filter]
      };
    case NEW_ITEMS:
      return {
        ...state,
        items: [action.items]
      };

    default:
      return state;
  }
};

// i don't really understand the StoreProvider() method
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // TBD what goes in here
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
