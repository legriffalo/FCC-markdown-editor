import { useState,useEffect } from 'react'
// import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import MdInput from './assets/components/md-input'
import Output from './assets/components/md-output'
import init from './assets/initialMd';
import { marked } from 'marked';



// Enable GitHub Flavored Markdown (GFM)
// marked.setOptions({
//   gfm: true,          // Enable GFM
//   breaks: true,
//   async:false
//          // Allow line breaks
// });


function App() {
  const [text, setText] = useState(init)
  const [parsed, setParsed] = useState('')  


    // Dynamically load the older version of 'marked' from the CDN
    // useEffect(() => {
    //   const script = document.createElement('script');
    //   script.src = "https://cdn.jsdelivr.net/npm/marked@0.3.19/lib/marked.min.js"; // Older version
    //   script.async = true;
    //   document.body.appendChild(script);
  
    //   script.onload = () => {
    //     // Once the script is loaded, use `marked` to parse the markdown text
    //     console.log(marked.parse('marked.js has been loaded!'));
    //   };
  
    //   return () => {
    //     // Cleanup: Remove the script when the component is unmounted
    //     document.body.removeChild(script);
    //   };
    // }, []);

    
  const handleTextChange = (newText:string) => {
    setText(newText); // Update the state in the parent
  };


  useEffect(() => {
   

    const parseMarkdown = async () => {
      try {
        const parsedContent = await marked.parse(text); 
        const sanitizedContent = DOMPurify.sanitize(parsedContent);
        setParsed(sanitizedContent);

        // setParsed(parsedContent);
  
      } catch (error) {
        console.error('Error parsing or sanitizing markdown:', error);
      }
    };
    parseMarkdown();

  }, [text]);
  
    

  return (
    <>
    <div className = "h-[65vh] w-[100vw] border">
      <Header title= "Markdown editor"></Header>
      <div className = "mt-[2vh] w-9/10 m-auto bg-white">
        <MdInput color={"white"} handler = {handleTextChange} initial = {init}></MdInput>
      </div>

      <div className = "mt-[2vh] w-9/10 m-auto bg-white">
        <Output out = {parsed} ></Output>
      </div>
      <Footer></Footer>

    </div>
      
    </>
  )
}

export default App
