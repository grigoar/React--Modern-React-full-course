import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

//passing props to the child from the parent
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Grig" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
