import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Registor.css'
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { SendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigatorLogin = () => {
        navigate('/login');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
        alert('Create Your Profile');
    }
    return (
        <div className='container register-from'>
            <div className='shadow-lg mt-4 p-3'>
                <h2 className='text-center'>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input className='mt-3 ' type="checkbox" name="terms" id="terms" />

                    <label htmlFor="terms">Accept Terms and Condition</label>
                    <input

                        className='btn btn-primary w-50 mx-auto'
                        type="submit"
                        value="Register" />
                </form>
                <p>Already have an account? <span onClick={navigatorLogin} className='text-primary mt-2' type="submit" >Please Login</span></p>
            </div>

        </div>
    );
};

export default Register;