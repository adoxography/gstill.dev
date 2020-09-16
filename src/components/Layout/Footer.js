import React from 'react';

const SocialLink = ({ name,  href, cls }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-2" aria-label="name">
    <i className={`fab ${cls}`}></i>
  </a>
);

const Footer = () => (
  <footer className="bg-gray-900 text-center py-10 text-2xl">
    <a href="mailto:graham@gstill.dev" className="font-semibold">
      graham@gstill.dev
    </a>

    <ul className="flex justify-center mt-8">
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
