import React from "react";
import './service.css'
import pic1 from '../Photo/Screenshot 2023-10-21 194737.png'
import pic3 from '../Photo/Screenshot 2023-10-21 200008.png'
import pic4 from '../Photo/Screenshot 2023-10-21 200208.png'
import pic2 from '../Photo/Screenshot 2023-10-21 195734.png'
const Service=()=>{
    return (
        <div className="serv">
            <h5 className="titleS">Service</h5>
            <h2 className="workS">What I do</h2><br/>
            <h6 className="paraS">I am interested in group working, problem solving, I am person with high skill in Electronic System Designing,<br/>Digital System Design and in verilog Programming.
I am also interested in Computer Science Field with skillful knowledge in Programming<br/>and also in Frontend Development.</h6>
            <img src={pic1} alt="photo" className="pic"/>
            <img src={pic3} alt="photo" className="pic"/>
            <br/>
            <img src={pic2} alt="photo" className="pic"/>
            <img src={pic4} alt="photo" className="pic"/>
            <h5 className="titleS">Skills</h5>
            <h2 className="workS">Why Choose me</h2><br/><br/>
            <h6 className="paraS">You should choose me for your project because I have a unique set of skills and experiences that make me stand out from the rest.<br/>I am highly dedicated to deliver quality work and meeting deadlines, and I am always willing<br/>to go above and beyond to ensure client satisfaction.</h6>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export  default Service;