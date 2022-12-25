import React from 'react';
import PropTypes from 'prop-types';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/images';

import './Header.scss';

function Header({
  pageHeight,
  scrollHeight,
}) {
  return (
    <div className="header-wrapper">
      <div className="header">
        <img className="header__logo-img" src={logo} alt="BaccaratHelper" />
        <div className="header__logo">BaccaratHelper</div>
        <nav className="header__navigation">
          <NavLink className="header__nav" to="/">главная</NavLink>
          <NavLink className="header__nav" to="">открытый код</NavLink>
        </nav>
      </div>
      <LinearProgressBar pageHeight={pageHeight} scrollHeight={scrollHeight} />
    </div>
  );
}

export default Header;

Header.defaultProps = {
  pageHeight: 0,
  scrollHeight: 0,
};

Header.propTypes = {
  pageHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
};
