import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../images/woman-height.jpg';
import './About.css';
import { Link } from "react-router-dom";
import file from '../../../src/files/cvFaisalAhmedWithProject.pdf';

const About = () => {
    return (
        <div className='bg-dark'>
            <Container >
                <Row className='py-5' lg={2} md={1} sm={1} xs={1}>
                    <Col className='col-lg-4 shadow-lg p-4 bg-dark rounded-3'>
                        <div className='photo-frame rounded-3'>
                            <img className='w-100' src={image} alt="" />
                        </div>
                    </Col>
                    <Col className='col-lg-8 text-start p-5'>
                        <p className='text-danger text-left pt-3'><span><small>VISIT MY PORTFOLIO & HIRE ME</small></span></p>
                        <h1 className='fw-bolder text-white'>About Me</h1>
                        <p className='text-secondary fs-5 fw-semibold text-justify'>I completed my BSC in CSE from Daffodil International University with CGPA 3.93. 
                        Now I Am working with Web Development. I comfortable with HTML, CSS, JavaScript, ES6, React, Bootstrap, Tailwind, React Router, Require Auth, Firebase.</p>
                        <p className='text-secondary fs-5 fw-semibold'>Tools : Figma , Vs Code , Photopea , Netlify , Git, Github, HeroIcon, Font Awesome, Free pic , imgbb etc.</p>
                        <button className=' border-0 py-3 px-5 rounded-3 btnFile'>
                            <Link className='text-decoration-none text-white' to={file} target="_blank" download>DOWNLOAD MY CV</Link>
                        </button>
                    </Col>
                    <hr className='text-black w-100 my-5' />
                </Row>
            </Container>
        </div>
    );
};

export default About;