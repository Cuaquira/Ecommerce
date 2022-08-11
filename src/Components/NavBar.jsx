import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const NavBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const token = localStorage.getItem("token");
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (token) {
            setShow(true)
        } else {
            navigate("/login")
        }
    }
    
    const logout = () => {

        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <>
            <Navbar bg="primary" variant="dark">

                <Container >
                    <Navbar.Brand href="/#/"><i className="fa-brands fa-aws"></i> Amazon </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Button} href="/#/">Home</Nav.Link>
                            <Nav.Link as={Button} href="/#/purchases"><i className="fa-solid fa-bag-shopping"></i></Nav.Link>
                            <Nav.Link as={Button} onClick={handleShow}> <i className="fa-solid fa-cart-shopping"></i></Nav.Link>
                            <Nav.Link as={Button} href="/#/login"><i className="fa-regular fa-user"></i></Nav.Link>
                            <Nav.Link as={Button} onClick={logout}><i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <CartSidebar  show={show} handleClose={handleClose}/>
        </>
    );
};

export default NavBar;