import jsonPlaceholder from "../apis/jsonPlaceholder";

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

//Very slim
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

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
