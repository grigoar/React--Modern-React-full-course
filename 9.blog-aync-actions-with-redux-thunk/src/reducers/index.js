import { combineReducers } from "redux";

//tricking redux that we have some reducers so that we don't have an error=>replaceMe: () => "This is a dummy reducer",
export default combineReducers({
  replaceMe: () => "This is a dummy reducer",
});
