import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div id='footer' className='bg-black'>
            <Container>
                <Row className='py-5 text-start'>
                    <Col className=' py-4 px-5'>
                        <p className='pt-5 text-secondary text-gradient'>FIND WITH ME</p>
                        <div className='mt-4 d-flex'>
                            <div className='aFile'>
                                <a href="https://www.facebook.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big ><FiFacebook /></big></span></a>
                            </div>

                            <div className="aFile">
                                <a href="https://www.instragram.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big><BsInstagram /></big></span></a>
                            </div>

                            <div className="aFile">
                                <a href="https://www.linkedin.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big><FiLinkedin /></big></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h5 className='text-danger'>PRODUCT</h5>
                        <p className='text-secondary text-gradient'><big> Database</big></p>
                        <p className='text-secondary text-gradient'><big>Authentication</big></p>
                        <p className='text-secondary text-gradient'><big>Storage</big></p>
                        <p className='text-secondary text-gradient'><big>Support</big></p>
                        <p className='text-secondary text-gradient'><big>Pricing</big></p>
                    </Col>
                    <Col>
                        <h5 className='text-danger'>RESOURCES</h5>
                        <p className='text-secondary text-gradient'><big>Authentication</big></p>
                        <p className='text-secondary text-gradient'><big>System status</big></p>
                        <p className='text-secondary text-gradient'><big>Terms of Service</big></p>
                        <p className='text-secondary text-gradient'><big>Pricing</big></p>
                        <p className='text-secondary text-gradient'><big>Over right</big></p>
                    </Col>
                    <Col>
                        <h5 className='text-danger'>Developers</h5>
                        <p className='text-secondary text-gradient'><big>Documentation</big></p>
                        <p className='text-secondary text-gradient'><big>Authentication</big> </p>
                        <p className='text-secondary text-gradient'><big>API Reference</big></p>
                        <p className='text-secondary text-gradient'><big>Support</big></p>
                        <p className='text-secondary text-gradient'><big>Open Source</big></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center pb-2 text-secondary text-gradient'>© {year}. All rights reserved by Faisal Ahmed.</p></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;