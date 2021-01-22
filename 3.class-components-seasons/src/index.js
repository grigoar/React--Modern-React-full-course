import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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
  //   constructor(props) {
  //     super(props);

  //     //initialize the state object
  //     //THIS IS THE ONLY TIME we do direct assignment to this.state
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  //other way to do state initializing
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //initial data loading
    // console.log("My component was rendered to the screen");
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

  componentDidUpdate() {
    //any time that the component is reloading itself
    console.log("My componetn was just updated - it rerendered");
  }

  componentWillUnmount() {
    //is we want to do some cleanup when we don't to show the component anymore
  }

  //making a helper method
  renderContent() {
    //conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // return <Spinner message="Please accept location request" />;
    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

//----------------Structuring Apps with Class-Based Compoentns
//----------------State in React Components
//----------------Components Methods lifecycle

// class UserForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <label>Enter a username:</label>
//         <input />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<UserForm />, document.querySelector("#root"));
