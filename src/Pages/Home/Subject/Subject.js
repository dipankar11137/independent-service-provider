import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { id, name, subjectName, imgSubject } = subject;
    const navigate = useNavigate()
    const navigateToTeacherDetail = id => {
        navigate('/teachers');
    }
    return (
        <div className='shadow p-2'>
            <img className='w-100' src={imgSubject} alt="" />
            <h2>{subjectName}</h2>
            <h5>Teacher Name : {name}</h5>
            <button onClick={() => navigateToTeacherDetail(id)} className='btn btn-primary'>Teacher Details</button>
        </div>
    );
};

export default Subject;