<script lang="ts">
  import defaultAttributes from './defaultAttributes';
  import type { IconProps } from './types';
  import type { SvelteHTMLElement } from 'svelte/elements';

  let {
    name = undefined,
    color = 'currentColor',
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: classes,
    children,
    ...props
  }: SvelteHTMLElement['svg'] = $props();

  const mergeClasses = <ClassType = string | undefined | null,>(...classes: ClassType[]) =>
    classes
      .filter((className, index, array) => {
        return Boolean(className) && array.indexOf(className) === index;
      })
      .join(' ');
</script>

<svg
  {...defaultAttributes}
  {...props}
  width={size}
  height={size}
  stroke={color}
  stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
  class={mergeClasses('lucide-icon', 'lucide', name ? `lucide-${name}` : '', classes)}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element
      this={tag}
      {...attrs}
    />
  {/each}
  {@render children()}
</svg>
