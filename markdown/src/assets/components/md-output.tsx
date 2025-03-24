import React from 'react';

interface OutputProps {

}

const Output: React.FC<OutputProps> = ({ }) => {


    return (
        <>
        <div className = "h-20vh border-white bg-gray-400 text-black">
            <p>Your output should appear here</p>
        </div>
        </>
    );
};

export default Output;