import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

import './LinearProgressBar.scss';

function LinearProgressBar({
  pageHeight,
  scrollHeight,
}) {
  const completedNumber = Math.floor((scrollHeight / pageHeight) * 100);
  return (
    <ProgressBar
      completed={completedNumber}
      borderRadius="0"
      height="5px"
      bgColor="#1E47D1FF"
      baseBgColor="transparent"
      customLabel=" "
      transitionDuration="0s"
    />
  );
}

LinearProgressBar.defaultProps = {
  pageHeight: 0,
  scrollHeight: 0,
};

LinearProgressBar.propTypes = {
  pageHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
};

export default LinearProgressBar;
