<script lang="ts">
	import { to_devnagari_number } from './utils';

	export let op: '*' | '+' = '+';
	export let marks: number[] = null;
</script>

{#if marks}
	<span
		>{to_devnagari_number(
			marks.length === 1
				? marks[0]
				: `${marks.join(op)} = ${marks.reduce(
						(acc, m) => (op === '*' ? acc * m : acc + m),
						op === '*' ? 1 : 0
				  )}`
		)}</span
	>
{/if}

<style>
	span {
		float: right;
		font-weight: 500;
	}
</style>
