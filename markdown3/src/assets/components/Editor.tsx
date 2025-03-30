import React from 'react';

interface EditorProps {
    content?:string;
    handler?:any;
}

const Editor: React.FC<EditorProps> = ({handler, content }) => {

    return (
        <div className = "w-4/10 h-8/10 mt-[5vh] border "> 
        <p className= "h-1/20 text-center bg-green-200 border"> Editor </p>       
        <textarea className = "h-9/10 w-full" id="editor" value={content} onChange={handler}/>
</div>
    )
}



export default Editor

