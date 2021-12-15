import React from 'react';
import logo from '../images/logo.svg';
import logo_1 from '../images/image-Logo.svg';
import logo_2 from '../images/Subtract.svg';
import { Link } from "react-router-dom";
import '../Pagescss/Page05.css';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';

function Page05() {
    return (
        <>

            <div className="container-fluid" id="contain">
                <div className="row">
                    <Navbar className="Nav-bar" bg="light" variant="light" fixed="top" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#" id="navbar-image">
                                <Link to="/"><img id="img_1" height="100px" width="70px" src={logo} /></Link>
                                <img id="img_2" src={logo_1} />
                                <h2>DASHBOARD</h2>
                            </Navbar.Brand>
                            <Navbar.Brand className="ms-auto pe-md-5 navbar-nav">
                                <h6>Welcome back, George</h6>
                                <img height="100px" width="40px" src={logo_2} />
                            </Navbar.Brand>
                            <Navbar.Toggle className="navbar-toggle" aria-controls="navbarScroll" />
                            <NavDropdown title="" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Container>
                    </Navbar>
                </div>
                <div className="row" >
                    <div className="col-4 section_f1">
                        <h1>My Schedule</h1>
                    </div>
                    <div className="col-8 section_f2">
                        <h1>My Coaches</h1>
                        <p id="h1-id">Add Coach</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Page05;
