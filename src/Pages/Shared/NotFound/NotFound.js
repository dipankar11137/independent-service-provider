import React from 'react';
import notFond from '../../../Images/404.png';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center mt-5 '>

            <img className='shadow-lg' src={notFond} alt="" />
        </div>
    );
};

export default NotFound;