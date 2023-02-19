import createElement from '../dom/createElement';
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
const $app = render(createVApp(count));
let $rootEl = mountElement($app, document.getElementById('app'));

setInterval(() => {
  count++;
  const updatedVApp = render(createVApp(count));
  $rootEl = mountElement(updatedVApp, $rootEl);
}, 10000);
