import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

export const Button = props => {
  return <button className={`button
  ${props.secondary ? ' --secondary' : ''}
  ${props.small ? ' --small' : ''}
  ${props.large ? ' --large' : ''}
  ${props.larger ? ' --larger' : ''}
  ${props.dropIn ? ' --drop-in' : ''}
  ${props.rounded ? ' --rounded' : ''}
  ${props.extraRound ? ' --rounded --extra-round' : ''}
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
  small: PropTypes.boolean,
  large: PropTypes.boolean,
  larger: PropTypes.boolean,
  largest: PropTypes.boolean,
  icon: PropTypes.string,
  iconRight: PropTypes.boolean,
  dropIn: PropTypes.boolean,
  rounded: PropTypes.boolean,
  extraRound: PropTypes.boolean
};

export default Button;
