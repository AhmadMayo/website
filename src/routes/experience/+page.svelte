<script lang="ts">
	import dayjs from 'dayjs';
	import experience, { type Position } from './experience';

	let titleEl: HTMLElement;
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | Experience</title>
	<meta
		name="description"
		content="Technical experience since I started."
	/>
	<meta
		name="twitter:title"
		property="og:title"
		content="Ahmed Abdel-Aziz | Experience"
	/>
	<meta
		name="twitter:description"
		property="og:description"
		content="Technical experience since I started."
	/>
</svelte:head>

<svelte:window
	onkeydown={(event) => {
		if (event.key == 'ArrowLeft') {
			event.preventDefault();
			window.history.back();
			return;
		}

		if (event.key == 'ArrowUp') {
			const scrollableEl = titleEl.parentElement;
			if (!scrollableEl) {
				return;
			}

			event.preventDefault();
			titleEl.parentElement?.scrollTo({
				top: scrollableEl.scrollTop - 250,
				behavior: 'smooth',
			});
			return;
		}

		if (event.key == 'ArrowDown') {
			const scrollableEl = titleEl.parentElement;
			if (!scrollableEl) {
				return;
			}

			event.preventDefault();
			titleEl.parentElement?.scrollTo({
				top: scrollableEl.scrollTop + 250,
				behavior: 'smooth',
			});
			return;
		}
	}}
/>

<h1
	bind:this={titleEl}
	class="text-center text-4xl"
>
	My Experience
</h1>
{#each experience as position, index}
	{@render renderPosition(position)}
	{#if index != experience.length - 1}
		<hr />
	{/if}
{/each}

{#snippet renderPosition({
	companyName,
	companyWebsite,
	title,
	startDate,
	endDate,
	location,
	responsibilities,
}: Position)}
	<div>
		<h2 class="text-xl font-semibold">
			{title}
		</h2>
		<div>
			at
			{#if companyWebsite != undefined}
				<a
					class="text-secondary-50 underline"
					href={companyWebsite}>{companyName}</a
				>
			{:else}
				<span>{companyName}</span>
			{/if}
		</div>
		<div class="mb-2 text-xs text-gray-400">
			{location}
			<br />
			from {dayjs(startDate).format('MMM YYYY')} -
			{#if endDate != undefined}
				{dayjs(endDate).format('MMM YYYY')}
			{:else}
				Present
			{/if}
			({dayjs.duration(dayjs(endDate).diff(dayjs(startDate))).humanize()})
		</div>
		<ul class="list-disc ps-4">
			{#each responsibilities as responsibility}
				<li>{responsibility}</li>
			{/each}
		</ul>
	</div>
{/snippet}
