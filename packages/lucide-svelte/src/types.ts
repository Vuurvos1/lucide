import type { SvelteHTMLElements } from 'svelte/elements';

export type Attrs = SvelteHTMLElements['svg'];

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Attrs][];

export interface IconProps extends Attrs {
  name?: string;
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  class?: string;
  iconNode?: IconNode;
}

export type IconEvents = {
  [evt: string]: CustomEvent<any>;
};

export type IconSlots = {
  default: {};
};
