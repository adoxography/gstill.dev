import PropTypes from 'prop-types';

import PortfolioItem from './PortfolioItem';
import items from '../../data/portfolio';

const portfolioStyles = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
};

const Portfolio = ({ openModal }) => {
  const handleClick = state => {
    openModal(state);
  };

  return (
    <section id="work" className="bg-gray-300 text-gray-800 text-center py-20 px-8">
      <header className="font-display font-semibold">
        <h2 className="text-4xl">
          My work
        </h2>

        <p className="text-2xl text-indigo-600 mb-8">
          Some projects I&apos;ve developed
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

Portfolio.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default Portfolio;
