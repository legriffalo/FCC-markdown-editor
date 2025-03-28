import React, {useEffect,useState} from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';


interface OutputProps {

}



const Output: React.FC<OutputProps> = ({ }) => {
    

    const [sanitizedContent, setSanitizedContent] = useState<string>('');

    const markdownContent = '# Heading\n # Marked in Node.js\n\nRendered by **marked**.';
  
    useEffect(() => {
      // This function will parse and sanitize the markdown content
      const parseMarkdown = async () => {
        try {
          const parsedContent = await marked.parse(markdownContent); // This might return a Promise
          const sanitized = DOMPurify.sanitize(parsedContent);
          setSanitizedContent(sanitized);
        } catch (error) {
          console.error('Error parsing or sanitizing markdown:', error);
        }
      };
  
      parseMarkdown();
    }, []); // Empty dependency array to run once on component mount

    return (
        <>
        <div className = "h-20vh border-white bg-gray-400 text-black">
            <p className="h-[3vh] border p-1 text-sm font-bold text-center bg-white"> Output preview </p>
            <div id = "preview"
            dangerouslySetInnerHTML={{__html: sanitizedContent}}
            />
        </div>
        </>
    );
};

export default Output;