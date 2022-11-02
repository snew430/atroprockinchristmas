import React from 'react';
import './Home.scss';
import logo from '../../assets/images/TropRockLogo.png';
import sponsors from '../../info/sponsorInfo';
import musicians from '../../info/musicianInfo';
import { Link } from 'react-router-dom';

// import Footer from '../Footer/Footer';

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

          <p className="info-text red-card">
            Buckle in and join John Patti Sr. for a two-hour trip to beaches,
            tiki bars, and holiday parties. There will be plenty of Trop Rock
            tunes along the way from some of your favorite artists like current
            Coral Reefers Peter Mayer, Doyle Grisham, Nadirah Shakor and
            original Coral Reefer Roger Bartlett. We will even go south of
            border with Brent Burns and mix up a batch of gumbo with The Sauce
            Boss.
          </p>

          <p className="info-text green-card">
            A tasty gift idea! Vaccaro's Italian Pastry Shop has created a
            "sweet treat" exclusively for listeners of "A Trop Rockin'
            Christmas" and your generosity this holiday season will get you a
            pound of these cannoli-flavored palm tree cookies, while supporting
            R-O-C Park, a very special place in Madeira Beach, Florida. R-O-C
            Park is the official charity of Kitty and Melanie of Drop Dead
            Dangerous, and dedicated to the remembrance of children's lives lost
            too soon.
            <br />
            <Link as={Link} to="/cookie">
              <span className="link-text">Details HERE</span>
            </Link>
            .
          </p>

          <h3>Trop Rock artists featured this year include:</h3>

          <div className="app__flex musicians-list">
            {musicians.map((musician) => (
              <li>{musician}</li>
            ))}
          </div>

          <p className="info-text green-card">
            We also take you across the country at Christmas to visit with some
            of the people who make it possible for us to enjoy Trop Rock music
            like Dr. Joe Thornhill in Chicago, The Lake Shark Parrott Head Club
            in Florida, and Bill Connolly. He will take us behind the scenes at
            the annual “Music On The Bay” in Tampa.
          </p>

          <h3 className="funky">Plus... Parrothead Christmas confessions!</h3>

          <h3>
            Grab your boat drink, slip into your flip flops, and don't forget
            your passport.
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

        <h3>A very special thank you to our sponsors</h3>
        <div className="sponsor-links">
          {sponsors.map((sponsor) =>
            sponsor.logo ? (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="sponsor-link"
                style={{
                  backgroundImage: `url(${sponsor.logo})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                {' '}
              </a>
            ) : (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                className="sponsor-link"
                rel="noreferrer"
              >
                {sponsor.name}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
