// family of USER actions
export const ADD_USER = "ADD_USER"; // ADDS USER PROFILE
export const CREATE_PROFILE = "CREATE_PROFILE"; // TAKES TO "CREATE PROFILE SECTION"
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

// family of QUEUE actions (item actions)
export const LOADING = "LOADING"; // while item is switching
export const LAUNCH_QUEUE = "CREATE_QUEUE"; // componentDidMount() called right away
export const NEXT = "NEXT"; // tells queue to pop(), sends action to re render next item

// family of CARD actions
export const ADD_TO_QUEUE = "ADD_TO_QUEUE"; // add item to queue
export const PASS = "PASS"; // get rid of item from presentation, 
export const NEW_FILTER = "NEW_FILTER"; // changes filter settings, will re call

export const TBD = "TBD"
