import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center p-3'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='shadow p-3'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary w-75 d-block mx-auto mb-2">
                    <span className='px-2 fw-bold fs-5'> Google Sign In</span>
                </button>
                <button className="btn btn-primary w-75 d-block mx-auto mb-2">
                    <span className='px-2 fw-bold fs-5'> Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-primary w-75 d-block mx-auto">
                    <span className='px-2 fw-bold fs-5'> Github Sign In</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;