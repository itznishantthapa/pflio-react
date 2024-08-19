import React from "react";
import { FaJava, FaPython, FaDatabase, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiFlutter } from "react-icons/si"; // For the Flutter icon

function Progress() {
  return (
    <div id="progress-container" className="observed">
      <div id="java" className="progress-bar">
        <div className="icon">
          <FaJava />
        </div>
        <div className="progress" style={{ width: "70%" }}>
          Java 70%
        </div>
      </div>
      <div id="python" className="progress-bar">
        <div className="icon">
          <FaPython />
        </div>
        <div className="progress" style={{ width: "80%" }}>
          Python 80%
        </div>
      </div>
      <div id="sql" className="progress-bar">
        <div className="icon">
          <FaDatabase />
        </div>
        <div className="progress" style={{ width: "60%" }}>
          SQL 60%
        </div>
      </div>
      <div id="flutter" className="progress-bar">
        <div className="icon">
          <SiFlutter />
        </div>
        <div className="progress" style={{ width: "50%" }}>
          Flutter 50%
        </div>
      </div>
      <div id="html" className="progress-bar">
        <div className="icon">
          <FaHtml5 />
        </div>
        <div className="progress" style={{ width: "80%" }}>
          HTML 80%
        </div>
      </div>
      <div id="css" className="progress-bar">
        <div className="icon">
          <FaCss3 />
        </div>
        <div className="progress" style={{ width: "60%" }}>
          CSS 60%
        </div>
      </div>
      <div id="javascript" className="progress-bar">
        <div className="icon">
          <FaJs />
        </div>
        <div className="progress" style={{ width: "70%" }}>
          JavaScript 70%
        </div>
      </div>
      <div id="django" className="progress-bar">
        <div className="icon">
          <FaPython />
        </div>
        <div className="progress" style={{ width: "50%" }}>
          Django 50%
        </div>
      </div>
    </div>
  );
}

export default Progress;
