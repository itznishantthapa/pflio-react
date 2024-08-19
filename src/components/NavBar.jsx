import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const NavBar = (props) => {

  return (
    <div className={` 
    font-inter
    font-bold
     text-[rgb(109,109,109)]
    flex
    justify-between
    items-center
    fixed
    z-[999]
    top-[4vmin]
    rounded-2xl
    h-[9vmin]
    w-[65%]
    pl-2.5
    backdrop-blur-[20px]
    bg-[rgba(222, 222, 222, 0.5)]
    opacity-100
    transition-shadow
    duration-300
    ease-in-out`
    }>
      <div id="name">THAPA</div>
      <div id="icons">
        <FaLinkedin
          id="linked-in"
          className="text-3xl transition-transform duration-400 ease hover:translate-x-2 hover:text-white"
          onClick={() => handleIconClick("https://www.linkedin.com/in/nishantthapa1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}
        />
        <FaEnvelope
          id="mail"
          className="text-3xl transition-transform duration-400 ease hover:translate-x-2 hover:text-white"
          onClick={() => handleIconClick("mailto:itsnishantu@gmail.com")}
        />
        <MdDarkMode
          id="mode"
          className="text-3xl transition-transform duration-400 ease hover:translate-x-2 hover:text-white"
          onClick={props.toggleMode}
        />
      </div>
    </div>
  );
};

export default NavBar;
