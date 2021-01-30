import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

//tricking redux that we have some reducers so that we don't have an error=>replaceMe: () => "This is a dummy reducer",
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
