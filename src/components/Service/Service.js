import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/checkout`);
    }

    return (
        <div>
            <Col className=' p-4 bg-light rounded-3 mb-3'>
                <div className='bg-secondary rounded-3'>
                    <img className='w-100 rounded-3 mb-2' src={img} alt="" />
                    <h4 className='text-black text-start ps-2'> <span className='fw-bolder'> Name:</span> {name}</h4>
                    <h4 className='text-black text-start ps-2'> <span className='fw-bolder'> Price :  $</span>{price}</h4>
                    <p className='text-black text-start px-2'><span className='fw-bolder'>Description :</span>  <small>{description}</small></p>
                    <Link to='/hiring'>
                        <button className='btn btn-dark w-100'>Hiring Me </button>
                    </Link>

                </div>
            </Col>
        </div>
    );
};

export default Service;