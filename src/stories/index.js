import { storiesOf } from '@storybook/polymer';
import '@vaadin/vaadin-button';
import { action } from '@storybook/addon-actions';
import { html, render } from 'lit-html';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs/polymer';

import { backgrounds } from '@storybook/addon-backgrounds';

storiesOf('No Addons', module)
  .add('No Addon', () => '<div>No Addon</div>');

storiesOf('Notes', module)
  .add('Note', withNotes('A very simple component')(() => '<div>Note</div>'));

storiesOf('Links', module)
  .add('Link', () => {
    const el = document.createElement('vaadin-button');
    el.innerHTML = 'LINK';
    el.addEventListener('click', linkTo('Actions'));
    return el;
  });

storiesOf('Actions', module)
  .add('Action', () => {
    const el = document.createElement('vaadin-button');
    el.innerHTML = 'ACTION';
    el.addEventListener('click', action('log1'));
    return el;
  })

storiesOf('Knobs', module)
  .addDecorator(withKnobs)
  .add('Knob', () => {
    const title = text('Button title', 'KNOB');
    const el = document.createElement('vaadin-button');
    el.innerHTML = title;
    return el;
  })
  .add('Knob Lit', () => {
    const litTitle = text('Button title', 'KNOB LIT');
    const root = document.createElement('div');
    render(html`<vaadin-button>${litTitle}</vaadin-button>`, root);
    return root
  })

storiesOf('Backgrounds', module)
  .addDecorator(backgrounds([
    { name: "first", value: "#00aced", default: true },
    { name: "second", value: "#3b5998" },
  ]))
  .add('Background', () => {
    const el = document.createElement('vaadin-button');
    el.innerHTML = 'BACKGROUND';
    return el;
  })

