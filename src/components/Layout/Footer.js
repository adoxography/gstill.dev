import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from '../ContactForm';

const SocialLink = ({ name, href, cls }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-2" aria-label={name}>
    <i className={`fab ${cls}`} />
  </a>
);

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired
};

const Footer = () => (
  <footer id="footer" className="bg-gray-900 text-center pt-20 pb-10">
    <p className="text-xl mb-8 text-gray-300">
      Want to get ahold of me? Send me a message!
    </p>

    <ContactForm />

    <ul className="flex justify-center mt-16 text-2xl">
      <li className="mx-2">
        <SocialLink
          name="Github"
          href="https://github.com/adoxography"
          cls="fa-github"
        />
      </li>

      <li className="mx-2">
        <SocialLink
          name="LinkedIn"
          href="https://www.linkedin.com/in/graham-still-a4ab141a2/"
          cls="fa-linkedin"
        />
      </li>
    </ul>
  </footer>
);

export default Footer;
