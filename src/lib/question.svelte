<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import Marks from './marks.svelte';
	import { ctx_key } from './utils';

	export let op: '*' | '+' = '+';
	export let marks: number[] = null;
	export let text: string = '';

	export let ol_styles = '';

	const level = getContext<number>(ctx_key) ?? 0;
	setContext(ctx_key, level + 1);
	const numerals = ['devanagari', 'nepali-consonants', 'nepali-vowels'][level] ?? '';
</script>

<div class="w">
	<li style:list-style-type={numerals}>
		<div>
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

	ol {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}
</style>
