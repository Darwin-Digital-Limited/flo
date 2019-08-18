import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../assets/js/src/react/Button/Button';
import '../../assets/dist/bloc.min.css';

storiesOf('Button', module)
  .add('with text', () => <Button text={'hello'} />)
  .add('with text and icon', () => <Button icon={'fas fa-rocket'} text={'with an icon'} />)
  .add('small button', () => <Button small text={'with an icon'} />)
  .add('large button', () => <Button large text={'large button'} />)
  .add('larger button', () => <Button larger text={'larger button'} />)
  .add('largest button', () => <Button largest text={'largest button'} />)
  .add('secondary colour', () => <Button secondary text={'secondary'} />)
  .add('drop-in animation', () => <Button dropIn text={'drop in'} />);
