<script lang="ts">
	import { to_devnagari_number } from './utils';

	export let year: number;
	export let full_marks: number;
	export let pass_marks: number;
	export let subject: string;
	export let grade: number;

	$: time = (full_marks * 3 * 60) / 100;
</script>

<section>
	<h1>वार्षिक परीक्षा {to_devnagari_number(year)}</h1>

	<div class="st">
		<span>कक्षा: {to_devnagari_number(grade)}</span><br />
		<span>नाम:</span><br />
		<span>रोल न.: </span>
	</div>
	<div class="s">
		<span>{subject}</span>
	</div>
	<div class="sb">
		<span>पु.अ. {to_devnagari_number(full_marks)}</span><br />
		<span>उ.अ. {to_devnagari_number(pass_marks)}</span><br />
		<!-- prettier-ignore -->
		<span>{to_devnagari_number(Math.trunc(time / 60))} घण्टा {#if time % 60}{to_devnagari_number(time % 60)} मिनेट{/if}</span>
	</div>
</section>
<hr />

<style>
	section {
		display: grid;
		grid-template-areas:
			'h h h'
			'. s .'
			'st . sb';
		font-weight: bold;
	}

	h1 {
		place-self: center;
		grid-area: h;
	}

	.st {
		grid-area: st;
		text-align: left;
	}

	.s {
		grid-area: s;
		text-align: center;
	}

	.sb {
		grid-area: sb;
		text-align: right;
	}
</style>
