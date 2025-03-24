// import { useState } from 'react'

import './App.css'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import MdInput from './assets/components/md-input'
import Output from './assets/components/md-output'

function App() {

  return (
    <>
    <div className = "h-[65vh] w-[100vw] border">
      <Header title= "Markdown editor"></Header>
      <div className = "mt-[2vh] w-9/10 m-auto bg-white">
        <MdInput color={"white"}></MdInput>
      </div>

      <div className = "mt-[2vh] w-9/10 m-auto bg-white">
        <Output></Output>
      </div>
      <Footer></Footer>

    </div>
      
    </>
  )
}

export default App
