import './About.scss';
import AboutCard from '../AboutCard/AboutCard';
import info from '../../info/aboutInfo';
import studio from '../../assets/images/studio.jpg';
import trmaAward from '../../assets/images/TRMAaward.jpg';

const About = () => {
  return (
    <div id="about">
      <div className="background">
        <h2 className="app__flex">
          From the Keys to California...
          <br />
          It's a Trop Rockin' Christmas!
        </h2>
        <img className='award-image' src={trmaAward} alt="" />
        <div className="studio-content">
          <img src={studio} alt="studio"></img>
          <p className="info-text">
            A two-hour coast to coast radio broadcast all about beaches, tiki
            bars, boat drinks, flip flops, family, and friends exclusively on
            the multi-award-winning Radio Trop Rock.{' '}
            <a
              href="https://radiotroprock.com/"
              target="_blank"
              rel="noreferrer"
            >
              Radiotroprock.com
            </a>{' '}
            is Santa's Internet home for the holidays!
            <br />
            We blend the sounds of the season from your favorite Trop Rock
            artists with Christmas memories, fascinating stories, and holiday
            greetings.
            <br />
            John Patti Sr. has traveled to various parts of the U.S. to track
            down never-before-told tales from your favorite Trop Rock artists
            and their fans.
            <br />
            "A Trop Rockin' Christmas" is in its fourth year of production and
            has been nominated several times for "Best Recorded Radio Show" for
            the annual Trop Rock Music Association (TRMA) awards.
          </p>
        </div>

        <h2 className="secondary app__flex"> Meet Your Hosts</h2>
        <div className="hosts">
          {info.map((person) => (
            <AboutCard key={person.title} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
