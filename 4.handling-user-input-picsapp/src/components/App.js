import React from "react";
import SearchBar from "./SearchBar";

//function based component
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    // console.log("hello");
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitParent={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
