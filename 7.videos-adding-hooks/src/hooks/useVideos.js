//custom searching and using a list of videos
import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    onTermSubmit("recommended");
  }, []);
};

export default useVideos;
