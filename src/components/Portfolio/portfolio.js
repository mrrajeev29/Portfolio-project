import React from "react";
import pic1 from '../Photo/Screenshot 2023-10-21 205054.png'
import pic2 from '../Photo/Screenshot 2023-10-21 205544.png'
import './portfolio.css'
const Portfolio=()=>{
    return(
        <div className="port">
            <h5 className="porto">Portfolio</h5>
            <h2 className="working">Check My Wonderful Works</h2>
            <img className="imgP" src={pic1} onMouseEnter={Display1}/>
            <img className="imgP" src={pic2} onMouseEnter={Display2}/>
            <h1 id="display"></h1>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default Portfolio;


function Display1(){
    document.getElementById("display").innerHTML="In second year of my b.tech, I have done a minor project in which I made a simple wireless charger, in which I understood the basic working of electronic devices such as diode, MOSFET, capacitor. I also learnt the concept of electromagnetic induction.";
}
function Display2(){
    document.getElementById("display").innerHTML="I had made a ticketing website for a club event in very limited amount of time. Through which the participants can pay money and get tickets for the college level event.";
}