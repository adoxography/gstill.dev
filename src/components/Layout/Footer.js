import React from 'react';

const SocialLink = ({ href, cls }) => (
  <a href={href} className="p-2 hover:opacity-75">
    <i className={`fab ${cls}`}></i>
  </a>
);

const Footer = () => (
  <footer className="bg-gray-900 text-indigo-600 text-center py-10 text-2xl">
    <a href="mailto:foo@bar.net" className="font-semibold hover:opacity-75">
      foo@bar.net
    </a>

    <ul className="flex justify-center mt-8">
      <li className="mx-2">
        <SocialLink href="https://github.com/adoxography" cls="fa-github" />
      </li>

      <li className="mx-2">
        <SocialLink href="https://www.linkedin.com/in/graham-still-a4ab141a2/" cls="fa-linkedin" />
      </li>
    </ul>
  </footer>
);

export default Footer;
