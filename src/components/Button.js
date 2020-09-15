import React from 'react';

const Button = ({ children, target, href, className }) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : null}
    className={`inline-block py-2 px-10 bg-indigo-600 text-gray-100 uppercase tracking-wide font-semibold font-display transition-all duration-200 ease-in-out transform hover:scale-110 ${className}`}
  >
    {children}
  </a>
);

export default Button;