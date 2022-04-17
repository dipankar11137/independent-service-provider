import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <div className='shadow-lg p-3'>
                <h2 className='text-primary text-center mt-2'>Please login</h2>

                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New to Tutor? <span onClick={navigateRegister} className='text-primary' type="submit">Please Register</span></p>
                <p>Forget Password? <span className='text-primary' type="submit" >Reset Password</span></p>
            </div>
        </div>
    );
};

export default Login;