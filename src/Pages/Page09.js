import React, { useState } from 'react';
import logo from '../images/logo.svg';
import logo_1 from '../images/image-Logo.svg';
import logo_2 from '../images/Subtract.svg';
import logo_3 from '../images/Ellipse_8.svg';
import { Link } from "react-router-dom";
import '../Pagescss/Page09.css';
import Modal from 'react-bootstrap/Modal'
import { Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
const ContainData = {
    display: 'flex',
    background: '#EDECEC',
    height: '135vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center'
}
const rowstyleData = {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right'
}
const rowdataitem = {
    padding: '10px',
}


function Page09() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Name on Card</label>
                        <input type="text" alt="" />
                        <label>Card Number</label>
                        <input type="text" alt="" />
                        <div>
                            <span>
                                <label>Expiry Date</label>
                                <input type="text" alt="" />
                            </span>
                            <span>
                                <label>Expiry Date</label>
                                <input type="text" alt="" />
                            </span>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className="text-center">
                    <Button className="text-center" variant="success" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container-fluid" style={ContainData}>
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
                <div className="row text-center" id="row1">
                    <div className="col-12" id="row-data-2">
                        <header>Payment
                            <i className="ms-auto fas fa-times"></i>
                        </header>
                        <div className="row">
                            <div className="col-3" style={rowstyleData}>
                                <img height="200px" width="82px" src={logo_3} />
                            </div>
                            <div className="col-7">
                                <p>John Cena</p>
                                <p id="new-one">Full Course <span>$2,000</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" id="colh6data">
                                <h6 id="h6-data" >Choose Payment Information</h6>
                                <button onClick={handleShow} className="btn btn-outline-success">  +  Add New Card </button>
                                <h6 id="newh6">This payment  will be a one-time payment</h6>
                            </div>
                        </div>
                        <div className="row" style={rowdataitem}>
                            <div className="col-6">
                                <p>Total</p>
                            </div>
                            <div id="two" className="col-6">
                                <p >$2,000</p>
                            </div>
                        </div>
                        <div className="row" id="rowLink" style={{ border: 'none' }}>
                            <div className="col">
                                <Link id="Link-items-data-1" to="/">Pay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Page09;

