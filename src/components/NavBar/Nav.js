import React ,{useState} from "react";
import './Nav.css'
import navlogo from '../Photo/2516393.png'
import menu from '../Photo/image-removebg-preview.png'
import { Link } from "react-scroll";
const NavBar=()=>{
    const[showMenu,setShowMenu]=useState(false);
    return(
        <nav className="navbar">
            <img className="navlogo" src={navlogo} alt="logo"/>
            <div className="nav">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navLink" href="#"><h6>Home</h6></Link>
                <Link activeClass="active" to='container' spy={true} smooth={true} offset={-100} duration={500} className="navLink" href="#"><h6>About</h6></Link>
                <Link activeClass="active" to='serv' spy={true} smooth={true} offset={-100} duration={500} className="navLink" href="#"><h6>Service</h6></Link>
                <Link activeClass="active" to='port' spy={true} smooth={true} offset={-100} duration={500} className="navLink" href="#"><h6>Portfolio</h6></Link>
                <Link activeClass="active" to='Dcon' spy={true} smooth={true} offset={-100} duration={500} className="navLink" href="#"><h6>Contact</h6></Link>
            </div>
            <button className="navbtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}><h6>Hire me</h6></button>


            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display : showMenu?'flex':'none'}}>
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Home</Link>
                <Link activeClass="active" to='container' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(!false)}>About</Link>
                <Link activeClass="active" to='serv' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(!false)}>Service</Link>
                <Link activeClass="active" to='port' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Portfolio</Link>
                <Link activeClass="active" to='Dcon' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Contact</Link>
            </div>

        </nav>
    )
}

export default NavBar