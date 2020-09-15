import React from 'react';
import items from '../../portfolio';

const portfolioStyles = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
}

const PortfolioItem = ({ value, onClick }) => {
  const { imgSrc, title, description } = value;

  const handleClick = () => onClick(value);

  return (
    <div className="bg-indigo-600 overflow-hidden relative">
      <button
        className="contents group focus:z-10 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={imgSrc}
          alt={title}
          width="800"
          height="800"
          className="transform-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:opacity-25 group-focus:scale-150 group-focus:opacity-25 min-w-full h-full object-cover bg-gray-400"
        />

        <div className="absolute p-6 z-30 top-0 bottom-0 left-0 right-0 justify-center items-center transform  group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-gray-300">
          <p className="font-semibold font-display text-4xl leading-none mb-4">
            {title}
          </p>

          <p className="text-lg">
            {description}
          </p>
        </div>
      </button>
    </div>
  );
};

const Portfolio = ({ openModal }) => {
  const handleClick = state => {
    openModal(state);
  };

  return (
    <section id="work" className="bg-gray-400 text-gray-800 text-center py-20 px-8">
      <header className="font-display font-semibold">
        <h2 className="text-4xl">
            My work
        </h2>

        <p className="text-2xl text-indigo-600 mb-8">
          Some projects I've developed
        </p>
      </header>

      <div
        className="portfolio grid"
        style={portfolioStyles}
      >
        {items.map(item => <PortfolioItem key={item.title} value={item} onClick={handleClick} />)}
      </div>
    </section>
  );
};

export default Portfolio;
