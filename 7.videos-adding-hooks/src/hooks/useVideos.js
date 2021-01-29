//custom searching and using a list of videos
import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    setVideos(response.data.items);
  };

  //return an array or an object
  return [videos, search];
  //   return {videos,onTermSubmit};
};

export default useVideos;
