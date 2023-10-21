import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nlijssk', 'template_ox8qnmj', form.current, 'mH3Jabg6qWNj1Ntsk')
        .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Emain sent!');
            }, (error) => {
                console.log(error.text);
            });
        }; 
    return(
        <div className="Dcon" id="contact">
            <br/><br/>
            <h5 className="con">Contact</h5>
            <h2 className="touch">Get In Touch With Me</h2>
            <br/><br/><br/>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Enter Your Name" className="value" required/>
                <br/>
                <input type="email" name="from_email" placeholder="Enter Your Email" className="value" required/>
                <br/>
                <textarea name="message" placeholder="Enter Your Message" className="msg" required></textarea>
                <br/>
                <button type="submit" className="Dbtn"><h6 className="btnText">Send Message</h6></button>
            </form>
        </div>
    )
}
export default Contact;