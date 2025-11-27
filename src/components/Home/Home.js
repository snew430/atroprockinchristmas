import React from 'react';
import './Home.scss';
import logo from '../../assets/images/TropRockLogo.png';
import prestigeLogo from '../../assets/images/prestigeLogo.jpg';
import schedule from '../../assets/images/troprockxmasschedule.jpeg';
import schedulemin from '../../assets/images/troprockxmasschedulemin.jpeg';

const Home = () => {
  return (
    <div id='home'>
      <div className='background'>
        <div className='app__flex'>
          <img src={logo} alt='trop rock christmas logo' className='logo'></img>
        </div>

        <div>
          <div className='header'>
            <p className='header-text'>
              From the California Coast to the Florida Keys and beyond...
              <br />
              It's a Trop Rockin' Christmas, presented by{' '}
              <a href='https://prestigetravelvacations.com/' target='_blank' rel='noreferrer'>
                Prestige Travel Vacations
              </a>{' '}
              and honored with the 2024 TRMA award for "Best Radio Program, Recorded."{' '}
            </p>
            <a href='https://prestigetravelvacations.com/' target='_blank' rel='noreferrer'>
              <img className='header-img' src={prestigeLogo} alt='' />
            </a>
          </div>

          <h3> Merry Christmas everyone! </h3>

          <div className='schedule green-card'>
            <img src={schedule} alt='trop rock christmas schedule' className='schedulepic'></img>
            <img src={schedulemin} alt='trop rock christmas schedule' className='schedulepicmin'></img>
          </div>

          <p className='info-text red-card'>
            Buckle in and join John Patti Sr. for a two-hour trip to beaches, tiki bars, and holiday parties. There will be plenty of Trop
            Rock holiday tunes along the way from some of your favorite Trop Rock artists like Peter Mayer, Brent Burns, The Wheeland
            Brothers, Carrie Welling, and of course we will pay tribute to the guy who started it all, Jimmy Buffett.
          </p>

          <p className='info-text green-card'>
            We will also take you across the country to hear holiday stories from some of Trop Rock's popular names like Will Kimbrough, Jim
            Mayer, Jeff Pike, Buddy Roussel of Buddy's Backyard, as well as Kristin McFadden, a Parrot Head who drew inspiration from Peter
            Mayer's Stars & Promises tour to write a children's book. And yes, we will also make time for the very popular Parrot Head
            Christmas Confessions feature.
          </p>

          <h3>Grab your boat drink, slip into your flip flops, and bring your Christmas spirit.</h3>

          <p className='info-text'>
            Check airing times exclusively at{' '}
            <a href='https://radiotroprock.com/' target='_blank' rel='noreferrer'>
              radiotroprock.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
