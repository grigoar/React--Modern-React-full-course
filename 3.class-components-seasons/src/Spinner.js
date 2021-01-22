import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
  //   <div className="ui big text loader">{props.message || "Loading..."}</div>
};

//we can define a default of properties when intiatiate a new component
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
