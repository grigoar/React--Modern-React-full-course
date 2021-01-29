import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    // event.preventDefault();
    this.setState({ term: event.target.value });
    // console.log(event);
    // console.log(this.state.term);
    // console.log(e);
    // this.setState({term:})
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input value={this.state.term} type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
