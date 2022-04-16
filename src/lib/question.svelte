<script lang="ts" context="module">
	const ctx_key = Symbol();
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import Marks from './marks.svelte';

	export let op: '*' | '+' = '+';
	export let marks: number[] = null;
	export let text: string = '';

	export let ol_styles = '';
	export let avoid_break = false;

	const level = getContext<number>(ctx_key) ?? 0;
	setContext(ctx_key, level + 1);
</script>

<div class:w={avoid_break}>
	<li class:np-n={level % 3 === 0} class:np-c={level % 3 === 1} class:np-v={level % 3 === 2}>
		<div class="clearfix">
			<span>{text}</span>
			<Marks {marks} {op} />
		</div>
		{#if $$slots.default}
			<ol style={ol_styles}>
				<slot />
			</ol>
		{/if}
	</li>
</div>

<style>
	.w {
		break-inside: avoid;
		page-break-inside: avoid;
	}

	.clearfix {
		font-weight: 500;
	}

	.clearfix::after {
		content: ' ';
		display: block;
		clear: both;
	}

	.np-c {
		list-style-type: nepali-consonants;
	}

	.np-n {
		list-style-type: devanagari;
	}

	.np-v {
		list-style-type: nepali-vowels;
	}
</style>
