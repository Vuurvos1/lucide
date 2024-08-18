/* eslint-disable import/no-extraneous-dependencies */
import base64SVG from '@lucide/build-icons/utils/base64SVG.mjs';
import { getJSBanner } from './license.mjs';

export default ({ iconName, children, componentName, getSvg, deprecated, deprecationReason }) => {
  const svgContents = getSvg();
  const svgBase64 = base64SVG(svgContents);

  return `\
<script lang="ts">
${getJSBanner()}
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let { children, ...restProps}: IconProps = $props();

const iconNode: IconNode = ${JSON.stringify(children)};
</script>

<!--
@component @name ${componentName}
@description Lucide SVG icon component, renders SVG Element with children.

@preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://lucide.dev/icons/${iconName}
@see https://lucide.dev/guide/packages/lucide-svelte - Documentation

@param {IconProps} props - Lucide icons props and any valid SVG attribute
@returns {FunctionalComponent} Svelte component
${deprecated ? `@deprecated ${deprecationReason}` : ''}
-->

<Icon name="${iconName}" {...restProps} iconNode={iconNode}>
  {#if children}
    {@render children()}
  {/if}
</Icon>
`;
};
