import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './HeaderBurger.scss';

export const HeaderBurger = memo(({ handleOpenSidebar }) => (
  <button
    type="button"
    className="HeaderBurger"
    onClick={handleOpenSidebar}
  >
    <div className="HeaderBurger__line HeaderBurger__line--first" />
    <div className="HeaderBurger__line HeaderBurger__line--second" />
    <div className="HeaderBurger__line HeaderBurger__line--third" />
  </button>
));

HeaderBurger.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
};
