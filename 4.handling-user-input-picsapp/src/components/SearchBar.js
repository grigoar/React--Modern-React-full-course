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

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmitParent(this.state.term);
  }
  //because the arrow function don't have a this keyword the this is bind to the class instance
  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // };

  render() {
    //Control elements
    // console.log(this.state.term.length);
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui  form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
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
