import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../images/woman-height.jpg';
import './AboutMe.css'
import { Link } from "react-router-dom";
import file from '../../../src/files/cvFaisalAhmedWithProject.pdf';

const AboutMe = () => {
    return (
        <div id='portfolio' className='bg-dark'>
            <Container >
                <Row className='py-5' lg={2} md={1} sm={1} xs={1}>
                    <Col className='col-lg-4 shadow-lg p-4 bg-dark rounded-3'>
                        <div className='photo-frame rounded-3'>
                            <img className='w-100' src={image} alt="" />
                        </div>
                    </Col>
                    <Col className='col-lg-8 text-start p-5'>
                        <h1 className='fw-bolder text-white '>Sumaiya Sanaya</h1>
                        <p className='text-secondary fs-5 fw-semibold clsjustify'>I completed my BSC in CSE from Daffodil International University with CGPA 3.93.
                            Now I Am working with Web Development. I comfortable with HTML, CSS, JavaScript, ES6, React, Bootstrap, Tailwind, React Router, Require Auth, Firebase.
                            After complete frontend development ,I start to learn backend development with node js. Today I have lots of problem but I believe, one day my hardwork will be make me happy. </p>
                        <p className='text-secondary fs-5 fw-semibold clsjustify'>For Achieve my goal , daily i try to practice 6 hours . I enjoy Web development but some reason i failed complete my course in time. But i believe one day i will make a good web developer. </p>
                    </Col>
                    <hr className='text-black w-100 mt-5' />
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;