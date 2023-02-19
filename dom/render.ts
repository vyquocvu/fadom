import { VElement } from "../types/vdom";

function render(vNode: VElement) {
  const { tagName, attrs, children } = vNode;
  let element = document.createElement(tagName);
  // insert all children elements
  children.forEach((child) => {
    if (typeof child === "string") {
      // if the children is a kind of string create a text Node object
      element.appendChild(document.createTextNode(child));
    } else {
      // repeat the process with the children elements
      element.appendChild(render(child));
    }
  });
  // if it has attributes it adds them to the element
  if (Object.keys(attrs).length) {
    for (const [key, value] of Object.entries(attrs)) {
      element.setAttribute(key, value as string);
    }
  }

  return element;
}

export default render;
