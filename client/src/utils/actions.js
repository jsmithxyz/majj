// family of USER actions
export const ADD_USER = "ADD_USER"; // ADDS USER PROFILE
export const CREATE_PROFILE = "CREATE_PROFILE"; // TAKES TO "CREATE PROFILE SECTION"
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "LOG_OUT";

// family of QUEUE actions (item actions)
export const LOADING = "LOADING"; // while item is switching
export const CREATE_QUEUE = "CREATE_QUEUE"; // componentDidMount() called right away
export const NEXT = "NEXT"; // tells queue to pop(), sends action to re render next item

// family of CARD actions
export const ADD_TO_QUEUE = "ADD_TO_QUEUE"; // add item to queue
export const PASS = "PASS"; // get rid of item from presentation, 
export const APPLY_FILTER = "APPLY_FILTER"; // changes filter settings, will re call
export const FILTER_CHANGE = "FILTER_CHANGE";

// family of ITEM actions (bing API)
export const NEW_ITEMS = "NEW_ITEMS"

export const TBD = "TBD"
