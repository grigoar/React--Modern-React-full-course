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
    this.state = { lat: null };
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
      (err) => console.log(err)
    );
  }

  //React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

//----------------Structuring Apps with Class-Based Compoentns
//----------------State in React Components
