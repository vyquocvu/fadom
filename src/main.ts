import createElement from '../dom/createElement';
import updateElement from '../dom/updateElement';
import render from '../dom/render';
import mountElement from '../dom/mount';

const createVApp = (count: number) =>  createElement('div', {
  attrs: {
    id: 'app',
  },
  children: [
    'The current count is: ' + count,
    createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
      },
    }),
  ],
});

let count = 0;
const app = createVApp(count);
const $app = render(app);
const $rootEl = mountElement($app, document.getElementById('app'));

setInterval(() => {
  count++;
  const updatedVApp = createVApp(count);
  updateElement($rootEl as Element, updatedVApp, app);
}, 5000);
