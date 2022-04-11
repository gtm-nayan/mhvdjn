<script lang="ts">
	import Marks from './marks.svelte';

	export let op: '*' | '+' = '+';
	export let marks: number[] = null;
	export let text: string = '';

	export let ol_styles = '';
</script>

<div class="w">
	<li>
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
