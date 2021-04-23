import React from 'react'
import {SiJava, SiSpring, SiHtml5, SiCss3, SiJavascript, SiJquery, SiReact, SiWordpress, SiRedux, SiBootstrap, SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

import Header from './Header'

const Projects = () => {
    return (
        <>
        <Header text="Projects" />
        <div className="projects">
        <div className="project backend">
            <div className="project-inner">
                <div className="front">
                    <h2>Backend</h2>
                    <p className="icons"><SiJava /> <SiSpring /> <GrMysql /></p>
                    </div>
                <div className="back">
                    <h4>Book Lender System</h4>
                    <p className="info">A system for lending and borrowing books. System contains three entities - book, book loaner and loan.
                        System is designed with Spring boot framework, MVC pattern, and connected to database MySQL.
                        RESTful APIs are provided for further frontend projects.
                    </p>
                    <a href="https://github.com/hui1010/book-lender-REST-exercise" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project backend">
            <div className="project-inner">
                <div className="front">
                    <h2>Backend</h2>
                    <p className="icons"><SiJava /> <SiSpring /> <GrMysql /></p>
                    </div>
                <div className="back">
                    <h4>Recipe System</h4>
                    <p className="info"> A recipe system that contains four entities - ingredients, recipe, recipe ingredients, and recipe category. 
                    Entities are mapped to database using ORM.
                    Basic CRUD operations are implemented through Spring Data JPA. 
                    </p>
                    <a href="https://github.com/hui1010/jpa_recipe" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project backend">
            <div className="project-inner">
                <div className="front">
                    <h2>Backend</h2>
                    <p className="icons"><SiJava /> <SiSpring /> <GrMysql /></p>
                    </div>
                <div className="back">
                    <h4>Student Management System</h4>
                    <p className="info">A student management system using Spring framework - a combination of annotations and Java configured beans.
                    The system contains two embedded models - student and course, CRUD operations are provided for both models with rigorous logic.
                    </p>
                    <a href="https://github.com/hui1010/school_management" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project fullstack">
            <div className="project-inner">
                <div className="front">
                    <h2>Full Stack</h2>
                    <p className="icons"><SiJava /> <SiSpring /> + <GrMysql /> + <SiReact /> <SiHtml5 /> <SiCss3 /></p>
                </div>
                <div className="back">
                    <h4>Campaign Tracker</h4>
                    <p className="info">Backend is built with Java Spring Boot, frontend is built with React.
                        Besides basic CRUD operations users can also search among campaigns, click on shopping item to see the matching campaigns and more.
                    </p>
                    <a href="https://campaign-tracker-huiyi.herokuapp.com/" target="_blank">Check here!</a>
                    <p className="note">* Notice that the first time visit may take some time as Heroku wakes up, please be patient and wait.</p>
                </div>
            </div>
        </div>
        <div className="project frontend">
            <div className="project-inner">
                <div className="front">
                    <h2>Frontend</h2>
                    <p className="icons">
                        <SiHtml5 /> <SiCss3 /> <SiJavascript />
                    </p>
                </div>
                <div className="back">
                    <h4>Sokoban</h4>
                    <p className="info">My very first JavaScript program. A small push box game built with vanilla JavaScript</p>
                    <a href="https://sokoban-huiyi.herokuapp.com/" target="_blank">Check here!</a>
                    <p className="note">* Notice that the first time visit may take some time as Heroku wakes up, please be patient and wait.</p>

                </div>
            </div>
        </div>
        
        <div className="project frontend">
            <div className="project-inner">
                <div className="front">
                    <h2>Frontend</h2>
                    <p className="icons">
                        <SiHtml5 /> <SiCss3 /> <SiBootstrap /> <SiJavascript /> <SiJquery /> <SiPhp /> 
                    </p>
                </div>
                <div className="back">
                    <h4>Traccar UI</h4>
                    <p className="info">
                        The webpage for displaying and operating information of user's GPS device.
                        Using JavaScript promise to fetch data from APIs provided by Traccar system - an open source backend GPS system, and jQuery to build the pages.
                        Reset password function is built with PHP.
                    </p>
                </div>
            </div>
        </div>
        <div className="project wordpress">
            <div className="project-inner">
                <div className="front">
                    <h2>WordPress</h2>
                    <p className="icons"><SiWordpress /> <SiCss3 /> <SiJavascript /></p>
                </div>
                <div className="back">
                    <h4>kattgps24.se</h4>
                    <p className="info">
                        SEO blog made with GeneratePress theme.
                    </p>
                    <a href="https://kattgps24.se/" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project wordpress">
            <div className="project-inner">
                <div className="front">
                    <h2>WordPress</h2>
                    <p className="icons"><SiWordpress /> <SiCss3 /> <SiJavascript /></p>
                </div>
                <div className="back">
                    <h4>trygghetslarm.se</h4>
                    <p className="info">
                        SEO blog made with GeneratePress theme.
                    </p>
                    <a href="https://trygghetslarm.se/" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project wordpress">
            <div className="project-inner">
                <div className="front">
                    <h2>WordPress</h2>
                    <p className="icons"><SiWordpress /> <SiCss3 /> <SiJavascript /></p>
                </div>
                <div className="back">
                    <h4>gofinder.se</h4>
                    <p className="info">
                        SEO blog made with GeneratePress theme.
                    </p>
                    <a href="https://gofinder.se/" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
        <div className="project react">
            <div className="project-inner">
                <div className="front">
                    <h2>React Redux</h2>
                    <p className="icons"><SiReact /> + <SiRedux /></p>
                </div>
                <div className="back">
                    <h4>Coming soon...</h4>
                </div>
            </div>
        </div>
        <div className="project react">
            <div className="project-inner">
                <div className="front">
                    <h2>React Native</h2>
                    <p className="icons"><SiReact /></p>
                </div>
                <div className="back">
                    <h4>Knowledge management app</h4>
                    <p>A mobil app for the Malmö company Knologram.  The app navigates among several screens and can fetch and dynamically display different types of data (text, video, picture, etc) from APIs build by WordPress. 
                    </p>
                    <a href="https://expo.io/@hui1010/projects/KonwledgeManagement" target="_blank">Check here!</a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Projects
