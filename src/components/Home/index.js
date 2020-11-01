import React from 'react';
import PropTypes from 'prop-types';

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

Home.propTypes = {
  endSplashMode: PropTypes.func.isRequired,
  setNavbarGhost: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

export default Home;
