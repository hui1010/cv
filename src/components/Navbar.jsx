import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {IconContext, SiGithub, SiLinkedin, SiGmail} from 'react-icons/si'


import picture from '../images/picture.jpg'
import Footer from './Footer'

const Navbar = () => {
    const location = useLocation()

    return (
        <div className="navbar">
            <div className="container">
                <div className="picture">
                    <img src={picture} alt=""/>
                </div>
                <h2>Huiyi <br/> Skårner</h2>
                <ul className="menu">    
                    <li><NavLink to="/" exact activeClassName="selected">Experience</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="selected">Skills</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="selected">Projects</NavLink></li>
                    <li><NavLink to="/personal_letter" activeClassName="selected">Personal Letter</NavLink></li>
                    <p className="social-icons">
                        <a className="social-icon" href="https://github.com/hui1010" target="_blank">
                        <SiGithub size="1.5rem" color="white" />
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/in/sk%C3%A5rner-huiyi-b2345b1b9/" target="_blank">
                           <SiLinkedin  size="1.5rem" color="#0072b1"/> 
                        </a>
                        <a className="social-icon" href="mailto:huiyi.skarner@gmail.com" target="_blank">
                           <SiGmail className="social-icon" size="1.5rem" color="#C5221E"/> 
                        </a>
                        
                    </p>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Navbar
