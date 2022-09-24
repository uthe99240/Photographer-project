import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home#skill">Skill</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home#services">Services</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' href="home#footer">Footer</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link className='text-white me-3 my-1 px-4 btn btn-dark' as={Link} to='/about'>About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link bg-danger text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link className='text-white me-3 my-1 px-4 btn btn-danger' as={Link} to="/login">Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;