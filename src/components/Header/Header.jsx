import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';
import SideBar from '../SideBar/SideBar';
import { logo } from '../../assets/images';

import './Header.scss';

function Header({
  pageHeight,
  scrollHeight,
}) {
  const [displayStyle, setDisplayStyle] = useState('none');
  const navigateTo = (value1, position, value2) => {
    window.scrollTo(0, value1)
    if (window.innerWidth < 760 && position) {
      window.scrollTo(0, value1 + value2);
    } else if (window.innerWidth < 760) {
      window.scrollTo(0, value1 * 1.5);
    }
  }
  const handelClickMenu = () => {
    if (displayStyle === 'block') {
      setTimeout(() => {
        setDisplayStyle('block');
      }, 1)
      setDisplayStyle('none');
    } else {
      setDisplayStyle('block');
    }
  }
  return (
    <div className="header-wrapper">
      <div className="header">
        <img className="header__logo-img" src={logo} alt="BaccaratHelper" />
        <div className="header__logo">BaccaratHelper</div>
        <nav className="header__navigation">
          <button onClick={() => navigateTo(0, 'intro', 0)} className="header__nav">главная</button>
          <button onClick={() => navigateTo(450)} className="header__nav">преимущества</button>
          <button className="header__nav">правила игры</button>
          <button onClick={() => navigateTo(900, 'game', 550)} className="header__nav">демо-режим</button>
        </nav>
        <div onClick={handelClickMenu} className="header__menu">
          <div className="header__menu-line"></div>
          <div className="header__menu-line"></div>
          <div className="header__menu-line"></div>
        </div>
      </div>
      <LinearProgressBar pageHeight={pageHeight} scrollHeight={scrollHeight} />
      <SideBar displayStyle={displayStyle} />
    </div>
  );
}

Header.defaultProps = {
  pageHeight: 0,
  scrollHeight: 0,
};

Header.propTypes = {
  pageHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
};

export default Header;
