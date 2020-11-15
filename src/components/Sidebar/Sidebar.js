import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Sidebar.scss';

export const Sidebar = ({
  handleOpenContact,
  handleOpenSidebar,
  isOpenSidebar,
}) => (
  <aside className={classNames('Sidebar',
    {
      'Sidebar--active': isOpenSidebar,
    })
  }
  >
    <header className="Sidebar__header">
      <button
        type="button"
        onClick={handleOpenSidebar}
        className="opened-burger"
      >
        <div className="opened-burger__line" />
        <div className="opened-burger__line" />
      </button>

      <svg
        className="Sidebar__logo"
        id="icon-logo-leaf"
        viewBox="0 0 364 604"
      >
        <title>logo</title>
        {/* eslint-disable-next-line max-len */}
        <path d="M181.9,23.1c0,0,64.6,50.5,111.6,126.9l-85.2,223.2L108.1,98.6h-1C145.3,51.8,181.9,23.1,181.9,23.1z M22.2,302  c0-57.9,22.6-111.7,50.7-156.3l110.2,293.1l-40.5,106.1C95.3,497.1,22.2,406.4,22.2,302z M182.1,580.8l141.5-371  c11.1,28.8,18.2,59.8,18.2,92.2C341.6,454.1,186.1,577.7,182.1,580.8z" />
      </svg>
    </header>

    <button
      type="button"
      className="Sidebar__contact"
      onClick={handleOpenContact}
    >
      Contact
    </button>
  </aside>
);
Sidebar.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
  handleOpenContact: PropTypes.func.isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
};
