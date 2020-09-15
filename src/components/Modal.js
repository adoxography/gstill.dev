import React, { useEffect, useRef, useState } from 'react';

import Button from './Button';

const tagLinks = {
  'Laravel': 'https://laravel.com',
  'PHP': 'https://php.net',
  'Python': 'https://python.org',
  'Vue.js': 'https://vuejs.org',
  'React': 'https://reacjs.org',
  'Alpine.js': 'https://github.com/alpinejs/alpine',
  'Tailwind': 'https://tailwindcss.com',
  'Electron': 'https://electronjs.org',
  'openSMILE': 'https://www.audeering.com/opensmile/',
  'openXBOW': 'https://github.com/openXBOW/openXBOW',
  'scikit-learn': 'https://scikit-learn.org/',
  'Bulma': 'https://bulma.io',
  'Stanford Parser': 'https://nlp.stanford.edu/software/lex-parser.shtml',
  'Wikidata': 'https://www.wikidata.org/',
  'LKB': 'http://moin.delph-in.net/LkbTop',
  '[incr tsdb()]': 'http://www.delph-in.net/itsdb/',
  'LinGo Grammar Matrix': 'http://matrix.ling.washington.edu/index.html',
  'HPSG': 'https://en.wikipedia.org/wiki/Head-driven_phrase_structure_grammar',
  'Java': 'https://java.com',
  'Express.js': 'https://expressjs.com',
  'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
};

const headerStyles = {
  gridTemplateAreas: '"img title" "img tags"',
  gridTemplateColumns: 'min-content auto',
  gridTemplateRows: 'max-content'
};

const titleStyles = {
  gridColumn: '-1/1',
  gridRow: '1'
};

const imageStyles = {
  gridArea: 'img',
  minWidth: '250px'
};

const TechnologyTag = ({ name }) => {
  if (tagLinks.hasOwnProperty(name)) {
    return (
      <a
        className="block m-1 px-3 py-1 bg-indigo-200 text-gray-900 rounded-full"
        href={tagLinks[name]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    )
  }

  return (
    <p className="m-1 px-3 py-1 bg-indigo-200 rounded-full">
      {name}
    </p>
  );
};

const Modal = ({ hide, value, isOpen }) => {
  const { imgSrc, links, title, technologies, body } = value;
  let mainLink = '#';

  if (links) {
    mainLink = links.visit ? links.visit : links.source;
  }

  const closeRef = useRef();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setExpanded(true);
      if (closeRef.current) {
        closeRef.current.focus();
      }
    } else {
      setExpanded(false);
    }
  }, [isOpen, closeRef]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 p-4 md:p-12 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 z-50' : 'opacity-0 -z-10'}`}
      aria-hidden={!isOpen}
    >
      <div
        className="bg-gray-900 bg-opacity-75 absolute top-0 right-0 bottom-0 left-0"
        onClick={hide}
      />

      <div
        className={`relative bg-gray-200 text-gray-900 h-full rounded-lg pt-12 pb-10 shadow-xl transform scale-0 transition-all duration-500 ease-in-out ${expanded ? 'scale-100' : ''} max-w-screen-lg mx-auto`}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={hide}
          ref={closeRef}
          aria-label="Close"
        >
          X
        </button>

        <article className="h-full overflow-y-auto px-8 lg:p-12">
          <header
            className="md:grid w-fit mx-auto"
            style={headerStyles}
          >
            <img
              src={imgSrc}
              className="w-48 h-48 mx-auto mb-4 shadow-lg relative z-10 h-64 bg-gray-100"
              style={imageStyles}
              alt={`${title} logo`}
            />
            
            <p
              className="font-display text-3xl lg:text-4xl md:self-start relative md:-left-6 md:w-full-plus-6 md:mt-12 md:pr-6 bg-indigo-600 md:pl-72 shadow text-center md:text-left"
              style={titleStyles}
            >
              <a
                id="modal-title"
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-100"
              >
                {title}
              </a>
            </p>

            <ul className="flex max-w-screen-sm flex-wrap self-start md:ml-2 mt-2 justify-center md:justify-start">
              {technologies && technologies.map(technology => (
                <li key={`${title}-${technology}`}>
                  <TechnologyTag name={technology} />
                </li>
              ))}
            </ul>
          </header>

          <div className="leading-relaxed md:leading-loose text-lg mt-8">
            {body}
          </div>

          <div className="w-full flex justify-center">
            {links && links.visit && (
              <Button href={links.visit} target="_blank" className="mb-4 mt-8">
                Visit
              </Button>
            )}

            {links && links.source && (
              <Button href={links.source} target="_blank" className="mb-4 mt-8 ml-6 first:ml-0">
                View source
              </Button>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
