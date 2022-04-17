import React from 'react';

const Subject = ({ subject }) => {
    const { name, subjectName } = subject;
    return (
        <div>
            <h1>This is subject</h1>
            <h1>{name}</h1>
            <h2>{subjectName}</h2>
        </div>
    );
};

export default Subject;