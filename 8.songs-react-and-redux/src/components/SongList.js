import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

// class SongList extends React.Component{
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //this.props == {songs:state.songs}
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//take the data to show the data as props in the connect component
//state = all data inside the reducers store
const mapStateToProps = (state) => {
  //   console.log(state);

  //this is how we build up the props with the data from the reducers into the current component
  return {
    songs: state.songs,
  };
};

//how to wire it up the connect component
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);

// --------------//how this syntax work?
// const connectSyntax = function () {
//   return function () {
//     console.log("Hi there");
//   };
// };
// //only the second time the returned function is called
// connectSyntax()();
