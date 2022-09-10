import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../images/React1-edit.png';
import image2 from '../../images/in-studio-edit.png';
import image3 from '../../images/node-edit.png';
import image4 from '../../images/html.png';
import image5 from '../../images/firebase-edit.png';
import image6 from '../../images/laravel-edit.png';
import image7 from '../../images/php-edit.jpg';
import image8 from '../../images/tailwind-edit.jpg';

const Skill = () => {
    return (
        <div className='bg-dark'>
            <Container >
                <p className='text-danger'><span><small>VISIT MY SKILL & HIRE ME</small></span></p>
                <h1 className='fw-bolder text-secondary mb-5'>My Skill</h1>
                <Row lg={4} md={2} sm={1} xs={1} >
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image4} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image1} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image3} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image2} alt="" />
                    </Col>
                </Row>
                <Row lg={4} md={2} sm={1} xs={1} >
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image5} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image6} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image7} alt="" />
                    </Col>
                    <Col className='py-2'>
                        <img className='w-100 rounded-3' src={image8} alt="" />
                    </Col>
                    <hr className='text-black w-100 rounded-3 my-5' />
                </Row>
            </Container>
        </div>
    );
};

export default Skill;