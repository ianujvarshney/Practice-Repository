import logo from './images/logo.svg';
import React from 'react';
import backgrou from './images/backgrou.svg';
import background from './images/background.svg';
import './App.css';
// import Apple from './components/Apple';
import './app.scss';
/* import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap'; */
function App() {
  return (
    <>
      <section>
        <div className="box">
          <div className="box-items">
            <img src={background} />
          </div>
          <h1 className="icon"><img src={logo}></img></h1>
          <h1 className="icon-2"><img src={backgrou}></img></h1>
          <h1 className="text-center new-1">Sign Up as..</h1>
          <div className="card-group">
            <button> <a href="#"> {"< Back"}</a></button>
            <div className="card card-1">
              <div className="card-item">
                <i className="fas fa-user-tie"></i>
                <h1 className="heading-1">Coach</h1>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-item">
                <i className="fas fa-user-tie"></i>
                <h1 className="heading-1">Client</h1>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
