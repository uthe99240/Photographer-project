import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='bg-dark'>
            <Container>
                <Row>
                    <Col className='text-start'>
                        <h4 className='text-danger mt-4'> Difference between authorization and authentication?</h4>
                        <p className='text-secondary'> <big>Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.</big> </p>
                        <h4 className='text-danger mt-4'> Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p className='text-secondary'> <big>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</big> </p>
                        <h4 className='text-danger mt-4'> What other services does firebase provide other than authentication?</h4>
                        <p className='text-secondary'> <big>There are many services which Firebase provides, Most useful of them are:
                            Cloud Firestore.
                            Cloud Functions.
                            Authentication.
                            Hosting.
                            Cloud Storage.
                            Google Analytics.
                            Predictions.
                            Cloud Messaging.</big> </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Blog;