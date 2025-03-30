import {marked} from 'marked';
import React from 'react';

interface PreviewProps {
    content:string;
    renderer?:any;
}


const Preview: React.FC<PreviewProps> = ({renderer, content }) => {

    return (
        <div className = "w-5/10 h-9/10">
            <p className= "h-1/20 text-center border bg-green-200"> Preview </p>       
            <div id="preview" className= "w-full h-14/15 overflow-y-scroll border" 
            dangerouslySetInnerHTML = {{
            __html: marked(content, { renderer: renderer })
            }}> 
        </div>
        </div>
        
    )
}

export default Preview