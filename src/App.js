import React, { useState } from 'react';
import Nav from './components/Layout/Nav';
import Home from './components/Home/index';
import Footer from './components/Layout/Footer';
import Modal from './components/Modal';

const App = () => {
  const [splashMode, setSplashMode] = useState(true);
  const [canScroll, setCanScroll] = useState(false);
  const [navbarGhost, setNavbarGhost] = useState(true);
  const [modalProps, setModalProps] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const endSplashMode = () => {
    setSplashMode(false);
    setCanScroll(true);
  };
  const hideModal = () => setModalOpen(false);
  const openModal = state => {
    setModalOpen(true);
    setModalProps(state);
  };

  return (
    <div className={`scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800 h-screen ${canScroll ? 'overflow-auto' : 'overflow-hidden'}`} style={{ scrollBehavior: 'smooth' }}>
      <Nav transparent={navbarGhost} isHidden={splashMode} />

      <Home endSplashMode={endSplashMode} setNavbarGhost={setNavbarGhost} openModal={openModal} />

      <Modal value={modalProps} isOpen={modalOpen} hide={hideModal} />

      <Footer />
    </div>
  );
};

export default App;
