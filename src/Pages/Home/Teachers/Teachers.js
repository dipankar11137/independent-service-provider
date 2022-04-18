
import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('subjectTeacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='container mt-5'>
            <h1 className='text-center fw-bold text-primary'>TEACHERS</h1>
            <div className=' row'>

                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;