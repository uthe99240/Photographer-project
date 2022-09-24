import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../src/firebase.init.js';

const Signup = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }

    return (
        <div className='pt-3'>
            <div className='signup-form'>
                <h2 className='text-danger'  style={{ textAlign: 'center' }}>Please Signup</h2>
                <form onSubmit={handleSubmit} className='w-50 mx-auto pt-2'>
                <input type="text" name="name" id="" placeholder='Your Name' />
                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept All Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className=' btn btn-danger mt-2'
                        type="submit"
                        value="Signup" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                 <SocialLogin></SocialLogin>
            </div>
            

        </div>
    );
};

export default Signup;