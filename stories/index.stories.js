import React from 'react';

import {addDecorator, addParameters, storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {themes} from '@storybook/theming';

addDecorator(story => (
    <div style={{ padding: 20 }}>
      {story()}
    </div>
));

addParameters({
  options: {
    theme: themes.normal,
  },
});
