import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

export const ProgressBar = props => {
  return <div className={'progress-bar'}>
    <div className={'progress-bar__inner'}>
      <div
        className={`progress-bar__indicator${props.error ? ' --error' : props.progress === 100 ? ' --complete' : ' --incomplete'}`}/>
      <div className={'progress-bar__title'}>{props.title} ({props.progress}%)</div>
      <div className={'progress-bar__bar-container --desktop'}>
        <div className={'progress-bar__bar'} style={{width: `${props.progress}%`}} />
      </div>
    </div>
    <div className={'progress-bar__bar-container'}>
      <div className={'progress-bar__bar'} style={{width: `${props.progress}%`}} />
    </div>
  </div>;
};

ProgressBar.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number.isRequired,
  error: PropTypes.boolean
};
