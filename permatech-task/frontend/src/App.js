import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Details from "./components/details.component";



class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bl-light navbar-inverse">
            {/* <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank"> */}
              {/* <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" /> */}
            
            <Link to="/" className="navbar-brand">Customer details</Link>
            
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View details</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create new order</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <br/>
          <Route path="/" exact component={Details} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </div>
        
      </Router>
        
      
    );
  }
}

export default App;