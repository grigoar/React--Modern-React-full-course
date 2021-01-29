import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //   console.log(props.videos);
  //calling the onVideoSelect the video onClick
  //   <div onClick={onVideoSelect(video)}
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
