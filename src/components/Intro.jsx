import React from "react";
import hugging from  '../assets/come-on-hug.png'
import lookingAtYou from  '../assets/hey-looking-at-you1.png'
import flower from  '../assets/grass_FLOWER.png'

function Intro() {
  return (
    <div id="intro" className="observed">
      <h1>i'm nishant thapa</h1>
      <span id="learning">
        Constantly learning and <br /> 
        exploring new technologies <br /> 
        to satisfy my curiosity.
      </span>

      <div id="intro-emoji-container">
        <img
          id="handfold"
          className="intro-emoji"
          src={lookingAtYou}
          alt=""
        />
        <img id="hi" className="intro-emoji2" src={hugging} alt="" />
      </div>

      <img id="flower" src={flower} alt="" />
    </div>
  );
}

export default Intro;
