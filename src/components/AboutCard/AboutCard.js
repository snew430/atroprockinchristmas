import React from 'react';

import { FiMail } from "react-icons/fi";

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;
  return (
    <>
        <div className='person'>
          <img src={pic} alt={person.title}/>
          <h3><a href={`mailto:${link}`} target="_blank" rel="noreferrer">{title} <FiMail className='icon'/></a></h3>
          <p className='info-text'>{bio}</p>
        </div>
    </>
  );
};

export default AboutCard;
