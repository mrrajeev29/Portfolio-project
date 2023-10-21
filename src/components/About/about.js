import React from "react";
import './about.css'
import abt from '../Photo/Avatar-Face-PNG-Image-Transparent.png'
const About=()=>{
    return(
        <div className="container">
            <div>
                <img src={abt} alt="profile" className="proImg"/>
            </div>
            <div className="text-container">
                <h3 className="Pname">Aman Kumar Mishra</h3>
                <h5 className="domain">Electronic System Designer</h5><br/>
                <p className="para">I am interested in group working, problem solving, I am person with high skilled in Electronic System Designing, Digital System Design and in verilog Programming. <br/>
                I am also interested in Computer Science Field with skillful knowledge in Programming and also in Frontend Development.</p>
                <br/>
                <a href="https://drive.google.com/file/d/1bUQ99w_--U8VRgEr163a582sBUCE4ynl/view?usp=drivesdk" target="_blank"><button type="button" className="btn"><h6>Download CV</h6></button></a>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default About;