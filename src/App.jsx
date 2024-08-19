// src/App.js
// "use client";
import React from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Progress from './components/Progress';
import Socials from './components/Socials';
import Footer from './components/Footer';
import { useState } from 'react';



function App() {
const [mode, setMode] = useState(true);

const toggleMode=()=>{
  if(mode){
      setMode(false);
      console.log("working............")
  }
  else{
    setMode(true);
    console.log("working............")
  }
};

  return (
    <div className={`flex
    justify-center
    bg-${mode?"[#000814]":"rgb(222,222,222)"}
    text-${mode?"rgb(222,222,222)":"[#000814]"}
    font-inter`}>
      <NavBar mode={mode} toggleMode={toggleMode}/>
          <div id="container">
            <Intro/>
            <Projects />
            <Progress/>
            <Socials/>
            <Footer></Footer>
          </div>

    </div>
  );
}

export default App;
