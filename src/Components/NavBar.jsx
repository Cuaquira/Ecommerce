import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    const logout = () => {
       
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <Navbar bg="dark" expand="lg">
            <Container >
                <Navbar.Brand href="/#/">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>                      
                        <Nav.Link href="/#/purchases"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
                        <Nav.Link href="/#/login"><i class="fa-regular fa-user"></i></Nav.Link>
                        <Nav.Link as={Button} onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;