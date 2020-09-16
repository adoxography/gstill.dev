import React, { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/images/profile_image.jpg';

const sectionStyles = {
  gridTemplateAreas: '"img title" "img subtitle"',
  gridTemplateColumns: 'min-content max-content'
};

const subtitleStyles = {
  gridColumn: '-1/1',
  gridRow: '2'
};

const imageStyles = {
  gridArea: 'img',
  minWidth: '250px'
};

const Header = ({ endSplashMode, setNavbarGhost }) => {
  const ref = useRef();

  const [pageLoaded, setPageLoaded] = useState(false);
  const [subtitleInView, setSubtitleInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);

  useEffect(() => {
    if (window.location.hash === '') {
      setTimeout(() => {
        endSplashMode();
        setPageLoaded(true);
      }, 1500);
    } else {
      setShouldTransition(false);
      setPageLoaded(true);
      endSplashMode();
    }
  }, [endSplashMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSubtitleInView(true);
        setTimeout(() => setImageInView(true), 500);
        observer.disconnect();
      }
    }, {
      threshold: 0.9
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setNavbarGhost(entry.isIntersecting));

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, setNavbarGhost]);

  return (
    <section
      id="home"
      className={`${pageLoaded ? 'h-114 md:h-96' : 'h-screen'} flex items-center ${shouldTransition ? 'transition-all duration-700 ease-in-out' : ''}`}
      ref={ref}
    >
      <div
        className="relative md:grid my-0 mx-auto gap-4 md:w-min py-20 px-8 font-display font-light -z-10"
        style={sectionStyles}
      >
        <h1
          className="text-5xl md:text-6xl mb-1 leading-none"
        >
          Hi, I'm <strong className="block font-semibold">Graham Still.</strong>
        </h1>

        <p
          className={`md:self-start text-right relative bg-gradient-to-r from-indigo-700 to-indigo-600 mb-4 py-2 px-4 leading-none text-4xl md:-left-6 shadow text-indigo-100 w-fit md:w-full-plus-6 transform scale-x-0 transition-all duration-500 ease-in-out origin-left ${subtitleInView ? 'scale-x-100' : ''}`}
          style={subtitleStyles}
        >
          computational linguist
        </p>

        <img
          src={profileImage}
          alt="Graham Still"
          className={`shadow-lg relative z-10 h-64 transform scale-y-0 object-cover transition-all duration-500 ease-in-out origin-top ${imageInView ? 'scale-y-100' : ''}`}
          style={imageStyles}
        />
      </div>
    </section>
  );
};

export default Header;
