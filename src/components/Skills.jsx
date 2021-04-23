import React from 'react'
import {SiJava, SiSpring, SiHtml5, SiCss3, SiJavascript, SiJquery, SiReact, SiBootstrap} from 'react-icons/si'
import {IconContext} from 'react-icons'
import Header from './Header'


const Skills = () => {
    return (
        <>
        <Header text="Skills" />
        <div className="skills">    
            <div className="skill">
                <div>
                    <h4 className="skill-name">Java SE & Java EE</h4>
                </div>
                <div className="skill-description">
                    <p>JAVA Class Design, Access Modifiers and Object concept</p>
                    <p>Overloading and overriding</p>
                    <p>Handling errors and exceptions</p>
                    <p>Generics and Lambda expressions</p>
                    <p>Unit-testing and TDD</p> 
                    <p>JSP</p>
                    <p>RESTful API</p>
                    <p>Spring</p>
                    <p>MVC design pattern</p>
                </div>
            </div>
            <div className="skill">
                <div>
                    <h4 className="skill-name">Frontend</h4> 
                </div>
                <div className="skill-description">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>jQuery</p>
                    <p>React</p>
                    <p>React Native</p>
                    <p>Redux</p>
                </div>
            </div>
            <div className="skill">
                <div>
                    <h4 className="skill-name">Database</h4> 
                </div>
                <div className="skill-description">
                    <p>SQL</p>
                    <p>Design of relational databases and tables</p>
                    <p>JDBC</p>
                    <p>JPA</p>
                </div>
            </div>
        </div>
    </>    
    )
}

export default Skills
