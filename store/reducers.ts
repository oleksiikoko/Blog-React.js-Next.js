import { retrievePostReducer } from "./retrievePost/reducer";
import { combineReducers } from "redux";

import { postReducer } from "./posts/reducer";

export default combineReducers({
  postReducer,
  retrievePostReducer,
  // user,
  // match,
  // profile
});
