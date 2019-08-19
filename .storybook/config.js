import {addDecorator, addParameters, configure} from '@storybook/react';
import React from 'react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
addDecorator(story => (
  <div style={{ padding: 20 }}>
    {story()}
  </div>
));
import {themes} from '@storybook/theming';

addParameters({
  options: {
    theme: themes.normal,
  },
});
configure(loadStories, module);
