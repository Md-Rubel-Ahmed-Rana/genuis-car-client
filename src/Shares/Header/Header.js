import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='header' href="#home">
                    <img  src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex gap-3">
                        <Link to="">Features</Link>
                        <Link to="">Pricing</Link>
                        {
                            user?.email 
                            ? <>
                                    <Link to="/orders">Orders</Link>
                                    <Link onClick={logOut} to="/">Logout</Link>
                            </> 
                                : <Link to="/login">Login</Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Appointment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;