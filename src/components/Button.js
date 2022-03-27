import PropTypes from 'prop-types';

const buttonClasses = 'inline-block py-2 px-10 bg-indigo-600 text-gray-100 uppercase tracking-wide font-semibold font-display transition-all duration-200 ease-in-out transform hover:scale-110';
const linkClasses = 'underline hover:opacity-75';

const Button = ({
  children,
  target,
  href,
  className,
  type = 'button'
}) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : null}
    className={`${type === 'button' ? buttonClasses : linkClasses} ${className}`}
  >
    {children}
  </a>
);

Button.defaultProps = {
  className: '',
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string
};

export default Button;
