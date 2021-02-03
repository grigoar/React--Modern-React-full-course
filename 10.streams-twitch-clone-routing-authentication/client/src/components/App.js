import React from "react";
import {
  MemoryRouter,
  HashRouter,
  BrowserRouter,
  Route,
  Router,
  Link,
  Switch,
} from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

//need to use Router instead of BrowserRouter if we want to use our own history object
const App = () => {
  // <Route path="/streams/edit/:anything/:somethingelse" exact component={StreamEdit} />
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
