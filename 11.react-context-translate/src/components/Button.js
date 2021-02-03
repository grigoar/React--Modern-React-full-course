import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //how we wire a context object to a class component
  //   static contextType = LanguageContext;
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    //we can access the default context object with this.context
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Voorleggen";

    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value.language === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
