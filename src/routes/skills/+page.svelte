<script lang="ts">
	import { goto } from '$app/navigation';

	let selectionIndex = $state(0);
	let linksParentEl: HTMLUListElement;
	$effect(() => {
		const el = linksParentEl.children[selectionIndex].querySelector(
			'.selection-link',
		) as HTMLAnchorElement | null;
		el?.focus();
	});

	let selected = $state<null | number>(null);

	const allRoutes = [
		{ label: 'About Me', url: '/about' },
		{ label: 'My Experience', url: '/experience' },
		{ label: 'Remember Snake?', url: '/snake' },
	];
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | Skills</title>
	<meta
		name="description"
		content="Technologies that I master."
	/>
	<meta
		name="twitter:title"
		property="og:title"
		content="Ahmed Abdel-Aziz | Skills"
	/>
	<meta
		name="twitter:description"
		property="og:description"
		content="Technologies that I master."
	/>
</svelte:head>

<svelte:window
	onkeydown={(event) => {
		if (event.key == 'Enter' || event.key == 'ArrowRight') {
			if (selected != null) {
				return;
			}
			event.preventDefault();
			selected = selectionIndex;
			return;
		}

		if (event.key == 'ArrowLeft') {
			event.preventDefault();
			window.history.back();
			return;
		}

		if (event.key == 'ArrowUp') {
			event.preventDefault();
			selectionIndex =
				(allRoutes.length + selectionIndex - 1) % allRoutes.length;
			return;
		}

		if (event.key == 'ArrowDown') {
			event.preventDefault();
			selectionIndex = (selectionIndex + 1) % allRoutes.length;
			return;
		}
	}}
/>

<h1 class="text-center text-4xl">My Skills</h1>
<ul class="grid list-disc grid-cols-1 ps-4 sm:grid-cols-1">
	<li>Javascript (9 years)</li>
	<li>Typescript (6 years)</li>
	<li>React (7 years)</li>
	<li>Svelte (1 year)</li>
	<li>NodeJS (6 years)</li>
	<li>Go (2 years)</li>
	<li>SQL (5 years)</li>
	<li>PostgreSQL (5 years)</li>
	<li>MongoDB (2 years)</li>
	<li>Docker (5 years)</li>
</ul>
<hr />
<nav>
	<h2 class="mb-2">Other Pages</h2>
	<ul bind:this={linksParentEl}>
		{#each allRoutes as { label, url }, index}
			<li>
				<a
					class="
						relative
						focus:outline-none
						{selectionIndex == index ? 'text-primary-500' : ''}
						{selected == index ? 'selected' : ''}
						selection-link
						ps-4
						{selectionIndex == index ? 'before:opacity-100' : 'before:opacity-0'}
					"
					role="menuitem"
					href={url}
					onfocus={() => {
						selectionIndex = index;
					}}
					onclick={(event) => {
						event.preventDefault();
						selected = index;
					}}
					onanimationend={() => {
						goto(url);
					}}
				>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.selection-link:before {
		--size: 3px;
		--color: var(--color-primary-500);
		content: '';
		left: 0;
		top: calc(50% - 0.5rem + 1px);
		position: absolute;
		width: var(--size);
		height: var(--size);
		box-shadow:
			var(--size) var(--size) 0 0 var(--color),
			calc(var(--size) * 2) calc(var(--size) * 2) 0 0 var(--color),
			var(--size) calc(var(--size) * 3) 0 0 var(--color);
	}

	.selected {
		animation: selection 0.5s 2 linear;
	}
	@keyframes selection {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
