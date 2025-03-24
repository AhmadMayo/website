<script lang="ts">
	import { goto } from '$app/navigation';

	let selectionIndex = $state(0);
	let linksParentEl: HTMLUListElement;
	$effect(() => {
		const el = linksParentEl.children[selectionIndex]?.querySelector(
			'.selection-link',
		) as HTMLAnchorElement | null;
		el?.focus();
	});

	let selected = $state<null | number>(null);

	const allRoutes = [
		{ label: 'My Experience', url: '/experience' },
		{ label: 'My Skills', url: '/skills' },
		{ label: 'Remember Snake?', url: '/snake' },
	];
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | About</title>
	<meta
		name="description"
		content="Know more about me."
	/>
	<meta
		property="og:title"
		content="Ahmed Abdel-Aziz | About"
	/>
	<meta
		property="og:description"
		content="Know more about me."
	/>
	<meta
		name="twitter:title"
		content="Ahmed Abdel-Aziz | About"
	/>
	<meta
		name="twitter:description"
		content="Know more about me."
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
<h1 class="text-center text-4xl">About Me</h1>
<div>
	<img
		src="/my-picture.jpg"
		alt="Ahmed Abdel-Aziz"
		class="float-end w-36 lg:w-60"
	/>
	I'm Ahmed Abdel-Aziz (Aka - Mayo). I began my career in tech in 2015 with a passion
	for JavaScript, alongside a variety of other technologies. As a Front-end Engineer,
	I believe that the front-end is where engineering meets creativity; thus I have
	been dedicated to creating visually appealing UIs that also deliver the best performance
	from a technical standpoint. My core expertise lies in building highly interactive,
	real-time web applications, with a tech stack focused on TypeScript, React, NodeJS,
	Go, PostgreSQL, and Docker. Feel free to explore my
	<a
		class="text-secondary-500 underline"
		href="/experience"
	>
		experience
	</a>
	and
	<a
		class="text-secondary-500 underline"
		href="/skills"
	>
		skills
	</a>.
</div>
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
