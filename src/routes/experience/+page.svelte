<script lang="ts">
	import { goto } from '$app/navigation';
	import dayjs from 'dayjs';
	import experience, { type Position } from './experience';
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key == 'ArrowRight') {
			event.preventDefault();
			goto('/skills');
			return;
		}

		if (event.key == 'ArrowLeft') {
			event.preventDefault();
			goto('/about');
			return;
		}
	}}
/>

<h1 class="text-center text-lg font-bold">Experience</h1>
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
		<h2 class="font-semibold">
			{title}
		</h2>
		<div>
			at
			{#if companyWebsite != undefined}
				<a class="text-secondary-50 underline" href={companyWebsite}>{companyName}</a>
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
