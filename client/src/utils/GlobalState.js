import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_TO_QUEUE,
  PASS,
  NEW_FILTER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;



const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_QUEUE:
      // console.log("woof from within globalState")
      return {
        ...state,
        // queue: [action.item, ...state.queue],
        TBD: "to be determined"
      };
    case PASS:
      // console.log("woof from within globalState")
      return {
        ...state,
        TBD: "to be determined"
      };
    case NEW_FILTER:
      // console.log("woof from within globalState")
      return {
        ...state,
        filter: [action.filter]
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
  // debugger
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
