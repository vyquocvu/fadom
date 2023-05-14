# Fadom: A Virtual DOM Library

fadom is a lightweight virtual DOM library that provides an efficient way to update and manipulate the DOM. It's designed to be easy to use and integrate into any web application.

## Features
Virtual DOM implementation for efficient updates

Small size and minimal dependencies

## Getting Started
To get started with fadom, you can simply include the library in your web application:

```
import fadom from '../dom;
```
You can also install fadom using a package manager like npm:
```
npm install fadom
```

## Usage
Once you have included fadom in your web application, you can use it to create and manipulate virtual DOM elements:

```
// create a new virtual DOM element
const element = fadom.createElement('div', { id: 'my-element' }, [
  fadom.createElement('p', {}, 'Hello World!')
]);

// render the virtual DOM element to the real DOM
const vElement = fadom.render(element);

// Mount real Dom to container
fadom.mountElement(vElement, document.getElementById('app'));

// update the real DOM with the changes
fadom.update(element, newElement);
```

API
fadom provides a simple API for creating and manipulating virtual DOM elements. Here are some of the key functions:

#### `fadom.createElement(tagName, attributes, children)`
Creates a new virtual DOM element with the given tag name, attributes, and children.

  - tagName - The tag name of the element (e.g. 'div', 'p', 'img').
  - attributes - An object containing any attributes to apply to the element (e.g. { id: 'my-element', class: 'my-class' }).
  - children - An array of child elements or text nodes.

#### `fadom.render(element)`
Renders the given virtual DOM element to the real DOM.
  - element - The virtual DOM element to render
#### `fadom.mountElement(domElement, container)`
  - domElement - Real Dom element
  - container - The DOM element to append the virtual DOM element into.

#### `fadom.updateElement(element, newElement)`
Updates the given virtual DOM element with the changes from the new virtual DOM element.

  - element - The virtual DOM element to update.
  - newElement - The new virtual DOM element with the changes

## Contributing
If you'd like to contribute to fadom, you can fork the repository and submit a pull request with your changes. Please ensure that your changes are well-documented and include tests.

Inspired by [Explained and created a simple virtual DOM from scratch](https://dev.to/buttercubz/explained-and-created-a-simple-virtual-dom-from-scratch-5765)

## License
fadom is released under the MIT License. See LICENSE for more information.