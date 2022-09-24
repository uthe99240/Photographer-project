import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../src/firebase.init.js';
import Loading from '../Loading/Loading';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    let errorElement;

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () => {
        navigate('/register');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
         errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        console.log(email);
    }

    return (
        <div className='pt-3'>
            <div className='login-form'>
                <h2 className='text-danger' style={{ textAlign: 'center' }}>Please Login</h2>
                <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input
                        className=' btn btn-danger mt-2'
                        type="submit"
                        value="Login" />
                </form>
                {errorElement}
                <p>New to visit my profile? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Signup</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;