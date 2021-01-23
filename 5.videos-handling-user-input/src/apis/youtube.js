import axios from "axios";

const KEY = "AIzaSyBOMiflYFjdtBmQajl48za_PgFO9tx37_Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
