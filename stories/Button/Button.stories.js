import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../assets/js/src/react/Button/Button';
import '../../assets/dist/bloc.min.css';

storiesOf('Button', module)
  .add('with text', () => <Button text={'hello'} />)
  .add('with text and icon', () => <Button icon={'fas fa-rocket'} text={'with an icon'} />)
  .add('with text and icon on the right', () => <Button iconRight icon={'fas fa-rocket'} text={'with an icon on the right'} />)
  .add('small button', () => <Button small text={'small text'} />)
  .add('large button', () => <Button large text={'large button'} />)
  .add('larger button', () => <Button larger text={'larger button'} />)
  .add('largest button', () => <Button largest text={'largest button'} />)
  .add('secondary colour', () => <Button secondary text={'secondary'} />)
  .add('tertiary to secondary', () => <Button tertiary transitionTo={'secondary'} text={'transition to secondary'} />)
  .add('tertiary to primary', () => <Button tertiary transitionTo={'primary'} text={'transition to secondary'} />)
  .add('transition to tertiary', () => <Button primary transitionTo={'tertiary'} text={'transition to secondary'} />)
  .add('rounded', () => <Button rounded text={'rounded'} />)
  .add('rounded secondary', () => <Button rounded secondary text={'rounded secondary'} />)
  .add('extra rounded', () => <Button extraRound text={'extra rounded'} />)
  .add('extra rounded secondary', () => <Button extraRound secondary text={'extra rounded secondary'} />)
  .add('drop-in animation', () => <Button dropIn text={'drop in'} />);
