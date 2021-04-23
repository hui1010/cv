import React from 'react'
import Header from './Header'
import minifinderLogo from '../images/minifinder-logo.png'
import lexiconLogo from '../images/lexicon-logo.png'
import liuLogo from '../images/liu-logo.png'
import lnuLogo from '../images/lnu-logo.png'
import miljofordonLogo from '../images/miljofordon-logo.png'
import igtLogo from '../images/igt-logo.png'
import knologramLogo from '../images/knologram-logo.png'

const Experience = () => {
    return (
        <>
        <Header text="Experience" />
        <section id="timeline">
        <ul>
            <li>
                <div>
                    <a href="https://www.knologram.com/">
                      <img src={knologramLogo} alt=""/>  
                    </a>
                    <h4>2021.4 - now</h4>
                    <h4>Mobil App Developer</h4>
                    <p>
                       A Malmö company founded by my friends. I help them in my spare time to make a mobil app using React Native. The app navigates among several screens and can fetch and dynamically display different types of data (text, video, picture, etc) from APIs built by WordPress. 
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="https://minifinder.se/">
                      <img src={minifinderLogo} alt=""/>  
                    </a>
                    <h4>2020.11 - 2021.2</h4>
                    <h4>Programmer</h4>
                    <p>
                        Worked with building SEO-blogs using Wordpress (GeneratePress theme), which gave a lot of HTML and CSS practice. At the Projects page you can find some examples of the work I did. Also learned several new things required to do the job, such as Ext.js, PHP and JQuery. I used these languages to create a stand alone system built on an open source backend, where you could log in, register, reset password by email and once you logged in you could see syncronous changes of your GPS devices and other attributes, all written in JQuery and modern JavaScript.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="https://www.lexicon.se/">
                        <img src={lexiconLogo} alt=""/>
                    </a>
                    <h4>2020.4 - 2021.3</h4>
                    <h4>System development student</h4>
                    <p>
                        Learned Java fundamentals and new features of Java 8, among other things Lambda Expressions, Time API, Collection Framework and Spring framework.
                        Big focus on proper unit testing with JUnit test. Also learned about RESTful API, Frontend related languages, tools and relational databases using SQL Workbench.
                        Used Spring boot to create RESTful APIs and full stack applications. 
                        Finished the education with certification.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="http://miljofordonsverige.se/">
                        <img src={miljofordonLogo} alt=""/>
                    </a>
                    <h4>Project Design</h4>
                    <p>
                        Planned and designed new digital services. The work involved information gathering and analysis to find strategies to help their products to the market and attract new potential customers. Worked both independently and in groups. During the process I also did some market research to give inspiration and a base for new services and products.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="https://www.igt.com/">
                        <img  src={igtLogo} alt=""/>
                    </a>
                    <h4>Game translator</h4>
                    <p>
                        Translated games and pitboss between English and Chinese on request by IGT (former Boss Media), a casino company in Växjö. 
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="https://liu.se/">
                        <img src={liuLogo} alt="" />
                    </a>
                    <h4>Master Student</h4>
                    <p>
                        Learned about how to manage natural resources, sustainability in society and digital visualization. Gained a large interest for environmental challenges in society with focus on communication and practical application.
                        Wrote my master thesis about edible insects and got awarded by konsumentverket for best thesis of the year.
                        Finished the education with certification.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <a href="https://lnu.se/">
                       <img src={lnuLogo} alt=""/>
                    </a>
                   
                    <h4>Master Student</h4>
                    <p>
                        Learned about conflict management, peace building work, sustainable development, international collaboration and negotiation.
                        Finished the education with certification.
                    </p>
                </div>
            </li>
        </ul>
    </section>
    </>
    )
}

export default Experience
