// family of USER actions
export const CREATE_PROFILE = "CREATE_PROFILE"; // TAKES TO "CREATE PROFILE SECTION"
export const UPDATE_PROFILE = "UPDATE_PROFILE"; //
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
// family of QUEUE actions (item actions)
// export const LOADING = "LOADING"; // while item is switching
// family of CARD actions
export const ADD_TO_QUEUE = "ADD_TO_QUEUE"; // add item to queue
export const UPDATE_QUEUE = "UPDATE_QUEUE";
export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const PASS = "PASS"; // get rid of item from presentation,
export const APPLY_FILTER = "APPLY_FILTER"; // changes filter settings, will re call
export const FILTER_CHANGE = "FILTER_CHANGE"; // reflects state of the left nav
// family of ITEM actions (bing API)
export const NEW_ITEMS = "NEW_ITEMS";
