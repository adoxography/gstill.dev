import PropTypes from 'prop-types';

const FilterBox = ({ options, onChange }) => (
  <div className="bg-indigo-100 flex mb-12">
    <div className="bg-gray-900 text-indigo-100 w-12 pt-12">
      <h3 className="-rotate-90 origin-bottom-right text-3xl uppercase font-thin">
        Filters
      </h3>
    </div>
    <div className="flex flex-wrap justify-center gap-4 w-full p-4">
      {Object.entries(options).map(([category, technologies]) => (
        <div key={category} className="max-w-xs">
          <h4 className="text-indigo-600 font-semibold mb-2 uppercase text-sm tracking-widest">{category}</h4>
          <div className="text-left">
            {technologies.map(tech => (
              <button
                type="button"
                className={`
                  text-xs inline-block m-1 px-4 py-1 rounded-full disabled:text-gray-400
                  ${tech.selected ? 'bg-indigo-400' : 'bg-indigo-200'}
                `}
                key={tech.name}
                disabled={!tech.available}
                onClick={() => onChange(tech.name)}
              >
                {tech.name}
                {tech.selected && <span className="ml-2">✖</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

FilterBox.propTypes = {
  options: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    available: PropTypes.bool
  }))).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterBox;
