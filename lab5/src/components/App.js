import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../index.css";
import { Route, Switch, Link } from "react-router-dom";
import Search from "./search"
import History from "./history"
import NotFound from "./notfound"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Lab 5: Extra Credit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/search">Search</Link>
              <Link to="/history">History</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/history' component={History}/>
          <Route component={NotFound} />
        </Switch>
        <div id="mainContent">
          <h1>Welcome to the Lab 5 Home Page</h1>
          <br></br>
          <h2>
            This page serves no purpose, however the navbar above can be
            utilized to access the other pages
          </h2>
          <br></br>
          <h3>
            Please refer to the lab instructions in order to implement routing
            correctly
          </h3>
        </div>
      </div>
    );
  }
}
export default App;
