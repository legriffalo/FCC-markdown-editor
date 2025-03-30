import {marked} from 'marked';
import { useState } from 'react';
import './App.css';
import Editor from './assets/components/Editor';
import Preview from './assets/components/Preview';
import init from './assets/initialMd'
import Header from './assets/components/header';
import Footer from './assets/components/footer'

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
// renderer.link = function ({ href, title, tokens }: { href: string; title: string; tokens: any }): string {
//   return `<a target="_blank" href="${href}" title="${title}">${tokens}</a>`;
// };

export default function App() {

  const [content, setContent] = useState(defaultContent)

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setContent(e.target.value)
  }

  return (
    <div className="w-8/10 h-999/1000 m-auto  ">
      <Header title="Markdown editor"></Header>
      <div className="container mt-[2vh] h-full m-auto flex flex-row  gap-[5vw] ">
      <Editor content={content} handler={handleTextChange}/>
      <Preview content={content} renderer={renderer}/>        
      </div>
      <Footer></Footer>
    </div>
  );
}


const defaultContent = init;