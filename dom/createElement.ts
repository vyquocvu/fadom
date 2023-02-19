import { VElement } from '../types/vdom';

function createElement(
  tagName: string,
  { attrs = {}, children = [] }: { attrs?: Record<string, unknown>; children?: (VElement | string)[]; } = {}
): VElement {
  return {
    tagName,
    attrs,
    children,
  };
}
export default createElement;
