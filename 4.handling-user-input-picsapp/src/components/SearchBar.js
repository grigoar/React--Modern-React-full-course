import React from "react";

//need to use state-> class component
class SearchBar extends React.Component {
  //   onInputChange = function (event) {
  //     // console.log("hello");
  //     console.log(event.target.value);
  //   };

  //   onInputClick() {
  //     // console.log("Input was clicked");
  //   }

  state = { term: "" };

  render() {
    //Control elements
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
              onClick={this.onInputClick}
            ></input>
          </div>
        </form>
      </div>
    );
    // return (
    //   <div className="ui segment">
    //     <form className="ui form">
    //       <div className="field">
    //         <label>Image Search</label>
    //         <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}></input>
    //       </div>
    //     </form>
    //   </div>
    // );
  }
}
export default SearchBar;
