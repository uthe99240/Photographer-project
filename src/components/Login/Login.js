import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const [agree, setAgree] = useState(false);


    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='pt-3'>
            <div className='login-form'>
                <h2 className='text-danger' style={{ textAlign: 'center' }}>Please Login</h2>
                <form className='w-50 mx-auto'>
                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input
                        disabled={!agree}
                        className=' btn btn-danger mt-2'
                        type="submit"
                        value="Login" />
                </form>
                <p>New to visit my profile? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Signup</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;