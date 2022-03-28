import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import PortfolioItem from './PortfolioItem';
import FilterBox from './FilterBox';
import items from '../../data/portfolio';
import { categories } from '../../data/technologies';

const useRepo = () => {
  const [filters, setFilters] = useState([]);

  const activeItems = useMemo(() => items.filter(
    item => filters.every(filter => item.technologies.some(tech => tech.name === filter))
  ), [filters]);

  const categoryOptions = useMemo(() => Object.fromEntries(
    Object.entries(categories).map(
      ([category, technologies]) => [
        category,
        technologies.map(tech => ({
          name: tech.name,
          selected: filters.includes(tech.name),
          available: activeItems.some(
            item => item.technologies.some(other => other.name === tech.name)
          )
        }))
      ]
    )
  ), [filters, activeItems]);

  const toggleFilter = (newFilter => {
    setFilters(prevFilters => {
      if (prevFilters.includes(newFilter)) {
        return filters.filter(filter => filter !== newFilter);
      }

      return [...prevFilters, newFilter];
    });
  });

  return {
    categoryOptions,
    activeItems,
    toggleFilter
  };
};

const Portfolio = ({ openModal }) => {
  const { categoryOptions, activeItems, toggleFilter } = useRepo();

  const handleClick = state => {
    openModal(state);
  };

  return (
    <section id="work" className="bg-gray-300 text-gray-800 text-center py-20 px-8">
      <header className="font-display font-semibold mb-8">
        <h2 className="text-4xl">
          My work
        </h2>
      </header>

      <FilterBox options={categoryOptions} onChange={toggleFilter} />

      <div className="portfolio grid grid-cols-auto-fit md:[--max-w:0.5fr] lg:[--max-w:0.25fr]">
        {activeItems.map(item => (
          <PortfolioItem key={item.title} value={item} onClick={handleClick} />
        ))}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default Portfolio;
