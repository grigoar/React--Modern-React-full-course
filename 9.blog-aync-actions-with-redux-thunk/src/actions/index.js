import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// export const fetchPosts = () => {
//   return async(dispatch, getState) =>{
//     const response = await jsonPlaceholder.get("/posts");

//     //BAD approach!!!!!!!
//     //breaking the rules of redux
//     // const response = await jsonPlaceholder.get("/posts");

//     //after transpilling is not an object to return because it is an async function used
//     // return {
//     //   type: "FETCH_POSTS",
//     //   payload: response,
//     // };

//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

//making a function to combo the fetchPosts and the fetch users in order to keep the functionality singular and also to show the result in one place only
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   // console.log("Before Fetched posts ");
//   await dispatch(fetchPosts());

//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   // console.log(userIds);
//   //can't use async inside of forEach
//   userIds.forEach(async (id) => await dispatch(fetchUser(id)));
//   // await Promise.all(userIds.map(id => dispatch(fetchUser(id))).then
//   // console.log(getState().posts);
//   // .console.log(getState().users);
// };

//Very slim
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// //memoize from lodash in order to not repete the same requests for users
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const addPost = () => async (dispatch) => {
  const newPost = await jsonPlaceholder.get("/posts/1");
  dispatch({ type: "ADD_POST", payload: newPost });
};

//Totally fine
// export const selectPost = () =>{
//   return {
//     type:"SELECT_POST"
//   }
// }
