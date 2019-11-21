import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import History from "./components/history";
import Search from "./components/search";
import { Provider } from "react-redux";

const Routing = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div id="">
          <Switch>
          <Route component={App} />
          {/**
           * TODO: create Routes using <Route /> for the History, and Search components
           */}
           <Route path="/">
             <App />
           </Route>
           <Route path="/search">
             <Search />
           </Route>
           <Route path="/history">
             <History />
           </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routing;
