import axios from "axios";

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
    // case "lasd":
    // case "lasdf":
    // case "lasdd":
  }

  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }

  // return state;
  //not allowed to return undefined
  // //bad
  // state[0] =1234;
  //state.push()
  //state.pop()
  // return document.querySelector("#input");
  // return axios.get("/posts");

  // //good
  // return state + action;
};
