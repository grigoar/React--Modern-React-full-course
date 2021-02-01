import React from "react";
import { MemoryRouter, HashRouter, BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <button>
        {/* BAD!!!!!!! */}
        {/* <a href="/pagetwo">Click Me!</a> */}
        <Link to="/pagetwo">Click Me!</Link>
      </button>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>
        <Link to="/">Click Me!</Link>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
