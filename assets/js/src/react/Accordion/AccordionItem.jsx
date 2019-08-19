import React, {useState, useEffect} from 'react';
import {Map, List} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import {VelocityTransitionGroup} from 'velocity-react';

export const AccordionItem = props => {
  const [open, setOpen] = useState(props.open === true);
  return <div className={'accordion__item'}>
    <div className={'accordion__item__title'} onClick={() => setOpen(!open)}>
      <div className={'accordion__item__title__inner'}>
        {props.title}
      </div>
      <div className={'accordion__item__button-container'}>
        <Button secondary fullWidth roundedTopRight roundedBottomRight transitionTo={'tertiary'} text={open ? '-' : '+'} />
      </div>
    </div>
    <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
      {open ? <div className={`accordion__item__content${open ? ' --open' : ''}`}>
        {typeof props.content === 'string' && <div className={'accordion__item__content__inner'} dangerouslySetInnerHTML={{__html: props.content}}>
        </div>}
      </div> : null}
    </VelocityTransitionGroup>
  </div>;
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};
