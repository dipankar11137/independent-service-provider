import React from 'react';
import { useParams } from 'react-router-dom';

const Teachers = () => {
    const { teachersId } = useParams();
    return (
        <div>
            <h3>Teachers{teachersId}</h3>
        </div>
    );
};

export default Teachers;