import React, { useState } from "react";

// const onTitleClick = (index) => {
//   console.log("title clicked", index);
// };

const Accordion = ({ items }) => {
  //array destructuring
  //useState return an array with 2 elements
  const [activeIndex, setActiveIndex] = useState(null);
  //   const [name, setName] = useState("");
  //   const [counter, setCounter] = useState(0);
  //   const [color, setColor] = useState("green");

  const onTitleClick = (index) => {
    // console.log("Title clicked", index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    //instead of the div we can use the React.Fragment(some bug with semantic ui)
    //if we don't need to pass parameters we don't need to use an arrow function for onClick
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

//Challenge
// const [counter,setCounter] = useState(0);

// const onButtonClick=() =>{
//     setCounter(counter+1);
// }
// <button onClick={onButtonClick}>Click Me!</button>
// <h1>Current Count: {counter}</h1>
