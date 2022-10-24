import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className="page-header">
      <div className="page-header__logo">BaccaratHelper</div>
      <div className="page-header__navigation">
        <nav className="page-header__nav">главная</nav>
        <nav className="page-header__nav">открытый код</nav>
      </div>
    </div>
  );
}

export default Header;
