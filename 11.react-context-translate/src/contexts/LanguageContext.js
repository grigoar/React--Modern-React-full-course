import React from "react";

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  store = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

// export default React.createContext([1, 2, 3]);
// export default React.createContext({ color: "red" });
