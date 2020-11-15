import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './SidebarBurger.scss';

export const SidebarBurger = memo(({ handleOpenSidebar }) => (
  <button
    type="button"
    onClick={handleOpenSidebar}
    className="SidebarBurger"
  >
    <div className="SidebarBurger__line" />
    <div className="SidebarBurger__line" />
  </button>
));

SidebarBurger.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
};
