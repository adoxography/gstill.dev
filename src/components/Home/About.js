import { useEffect, useState, useRef } from 'react';
import aboutImage from '../../assets/images/about_image.jpg';

const subtitleStyle = {
  gridColumn: '1 / -1',
  gridRow: 2
};

const imgStyle = {
  gridArea: 'img'
};

const About = () => {
  const ref = useRef();

  const mediumScreen = window.innerWidth >= 768;
  const [subtitleInView, setSubtitleInView] = useState(!mediumScreen);
  const [imageInView, setImageInView] = useState(!mediumScreen);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSubtitleInView(true);
        setTimeout(() => setImageInView(true), 500);
        observer.disconnect();
      }
    }, {
      threshold: 1
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-screen-lg mx-auto py-20 px-8 md:grid gap-x-8"
      style={{ gridTemplateColumns: '1fr 200px', gridTemplateAreas: '"title img" "subtitle img" "text img"' }}
    >
      <h2
        className="text-4xl mb-2 font-semibold font-display"
        style={{ gridArea: 'title' }}
      >
        Who I am
      </h2>

      <p
        className={`text-2xl bg-gradient-to-l from-indigo-700 to-indigo-600 mb-4 py-1 px-4 relative -left-4 pl-4 shadow font-display md:w-full-plus-8 transform md:scale-x-0 origin-left ${subtitleInView ? 'md:scale-x-100' : ''} transition-all duration-500 ease-in-out`}
        style={subtitleStyle}
      >
        Computational linguist in Winnipeg
      </p>

      <div className="leading-relaxed" style={{ gridArea: 'text' }}>
        <p>
          I&apos;m a combination between a university-taught and a self-taught coder; I picked up a
          lot of theory while in university, and I&apos;ve devoted countless hours to improving my
          skills since. I enjoy making tools that improve quality of life, whether that be my own
          or someone else&apos;s. I&apos;m also deeply invested in training others to be literate
          about the technology that surrounds us, at a level that&apos;s approachable from their
          current state of understanding.
        </p>

        <p className="mt-4">
          When I&apos;m not coding (which, honestly, is pretty unusual), I enjoy watching movies
          about time travel, practicing card magic, and writing with fountain pens.
        </p>
      </div>

      <img
        src={aboutImage}
        alt="Graham Still"
        className={`block max-w-full shadow-lg relative z-10 mt-6 md:mt-0 object-cover transform md:scale-y-0 origin-top transition-all duration-500 ease-in-out h-96 ${imageInView ? 'md:scale-y-100' : ''}`}
        style={imgStyle}
      />
    </section>
  );
};

export default About;
