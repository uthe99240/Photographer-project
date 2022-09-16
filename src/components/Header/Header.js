import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container className='bg-black py-2'>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src="/s.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand className='fw-semibold text-danger fst-italic' as={Link} to="/" >Sumaiya Sanaya</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home">Home</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home#banner">Banner</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="#services">Services</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark'  href="home#about">About</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark'  href="home#footer">Footer</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-danger'as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-danger' as={Link} to="/signup">Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;