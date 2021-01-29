import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // const onInputChange = (event) => {
  //   // event.preventDefault();
  //   // this.setState({ term: event.target.value });
  //   setTerm(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();

    //make sure we call callback from parent component
    // this.props.onFormSubmit(this.state.term);
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input value={term} type="text" onChange={(event) => setTerm(event.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
