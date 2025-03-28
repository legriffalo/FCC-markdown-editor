import React, {useState} from 'react';

interface MdInputProps {
    color?: string;
    handler?:any;
    initial:string;
}

const MdInput: React.FC<MdInputProps> = ({ color,handler, initial }) => {
    const [text, setText] = useState(initial)
    
    const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value); // Update the text state with the current value
        handler(e.currentTarget.value); // Pass the value to the parent handler
      };

    //   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setText(e.target.value); // Update the text state with the current value
    //     handler(e.target.value); // Pass the value to the parent handler
    //   };

    return (
        <>
        <div data-color = {color} className = "h-20vh border-white bg-gray-400 text-black ">
            <p className="h-[3vh] border p-1 text-sm font-bold text-center bg-white"> Editor </p>
            
            <textarea 
            
            onKeyUp={(e)=> handleKeyUp(e)} // Handle onChange to update state

            // onChange={(e)=> handleKeyUp(e)} // Handle onChange to update state
            className="bg-red-300 w-full"
            id = "editor" 
            name="postContent"
            placeholder="Enter your markdown here to see the result in the window below"
            defaultValue = {text}
            // value= {text}
            rows={10}
            />
        </div>
        </>

    );
  };

export default MdInput;