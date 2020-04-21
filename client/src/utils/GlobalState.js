import React, { createContext, useReducer, useContext } from "react";
import {
  TBD
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case TBD:
      return {
        ...state,
        TBD: "to be determined"
      };
    case TBD:
      return {
        ...state,
        TBD: "to be determined"
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
