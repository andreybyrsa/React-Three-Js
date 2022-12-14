import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight } from 'react-feather';
import PropTypes from 'prop-types';

import './SideBar.scss';

function SideBar({
  displayStyle,
}) {
  const sideBarRef = useRef();
  const [display, setDisplay] = useState('none');
  useEffect(() => {
    if (displayStyle === 'block') {
      setDisplay('block');
      sideBarRef.current.classList.add('active');
    }
  }, [displayStyle])
  const handelClickSideBar = () => {
    setTimeout(() => {
      setDisplay('none');
      sideBarRef.current.classList.remove('no--active');
    }, 300);
    sideBarRef.current.classList.remove('active');
    sideBarRef.current.classList.add('no--active');
  }
  const navigateTo = (value, start) => {
    if (start) {
      window.scrollTo(0, 0);
    } else if (window.innerWidth < 450) {
      window.scrollTo(0, value);
    } else if (window.innerWidth > 450 && window.innerWidth < 760) {
      window.scrollTo(0, value - 100);
    }
  }
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  })
  return (
    <div
      ref={sideBarRef}
      onClick={handelClickSideBar}
      style={ {display: display,} }
      className="sidebar-wrapper"
    >
      <div className="sidebar-icon-wrapper">
        <ChevronRight className="sidebar__icon" color="white" size={40}/>
      </div>
      <div onClick={() => navigateTo(0, 'start')} className="sidebar-cell">
        <div className="sidebar-cell__text">главная</div>
      </div>
      <div onClick={() => navigateTo(690)} className="sidebar-cell">
        <div className="sidebar-cell__text">преимущества</div>
      </div>
      <div onClick={() => navigateTo(1650)} className="sidebar-cell">
        <div className="sidebar-cell__text">правила игры</div>
      </div>
      <div onClick={() => navigateTo(2080)} className="sidebar-cell">
        <div className="sidebar-cell__text">демо-режим</div>
      </div>
    </div>
  );
}

SideBar.defaultProps = {
  displayStyle: 'none',
};

SideBar.propTypes = {
  displayStyle: PropTypes.string,
}

export default SideBar;
