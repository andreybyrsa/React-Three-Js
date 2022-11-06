import React from 'react';
import { NavLink } from 'react-router-dom';
import {logo} from '../../assets/images';

import './Header.scss';

function Header() {
  return (
    <div className="page-header">
      <img className="page-header__logo-img" src={logo} alt="BaccaratHelper" />
      <div className="page-header__logo">BaccaratHelper</div>
      <nav className="page-header__navigation">
        <NavLink className="page-header__nav" to="/main">главная</NavLink>
        <NavLink className="page-header__nav" to="">открытый код</NavLink>
      </nav>
    </div>
  );
}

export default Header;
