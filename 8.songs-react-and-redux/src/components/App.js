import React from "react";
// import actions from "../actions/index";
//webpack take the index.js automatically
//default export
import actions from "../actions";
//named export
import { selectSong } from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <br></br>
          <SongList />
        </div>
        <div className="column eight wide">
          <br></br>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
