import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {AccordionItem} from './AccordionItem';

export const Accordion = props => {
  return <div className={'accordion'}>
    {props.items.map(item => <AccordionItem title={item.title} content={item.content}/>)}
  </div>;
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    open: PropTypes.bool
  })),
  allOpen: PropTypes.bool,
  defaultOpen: PropTypes.number,
  oneOpen: PropTypes.boolean
};

