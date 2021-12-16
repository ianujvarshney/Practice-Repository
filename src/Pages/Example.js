import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

export default function Example() {
    const [show, setShow] = useState(false);
    function handleClose() {
        return setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}
// render(<Example />);