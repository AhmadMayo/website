<script lang="ts">
	import { goto } from '$app/navigation';

	let selectionIndex = $state(0);
	let linksParentEl: HTMLUListElement;
	$effect(() => {
		linksParentEl.children[selectionIndex].querySelector('a')?.focus();
	});

	let selected = $state<null | number>(null);

	const allRoutes = [
		{ label: 'Experience', url: '/experience' },
		{ label: 'Skills', url: '/skills' },
	];
</script>

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

		if (event.key == 'ArrowRight') {
			event.preventDefault();
			goto('/experience');
			return;
		}

		if (event.key == 'ArrowLeft') {
			event.preventDefault();
			goto('/skills');
			return;
		}
	}}
/>
<h1 class="text-center text-2xl font-bold">About me</h1>
<div>
	<img src="/my-picture.jpg" alt="Ahmed Abdel-Aziz" class="float-end w-36 lg:w-60" />
	Hi there, I'm Ahmed Abdel-Aziz, but you can call me Mayo. I've been working mainly as a front-end developer
	since 2015. I loved JS since I learned it, and although I learned and loved other technologies, I still
	consider my self as a front end engineer.
	<br />
	<br />
	I love how the front end is the middle space between engineering and creativity, and I spare no effort
	to produce the most appealing UI with the best performance.
	<br />
	<br />
	Mainly my experience is in building highly interactive and real time web applications, and my main
	tech stack is Typescript, React, NodeJS, Go, PostgreSQL, and Docker. You can find more about my experience
	<a class="btn btn-sm preset-filled-secondary-500" href="/experience">here</a>
	and about my skills <a class="btn btn-sm preset-filled-secondary-500" href="/skills">here</a>.
	<br />
	<br />
	Thanks for visiting my website.
	<br />
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
					onanimationend={() => {
						goto(url);
					}}
					onfocus={() => {
						selectionIndex = index;
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
