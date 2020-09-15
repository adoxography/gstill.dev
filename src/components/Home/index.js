import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';

const Home = ({ setCanScroll, setNavbarGhost, openModal }) => (
  <>
    <Header setCanScroll={setCanScroll} setNavbarGhost={setNavbarGhost} />
    <Services />
    <About />
    <Portfolio openModal={openModal} />
  </>
);

export default Home;