<script lang="ts">
	import Marks from './marks.svelte';

	export let hr = false;
	export let title: string;
	export let marks = null;
</script>

<div>
	{#if hr}<hr />{/if}
	{title}
	<Marks op="*" {marks} />
</div>

<style>
	div {
		font-weight: bold;
		text-align: center;
	}
</style>
