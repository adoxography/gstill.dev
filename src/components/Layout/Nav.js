import React, { useState } from 'react';
import Logo from '../Logo';

const NavLink = ({ href, children, onClick, hidden }) => (
  <a
    className="font-bold text-4xl text-gray-100 md:text-5xl"
    href={href}
    onClick={onClick}
    tabIndex={hidden ? -1 : 0}
    aria-hidden={hidden}
  >
    {children}
  </a>
);

const NavList = ({ open, onNavigate }) => (
  <nav
    className={`fixed bg-gray-700 text-gray-100 top-0 bottom-0 right-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${open ? '' : 'translate-x-full'}`}
  >
    <ul className="flex flex-col h-full justify-evenly items-center">
      <li><NavLink href="#home" onClick={onNavigate} hidden={!open}>Home</NavLink></li>
      <li><NavLink href="#services" onClick={onNavigate} hidden={!open}>My services</NavLink></li>
      <li><NavLink href="#about" onClick={onNavigate} hidden={!open}>About me</NavLink></li>
      <li><NavLink href="#work" onClick={onNavigate} hidden={!open}>My work</NavLink></li>
    </ul>
  </nav>
);

const Nav = ({ isHidden, transparent }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleNavigate = () => setNavOpen(false);

  return (
    <header className={`flex justify-between fixed w-full z-40 transition-all duration-500 ease-in-out ${isHidden ? 'opacity-0' : 'opacity-100'} ${transparent ? 'p-4' : 'p-2 bg-gray-800'}`}>
      <div className="logo">
        <Logo className="w-8 fill-current" />
      </div>

      <button
        className={`p-2 z-50 ${navOpen ? 'nav-open' : ''}`}
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger" />
      </button>

      <NavList open={navOpen} onNavigate={handleNavigate} />
    </header>
  );
};

export default Nav;
