import React from 'react';
import PropTypes from 'prop-types';

import './ContactButton.scss';

export const ContactButton = ({ onClick, type, text, className }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={className}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
    <span />
    {text}
  </button>
);

ContactButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ContactButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};
