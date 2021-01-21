// Import the React and ReactDOM libraries
//for ES2015 Modules
import React from "react";
import ReactDOM from "react-dom";

//for CommonJS Modules
// const React = require("react");

// function getButtonText() {
//   return "Click on me!";
// }

function getTime() {
  return new Date().toLocaleTimeString();
}

// Create a react component
const App = () => {
  const buttonText = { text: "Click me" };

  // return <div> Hi there!</div>;
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText.text}</button>
      <br></br>
      <p>Current Time: {getTime()}</p>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
