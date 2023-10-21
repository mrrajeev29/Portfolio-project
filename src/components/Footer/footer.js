import React from "react";
import fbicon from '../Photo/facebook-icon.png'
import git from '../Photo/github-icon-x.png'
import ig from '../Photo/instagram.png'
import ln from '../Photo/linkedin-icon-logo-png-transparent.png'
import './footer.css'
const Footer=()=>{
    return(
        <div className="foot">
        <a href="https://github.com/Aman-mishra5921" target="_blank"><img src={git} alt="Github" className="link" id="i1"/></a>
        <a href="https://www.facebook.com/amanmishra.amanmishra.5458?mibextid=ZbWKwL" target="_blank"><img src={fbicon} alt="Facebook" className="link"/></a>
        <a href="https://instagram.com/amanmishra5921?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={ig} alt="Instagram" className="link"/></a>
        <a href="https://www.linkedin.com/in/aman-kumar-mishra-81811a221/" target="_blank"><img src={ln} alt="Linkedin" className="link"/></a>
    </div>
    )
}
export default Footer