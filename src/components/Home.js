import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';

import Me from '../images/Maycie.jpg'
import Baby from '../images/baby.jpg'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javascript.png'
import rct from '../images/react.png'
import node from '../images/node.png'


export const Home = (props) => {
    // const history = useHistory();

    // const routeToContact = event => {
    //     event.preventDefault();
    //     props.history.push('/contact')
    // }

    return (
        <>
        <div className="container">
            <img className="me" src={ Me } alt="Maycie Morris" />
                <div className="about-div">
                    <h3>Welcome</h3>
                    <h2>Full Stack <br /> Web Developer</h2>
                    <p>Get to know me</p>
                    <Button className="home-button" variant="outlined">
                        <a href="mailto: maycie.morris@gmail.com">Contact Me</a>
                    </Button>
                </div>
        </div>
        <div className="ido">
                        <img className="html" src= {html} alt="HTML logo" />
                        <img className="css" src= {css} alt="CSS logo" />
                        <img className="js" src= {js} alt="Javascript logo" />
                        <img className="react" src= {rct} alt="React logo" />
                        <img className="node" src= {node} alt="Node logo" />
                    </div>
        <div className="aboutme">
            <h4>About Me</h4>
                <div className="about-container">
                    <p>My name is Maycie Morris, I’m a 28 year old living in Portland, CT. I’m a first time mother to my son Tristan who I share with my fiancé, Eric, and we also have a 6 year old cat named Oskar.
                    <br /><br />
                    I graduated high school in 2010 and followed up with an Associates Degree in General Studies through Middlesex Community College in 2016. I am currently working my way through the Full Stack Web Development course through Lambda School which has been such an amazing experience and makes me super excited for my future in web development.
                    <br /><br />
                    My initial love for coding came at an early age when I tinkered around with layouts on MySpace and Neopets, although I never thought about pursuing a career in code (or really understood that it could be a career). After having my son, I had a huge desire to do something that could create a more secure future for my family and came across Lambda School. I am so excited to gain an endorsement through them and begin a career that not only provides security for me and my family, but is also something that I enjoy. My skillset now includes HTML/CSS, React, React Redux, Context API, Cypress, Jest, Node.js, as well as Python.</p>
                    <img className="baby" src= { Baby } alt="Maycie Morris with her son" />
                </div>
        </div>
        <div className="footer">
            <p>Follow me on social media:</p>
            <br /><br />
            <div className="footer-socials">
                <SocialIcon url="https://github.com/maycie-morris" />
                <SocialIcon url="https://www.linkedin.com/in/mayciemorris/" />
                <SocialIcon url="https://www.facebook.com/maycie.morris/" />
                <SocialIcon url="https://www.instagram.com/mnicoel/" />
            </div>
        </div>
        </>
    )
}