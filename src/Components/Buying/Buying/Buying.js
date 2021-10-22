import React from 'react';
import { useParams } from 'react-router';

const Buying = () => {
    const { medicineId } = useParams();
    return (
        <div>
            <h1 className="text-6xl text-center">this is booking{medicineId}</h1>
        </div>
    );
};

export default Buying;