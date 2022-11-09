import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

function Modal({
  active, slider, player, banker,
}) {
  const sliderClassName = "position-visible";
  if (active) {
    return (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__statistic">{player}% - player<span style={{color: 'white',}}> ⬤</span></div>
          <div className="modal__statistic">{banker}% - banker<span style={{color: '#2f55d4'}}> ⬤</span></div>
        </div>
      </div>
    );
  } else if (!active && slider) {
    return (
      <div className={`modal ${sliderClassName}`}>
        <div className="modal__content">
          <div className="modal__statistic">{player}% - player<span style={{color: 'white',}}> ⬤</span></div>
          <div className="modal__statistic">{banker}% - banker<span style={{color: '#2f55d4'}}> ⬤</span></div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.defaultProps = {
  active: true,
  player: 0,
  banker: 0,
};

Modal.propTypes = {
  active: PropTypes.bool,
  player: PropTypes.number,
  banker: PropTypes.number,
};
