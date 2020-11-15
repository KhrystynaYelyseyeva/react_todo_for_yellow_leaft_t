import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { HeaderBurger } from './HeaderBurger/HeaderBurger';
import { ThemeButton } from './ThemeButton/ThemeButton';

import './Header.scss';

export const Header = memo(({ handleOpenSidebar }) => (
  <header className="Header">
    <HeaderBurger handleOpenSidebar={handleOpenSidebar} />

    <ThemeButton />
  </header>
));

Header.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
};
