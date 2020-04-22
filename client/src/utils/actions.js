// family of user actions
export const ADD_USER = "ADD_USER"; 
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

// family of content actions (gem actions)
export const LOADING = "LOADING"; // while gem is switching
export const CREATE_QUEUE = "CREATE_QUEUE"; // componentDidMount() called right away
export const NEXT = "NEXT"; // tells queue to pop(), sends action to re render next gem
export const ADD_FAVORITE = "ADD_FAVORITE"; // db action, will save link (gem object) to user profile db
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"; // nice to have functionality
export const UPDATE_TOPICS = "UPDATE_TOPICS"; // changing / updating preference
