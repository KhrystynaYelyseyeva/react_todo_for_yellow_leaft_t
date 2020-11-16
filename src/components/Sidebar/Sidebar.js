import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { SidebarBurger } from './SidebarBurger/SidebarBurger';

import { ThemeContext } from '../../context/ThemeContext';
import { getTheme } from '../../themes/themes';

import './Sidebar.scss';

export const Sidebar = memo(({
  handleOpenContact,
  handleOpenSidebar,
  isOpenSidebar,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={classNames(`Sidebar ${getTheme(theme, 'sidebar.body')}`,
      {
        'Sidebar--active': isOpenSidebar,
      })
    }
    >
      <header className="Sidebar__header">
        <SidebarBurger handleOpenSidebar={handleOpenSidebar} />
        <Logo />
      </header>

      <NavLink
        className="Sidebar__link"
        to="/todos/completed/1"
        exact
        activeClassName="Sidebar__link--active"
      >
        Completed todos
      </NavLink>

      <NavLink
        className="Sidebar__link"
        to="/todos/completed/0"
        exact
        activeClassName="Sidebar__link--active"
      >
        Uncompleted todos
      </NavLink>

      <button
        type="button"
        className="Sidebar__contact"
        onClick={handleOpenContact}
      >
        Contact us
      </button>
    </aside>
  );
});

Sidebar.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
  handleOpenContact: PropTypes.func.isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
};
