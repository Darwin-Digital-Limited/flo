import React from 'react';
import {storiesOf} from '@storybook/react';
import '../../assets/dist/bloc.min.css';
import {ProgressBar} from '../../assets/js/src/react/ProgressBar/ProgressBar';

storiesOf('Progress bar', module)
  .add('with 0 progress', () => <ProgressBar progress={0} title={'Progress'}/>)
  .add('with 50% progress', () => <ProgressBar progress={50} title={'Progress'}/>)
  .add('with 100% progress', () => <ProgressBar progress={100} title={'Progress'}/>)
  .add('with 10% progress and error', () => <ProgressBar error progress={10} title={'Progress'}/>);
