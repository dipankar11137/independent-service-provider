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
        <div id='services' className='container'>
            <div className='row'>
                <h1>Our Subjects {subjects.length}</h1>
                <div className='services-container'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject}></Subject>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Subjects;