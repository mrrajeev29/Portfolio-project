import React from "react";
import "./intro.css"
import bg from '../Photo/image-removebg-preview (2).png'
const intro=()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">hello, I'm</span>
                <span className="nameDes">Aman Kumar<br/>Mishra</span>
                <span className="nameMob">Aman<br/>Kr<br/>Mishra</span>
                <span className="work">System Designer</span>
                <table>
                    <tr>
                        <td><button className="btn1" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});}} ><h6>Hire Me</h6></button><a href="https://drive.google.com/file/d/1bUQ99w_--U8VRgEr163a582sBUCE4ynl/view?usp=drivesdk" target="_blank"><button type="button" className="btn2"><h6>Download CV</h6></button></a></td>
                    </tr>
                </table>
                
                
            </div>
            <img src={bg} alt="Background Image" className="bg"/>
        </section>
    )
}
export default intro