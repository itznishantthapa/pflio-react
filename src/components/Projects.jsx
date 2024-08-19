import React from "react";


function Projects() {
  return (
    <div id="projects" className="observed">
      <div id="upper-projects">
        <div className="project">
          <img src="Apple-Weather-app.webp" alt="Project Image 1" />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            A Python terminal app providing real-time weather updates including
            temperature, time, and humidity for specified locations.
          </div>
        </div>
        <div className="project">
          <img
            src="Best Password Managers Gear GettyImages-1408198405.webp"
            alt="Project Image 2"
          />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            <p>
              A Python terminal app for securely managing user logins allowing
              creation of usernames, passwords, login,and password resets
            </p>
          </div>
        </div>
        <div className="project">
          <img
            src="Data-encryption-decryption-process.png"
            alt="Project Image 2"
          />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            <p>
              A Python terminal app for secure text encryption and decryption,
              ensuring data confidentiality and reliable information retrieval.
            </p>
          </div>
        </div>
      </div>

      <div id="lower-projects">
        <div className="project">
          <img src="Rock-paper-scissors.svg.png" alt="Project Image 2" />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            <p>
              Python game where players face the computer in
              rock-paper-scissors; losing triggers a 5-second countdown before
              the computer turns off.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="chatbot.jpg" alt="Project Image 2" />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            <p>
              HTML/CSS/JS proto-type chatbot which can tell you facts, jokes,
              and do calculations, and also date/time info interactions.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="Screenshot 2024-07-05 155700.png" alt="Project Image 2" />
          <i className="info-icon" onclick="showDescription(this)">
            <i className="fa-solid fa-info"></i>
          </i>
          <div className="project-description">
            <p>
              Web based game of TIC-TAC-TOE , player can pick his/her desire
              color to fill the boxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
