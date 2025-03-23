<script lang="ts">
	import { goto } from '$app/navigation';

	let selectionIndex = $state(0);
	let linksParentEl: HTMLUListElement;
	$effect(() => {
		linksParentEl.children[selectionIndex].querySelector('a')?.focus();
	});

	let selected = $state<null | number>(null);

	const allRoutes = [
		{ label: 'About Me', url: '/about' },
		{ label: 'Experience', url: '/experience' },
		{ label: 'Skills', url: '/skills' },
	];
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | Principal Front-End Engineer</title>
	<meta
		name="description"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
	<meta
		property="og:title"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
	<meta
		property="og:description"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
	<meta name="twitter:title" content="Ahmed Abdel-Aziz | Principal Front-End Engineer." />
	<meta
		name="twitter:description"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
</svelte:head>

<svelte:window
	onkeydown={(event) => {
		if (event.key == 'Enter') {
			if (selected != null) {
				return;
			}

			event.preventDefault();
			selected = selectionIndex;
			return;
		}

		if (event.key == 'ArrowUp') {
			event.preventDefault();
			selectionIndex = (allRoutes.length + selectionIndex - 1) % allRoutes.length;
			return;
		}

		if (event.key == 'ArrowDown') {
			event.preventDefault();
			selectionIndex = (selectionIndex + 1) % allRoutes.length;
			return;
		}
	}}
/>

<div class="grid h-full w-full place-items-center">
	<div class="flex flex-col">
		<h1 class="mb-4 text-xl font-semibold">Please Select</h1>
		<nav>
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
							href={url}
							onfocus={() => {
								selectionIndex = index;
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
		<div class="mt-16 max-w-xl">P.S. Use the keyboard buttons, or the console's buttons.</div>
	</div>
</div>

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
