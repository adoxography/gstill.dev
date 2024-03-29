import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 12.7" aria-hidden="true">
    <path d="M.98 7.6C2.6 6.2 4.58 2.66 6.38.04c1.81 2.61 3.79 6.14 5.41 7.54h-1.6C8.56 5.91 7.83 4 6.39 1.86 4.94 4 4.2 5.92 2.58 7.59zm0 .53h1.6c1.63 2.43 2.45 0 3.8 1.63 1.36-1.62 2.18.8 3.8-1.63h1.61c-1.35 1.35-1.89 2.16-4.1 2.05-.76.1-1.03.65-1.3 1.19-.28-.54-.55-1.08-1.36-1.19-2.16.1-2.7-.7-4.05-2.05zm3.67 3.55h3.47c.1.32.27.76.43.98H4.22c.16-.22.33-.66.43-.98z" />
  </svg>
);

Logo.defaultProps = {
  className: ''
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
