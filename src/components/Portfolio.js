import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import pizza from '../images/pizza.png'
import wow_sh from '../images/wow-shop.png'


export const Portfolio = () => {

  return (
      <div className="portfolio">
          <h1 className="portfolio-header">Portfolio</h1>
        <div className="projects">
          <div className="wow-div">
              <img className="wow-pr" src={ wow_sh } alt="Preview of WOW_co e-commerce site"/>
                <div className= "view-proj">
                  <a href="https://wow-co.herokuapp.com/" target="_blank" rel="noopener noreferrer">View</a>
                  <a href="https://github.com/maycie-morris/wow-co" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              <h5>E-Commerce Website</h5>
              <p>Under Construction <br /> A shop made for a locally owned company using React Redux, MongoDB, and AWS.</p>
            </div>
            <div className="pizza-div">
              <img className="pizza-pr" src={ pizza } alt="Preview of pizza ordering website" />
                <div className= "view-proj">
                  <a href="https://pizza-application.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
                  <a href="https://github.com/maycie-morris/web-sprint-challenge-single-page-applications" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              <h5>Project done through Lambda School</h5>
                <p>Utilizes React, Routing, and Forms <br />
                Form is styled using Material-UI</p>
            </div>
        </div>
      </div>
  );
}