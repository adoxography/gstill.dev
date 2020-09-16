import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';

const Home = ({ endSplashMode, setNavbarGhost, openModal }) => (
  <>
    <Header endSplashMode={endSplashMode} setNavbarGhost={setNavbarGhost} />
    <Services />
    <About />
    <Portfolio openModal={openModal} />
  </>
);

export default Home;
