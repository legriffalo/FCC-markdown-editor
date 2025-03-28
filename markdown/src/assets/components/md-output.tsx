import React from 'react';

interface OutputProps {
  out:string;
}

const Output: React.FC<OutputProps> = ({out}) => {

    return (
        <>
        <div className = "h-20vh border-white bg-gray-400 text-black">
            <p className="h-[3vh] border p-1 text-sm font-bold text-center bg-white "> Output preview </p>
            <div id = "preview" 
            dangerouslySetInnerHTML={{__html: out}}
            />
        </div>
        </>
    );
};

export default Output;