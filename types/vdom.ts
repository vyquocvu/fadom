export interface VElement {
  tagName: string;
  attrs: Record<string, unknown>;
  children: (VElement | string)[];
};
