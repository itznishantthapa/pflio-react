import React from 'react'
import { FaGithub ,FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

function Socials() {
  return (
    <div>
        
        <div id="socials-container" className="observed">
            <div id="right-container">

                <div id="instagram-id" className="R-apps">
                    <div id="instagram" className="img-background"><FaInstagram/></div>
                    <div id="text">
                        <div id="up-text">
                            <h1>instagram</h1>
                        </div>
                        <div className="down-text">
                            <h4>Let's connect and share our journeys!</h4>
                        </div>
                    </div>
                </div>



                <div id="facebook-id" className="R-apps">
                    <div id="facebook" className="img-background"><FaFacebook/>
                    </div>
                    <div id="text">
                        <div id="up-text">
                            <h1>facebook</h1>
                        </div>
                        <div className="down-text">
                            <h4>Let's connect and share our journeys!</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="left-container">

                <div id="github-id" className="L-apps">
                    <div id="github" className="img-background"><FaGithub/></div>
                    <div id="text">
                        <div id="up-text">
                            <h1>github</h1>
                        </div>
                        <div className="down-text">
                            <h4>You can see my projects here!</h4>
                        </div>
                    </div>
                </div>

                <div id="twitter-id" className="L-apps">
                    <div id="twitter" className="img-background"><FaTwitter/></div>
                    <div id="text">
                        <div id="up-text">
                            <h1>twitter</h1>
                        </div>
                        <div className="down-text">
                            <h4>Let's connect and share our journeys!</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Socials