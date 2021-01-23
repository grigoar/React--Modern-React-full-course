import axios from "axios";

// const searchImages = (term) =>{

// }

//create an object
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID wsdigH5wRLCCts4yVfAhWTsdrd22aunW8C_WIk9QEmQ",
  },
});
