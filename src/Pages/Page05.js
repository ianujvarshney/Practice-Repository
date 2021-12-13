import React from 'react';
import logo from '../images/logo.svg';
import logo_1 from '../images/image-Logo.svg';
import '../Pagescss/Page05.css';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

function Page05() {
    return (
        <section>
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
        </section >

    )
}


export default Page05;
