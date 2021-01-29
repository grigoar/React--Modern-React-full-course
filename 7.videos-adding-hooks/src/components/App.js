import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideos";
import useVideos from "../hooks/useVideos";

const App = () => {
  // state = { videos: [], selectedVideo: null };

  const [videos, search] = useVideos("buildings");

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  //

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//Challenge
// import usePosts from "./usePosts";
// const posts = usePosts();
