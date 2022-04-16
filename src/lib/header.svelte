<script lang="ts">
	import { to_devnagari_number } from './utils';

	export let year: number;
	export let full_marks: number;
	export let pass_marks_fn = (f: number) => f * 0.36;
	export let subject: string;
	export let grade: number;
	export let answer_on_paper = false;

	let time = (full_marks * 3 * 60) / 100;
</script>

<section>
	<div class="h">
		<h1>
			श्री महाबिद्याजन मा.बि.<br />
		</h1>
	</div>

	<div class="st">
		<span>कक्षा: {to_devnagari_number(grade)}</span><br />
		{#if answer_on_paper}
			<span>नाम:____________________________</span><br />
			<span>रोल नं.:______ </span>
		{/if}
	</div>
	<div class="s">
		<span>बाग्लुङ ११ रायडाँडा</span><br />
		<span>वार्षिक परीक्षा {to_devnagari_number(year)}</span><br />
		<span>{subject}</span>
	</div>
	<div class="sb">
		<span>पु.अ. {to_devnagari_number(full_marks)}</span><br />
		<span>उ.अ. {to_devnagari_number(pass_marks_fn(full_marks))}</span><br />
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
			'st s sb';
		font-weight: bold;
		grid-template-columns: repeat(3, 1fr);
	}

	.h {
		place-self: center;
		grid-area: h;
		text-align: center;
	}

	h1 {
		margin: 0;
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
