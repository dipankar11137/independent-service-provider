import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Subjects.css';

const Subjects = () => {
    const [subjects, setSubject] = useState([]);

    useEffect(() => {
        fetch('subjectTeacher.json')
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])

    return (
        <div id='subject' className='container mt-5'>
            <div className='row'>
                <h1 className='text-center'>Our Subjects </h1>
                <div className='subject-container'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject}></Subject>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Subjects;