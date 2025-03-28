import React from 'react';

interface MdInputProps {
    color?: string;
}

const MdInput: React.FC<MdInputProps> = ({ color }) => {

    return (
        <>
        <div data-color = {color} className = "h-20vh border-white bg-gray-400 text-black">
            <p className="h-[3vh] border p-1 text-sm font-bold text-center bg-white"> Editor </p>
        <textarea 
        className="bg-red-300 w-full"
        id = "editor" 
        name="postContent"
        defaultValue="Enter your markdown here to see the result in the window below"
        rows={10}
        />
        </div>
        </>

    );
  };

export default MdInput;