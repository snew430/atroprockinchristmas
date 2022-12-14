import React from 'react';
import baking from '../../assets/images/baking.jpeg';
import cookie from '../../assets/images/cookie.jpeg';
import Form from '../Form';
import video from '../../assets/videos/cookie.mov'
import './Cookie.scss';

const Cookie = () => {
  return (
    <div id="cookie">
      <div className="background">
        <h2 className="head-text">Ahhhh.... The Cookies</h2>
        <p className="info-text">
          You can support our fundraiser by buying cookies!
        </p>
        <p className="cookie-text">
          Colorful palm tree cookies with an irresistable flavor of a cannoli.
          You won't be able to stop at one!
        </p>

        <p className="cookie-text">
          Check out more baked goods at
          <br />
          <a
            href="https://www.vaccarospastry.com/"
            target="_blank"
            rel="noreferrer"
          >
            Vaccaro’s Italian Pastry Shop
          </a>
        </p>
        <div className="images">
          <img className="joe" src={ baking } alt="joe baking cookies" />
          <div id="video-border">
            <video id="video-screen" controls width="800" height="600" name="Baking cookies">
              <source src={ video } />
            </video>
          </div>
          <img className="joe" src={ cookie } alt="palm tree cookie" />
        </div>
        <p className="charity-text">
          Cookies are sold by the pound, and all of the proceeds go to the
          organization:
          <br />
          “Remember Our Children.”
          <br />
          Their mission is to help parents who have lost children to tragedy.
          <br />
          <a href="http://www.rocpark.com/" rel="noreferrer" target="_blank">
            Click Here to Visit the R.O.C. Website
          </a>
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Cookie;
