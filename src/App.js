import React, { useState } from 'react';
import Nav from './components/Layout/Nav';
import Home from './components/Home/index';
import Footer from './components/Layout/Footer';
import Modal from './components/Modal';

const App = () => {
  const [canScroll, setCanScroll] = useState(false);
  const [navbarGhost, setNavbarGhost] = useState(true);
  const [modalProps, setModalProps] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const hideModal = () => setModalOpen(false);
  const openModal = state => {
    setModalOpen(true);
    setModalProps(state);
  };

  return (
    <div className={`h-screen ${canScroll ? '' : 'overflow-hidden'}`}>
      <Nav transparent={navbarGhost} />

      <Home setCanScroll={setCanScroll} setNavbarGhost={setNavbarGhost} openModal={openModal} />

      <Modal value={modalProps} isOpen={modalOpen} hide={hideModal} />

      <Footer />
    </div>
  );
};

export default App;