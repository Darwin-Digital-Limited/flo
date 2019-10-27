import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

export const myButtonListener = (e) => {
  const a = 1;
};

export const Button = props => {
  console.log(PropTypes);
  return <button onClick={myButtonListener} className={`button
  ${props.secondary ? ' --secondary' : ''}
  ${props.tertiary ? ' --tertiary' : ''}
  ${props.small ? ' --small' : ''}
  ${props.large ? ' --large' : ''}
  ${props.larger ? ' --larger' : ''}
  ${props.dropIn ? ' --drop-in' : ''}
  ${props.fullWidth ? ' --full-width' : ''}
  ${props.rounded ? ' --rounded' : ''}
  ${props.extraRound ? ' --rounded --extra-round' : ''}
  ${props.roundedBottomRight ? ' --rounded-bottom-right' : ''}
  ${props.roundedBottomLeft ? ' --rounded-bottom-left' : ''}
  ${props.roundedTopLeft ? ' --rounded-top-left' : ''}
  ${props.roundedTopRight ? ' --rounded-top-right' : ''}
  ${props.transitionTo ? ` --transition-to --transition-to-${props.transitionTo}` : ''}
  ${props.largest ? ' --largest' : ''}`}>
    <span className={'button__text'}>
      {props.icon && !props.iconRight && <span className={`button__icon ${props.icon}`}/>}
      {props.text}
      {props.icon && props.iconRight && <span className={`button__icon --right ${props.icon}`}/>}
    </span>
  </button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  larger: PropTypes.bool,
  largest: PropTypes.bool,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  dropIn: PropTypes.bool,
  rounded: PropTypes.bool,
  extraRound: PropTypes.bool,
  fullWidth: PropTypes.bool,
  roundedTopRight: PropTypes.bool,
  roundedTopLeft: PropTypes.bool,
  roundedBottomRight: PropTypes.bool,
  roundedBottomLeft: PropTypes.bool,
  transitionTo: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
