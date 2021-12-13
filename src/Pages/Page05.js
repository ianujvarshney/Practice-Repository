import React from 'react';
import logo from '../images/logo.svg';
import logo_1 from '../images/image-Logo.svg';
import '../Pagescss/Page05.css';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

function Page05() {
    return (
        <>
            <div className="container">
                <Navbar className="Nav-bar" bg="light" variant="light" fixed="top" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img height="60px" width="60px" src={logo} />
                            <img height="60px" width="60px" src={logo_1} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
                <div className="row">
                    <div className="col-4 section_f1">
                        <h1>My Schedule</h1>
                    </div>
                    <div className="col-8 section_f2">
                        <h1>My Coaches</h1>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Page05;
