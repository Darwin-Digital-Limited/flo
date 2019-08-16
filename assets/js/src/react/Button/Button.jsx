import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';

export const Button = props => {
  return <button className={'button'}>{props.text}</button>;
};

Button.propTypes = {

};

export default Button;
