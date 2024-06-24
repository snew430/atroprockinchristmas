import React from 'react';
import './Home.scss';
import logo from '../../assets/images/TropRockLogo.png';

const Home = () => {
  return (
    <div id="home">
      <div className="background">
        <div className="app__flex">
          <img src={logo} alt="trop rock christmas logo" className="logo"></img>
        </div>

        <div>
          <p className="info-text">
            From the California Coast to the Florida Keys and beyond...
            <br />
            It's a Trop Rockin' Christmas, exclusively on Radio Trop Rock!
          </p>

          <h3> Merry Christmas everyone! </h3>

          <div className="schedule green-card">
            2023 Schedule
            <ul>
              <li>Thursday, November 23, 2pm CENTRAL (Thanksgiving Day)</li>
              <li>Friday, November 24, 6pm CENTRAL (Black Friday)</li>
              <li>Monday December 4 9pm CENTRAL</li>
              <li>Tuesday, December 12, 9pm CENTRAL</li>
              <li>Wednesday, December 20, 9pm CENTRAL</li>
              <li>Saturday, December 23, 3am CENTRAL</li>
              <li>Saturday, December 23, 9am CENTRAL</li>
              <li>Sunday, December 24, 6pm CENTRAL (Christmas Eve)</li>
              <li>Monday, December 25, 3am CENTRAL (Christmas Day)</li>
              <li>Monday, December 25, 2pm CENTRAL (Christmas Day)</li>
            </ul>
          </div>

          <p className="info-text red-card">
            Buckle in and join John Patti Sr. for a two-hour trip to beaches,
            tiki bars, and holiday parties. There will be plenty of Trop Rock
            holiday tunes along the way from some of your favorite Trop Rock
            artists like Jim Morris, The Wheeland Brothers, Carrie Welling, Eric
            Erdman, Paul Overstreet, Isabella Stefania, John Patti, Coley
            McCabe, Donny Brewer, and of course we will pay tribute to the guy
            who started it all, Jimmy Buffett.
          </p>

          <p className="info-text green-card">
            We also take you across the country to hear holiday stories from
            some of Trop Rock's popular names like Eric & Gina Babin, Thom
            Shepherd, Tall Paul & Kristie, The Travelin' Trop Rocker Glenn
            Atwell, as well as a Parrot Head who believes she was being stalked
            by a very famous member of the Coral Reefer Band. We'll spend some
            quality time with Dane Bryant who comes to the Trop Rock world after
            unforgettable years with Olivia Newton-John and Clint Black. And
            yes, we also make time for the very popular Parrot Head Christmas
            Confessions feature.
          </p>

          <h3>
            Grab your boat drink, slip into your flip flops, and bring your
            Christmas spirit.
          </h3>

          <p className="info-text">
            Check airing times exclusively at{' '}
            <a
              href="https://radiotroprock.com/"
              target="_blank"
              rel="noreferrer"
            >
              radiotroprock.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
