import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

//function based component
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);
    // const response = await axios.get("https://api.unsplash.com/search/photos", {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitParent={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
