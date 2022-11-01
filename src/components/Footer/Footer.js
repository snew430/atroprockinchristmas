import React from 'react';
import './Footer.scss';
import { BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <BsTwitter className="icon" />
      </a>
      <a href="mailto:">
        <MdEmail className="icon" />
      </a>
    </div>
  );
};

export default Footer;
