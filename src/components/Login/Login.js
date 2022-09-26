import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../src/firebase.init.js';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


    return (
        <div className='pt-3'>
            <div className='login-form'>
                <h2 className='text-danger' style={{ textAlign: 'center' }}>Please Login</h2>
                <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                    <input  ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input
                        className=' btn btn-danger mt-2'
                        type="submit"
                        value="Login" />
                </form>
                {errorElement}
                <p>New to visit my profile? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Signup</Link> </p>
                <p>Forget Password? <span onClick={resetPassword} className='text-danger' style={{ cursor: 'pointer' }}>Reset</span> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;