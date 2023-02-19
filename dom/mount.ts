function mountElement(element: Element, domElement: Element | null): Element | null {
  console.log('mountElement', element);
  if (!domElement) return null;
  domElement.replaceWith(element);
  return element;
}

export default mountElement;