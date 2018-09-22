import { configure } from '@storybook/polymer';
// import { setOptions } from '@storybook/addon-options';

// setOptions({
//   hierarchyRootSeparator: /\|/,
// });

function loadStories() {
  require('../src/stories/index.js');

//   const req = require.context('../src/stories', true, /\.stories\.js$/);
//   req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);