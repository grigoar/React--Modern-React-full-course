import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
// window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

//23.	Rules of Class Components: -Must be a JavaScript Class ; -Must extend(subclass) React.Component; -Must define a ‘render’ method that returns some amount of JSX
class App extends React.Component {
  //first block of code that is called when the component is initialized
  constructor(props) {
    super(props);

    //initialize the state object
    //THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };
    //async call
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //when the resolve promise is return
        //we call setState to update a property of the object state
        this.setState({ lat: position.coords.latitude });

        //we did not !!!
        // this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    //initial data loading
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    //any time that the component is reloading itself
    console.log("My componetn was just updated - it rerendered");
  }

  componentWillUnmount() {
    //is we want to do some cleanup when we don't to show the component anymore
  }

  //React says we have to define render!!
  render() {
    //conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

//----------------Structuring Apps with Class-Based Compoentns
//----------------State in React Components
