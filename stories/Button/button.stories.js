import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../assets/js/src/react/Button/Button';
import '../../assets/dist/bloc.min.css';

storiesOf('Button', module)
  .add('with text', () => <Button text={'hello'} />);
