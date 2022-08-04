import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/#/">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#/login"><i class="fa-regular fa-user"></i></Nav.Link>
                        <Nav.Link href="/#/purchases"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
                        <Nav.Link href="/#/">Home</Nav.Link>
                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;