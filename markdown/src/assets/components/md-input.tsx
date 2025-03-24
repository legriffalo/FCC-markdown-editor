import React from 'react';

interface MdInputProps {
    color?: string;
}

const MdInput: React.FC<MdInputProps> = ({ color }) => {

    return (
        <>
        <div data-color = {color} className = "h-20vh border-white bg-gray-400 text-black">
        <textarea 
        name="postContent"
        defaultValue="Enter your markdown here to see the result in the window below"
        rows={4}
        cols={60}
        />
        </div>
        </>

    );
  };

export default MdInput;