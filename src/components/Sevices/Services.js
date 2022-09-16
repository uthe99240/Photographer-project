import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='bg-dark'>
            <Container>
                <h1 className='fw-bolder text-secondary mb-4'>My Services</h1>
                <Row lg={3} md={2} sm={1} xs={1}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Services;