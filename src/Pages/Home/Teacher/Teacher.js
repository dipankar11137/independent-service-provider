import React from 'react';
import { useNavigate } from 'react-router-dom';

const Teacher = ({ teacher }) => {
    const { name, imgTeacher, description, salary, subjectName, Phone } = teacher;
    const navigate = useNavigate();
    const checkOut = () => {
        navigate('/checkout');
    }
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div className='shadow-lg m-3 p-3'>
                <img style={{ height: "350px" }} className='w-100 ' src={imgTeacher} alt="" />
                <h3 className='mt-3'>{name}</h3>
                <h5>Subject Name : {subjectName}</h5>
                <p>Salary: {salary}</p>
                <p>Phone : {Phone}</p>
                <p><small>{description}</small></p>
                <button onClick={checkOut} className='btn btn-primary'>Checkout</button>

            </div>
        </div>
    );
};

export default Teacher;