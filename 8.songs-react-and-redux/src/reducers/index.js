import { combineReducers } from "redux";

//Song list reducer
const songsReducer = () => {
  //static array
  return [
    {
      title: "No Scrubs",
      duration: "4:58",
    },
    {
      title: "Macarena",
      duration: "2:12",
    },
    {
      title: "All Star",
      duration: "3:33",
    },
    {
      title: "I want it That Way",
      duration: "5:03",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
