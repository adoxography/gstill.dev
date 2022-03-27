import PropTypes from 'prop-types';

const PortfolioItem = ({ value, onClick }) => {
  const { imgSrc, title, description } = value;

  const handleClick = () => onClick(value);

  return (
    <div className="bg-indigo-600 overflow-hidden relative">
      <button
        type="button"
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

        <div className="absolute p-6 z-30 top-0 bottom-0 left-0 right-0 justify-center items-center transform  group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-gray-100">
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

PortfolioItem.defaultProps = {
  onClick: () => {}
};

PortfolioItem.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.shape({
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default PortfolioItem;
