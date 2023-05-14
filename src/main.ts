import fadom from '../dom';

const createVApp = (count: number) =>  fadom.createElement('div', {
  attrs: {
    id: 'app',
  },
  children: [
    'The current count is: ' + count,
    fadom.createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
      },
    }),
  ],
});

let count = 0;
const app = createVApp(count);
const $app = fadom.render(app);
const $rootEl = fadom.mountElement($app, document.getElementById('app'));

setInterval(() => {
  count++;
  const updatedVApp = createVApp(count);
  fadom.updateElement($rootEl as Element, updatedVApp, app);
}, 5000);
