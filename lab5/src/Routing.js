import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import History from "./components/history";
import Search from "./components/search";
import { Provider } from "react-redux";
import NotFound from './components/notfound'

const Routing = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div id="">
          <Switch>
          <Route component={App} />
            <Route exact path='/search' component={Search}/>
            <Route exact path='/history' component={History}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routing;
