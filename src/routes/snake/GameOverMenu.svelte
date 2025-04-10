<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Game } from './interfaces';

	interface Props {
		score: Game['score'];
		onNewGame: () => void;
	}
	const { score, onNewGame }: Props = $props();

	let selectionIndex = $state(0);

	let linksParentEl: HTMLUListElement;
	$effect(() => {
		if (selectionIndex == null) {
			return;
		}

		const focusedElement = linksParentEl?.children[
			selectionIndex
		].querySelector('.selection-link') as
			| HTMLButtonElement
			| HTMLAnchorElement
			| null;
		focusedElement?.focus();
	});

	let selected = $state<null | number>(null);
</script>

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
			selectionIndex = (2 + selectionIndex - 1) % 2;
			return;
		}

		if (event.key == 'ArrowDown') {
			event.preventDefault();
			selectionIndex = (selectionIndex + 1) % 2;
			return;
		}
	}}
/>

<div
	class="z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col items-center gap-1 border border-black dark:border-white bg-white dark:bg-black p-4 text-lg"
>
	<h2 class="text-2xl">Game Over</h2>
	<p>Your Score: {score}</p>
	<hr class="w-full" />
	<ul bind:this={linksParentEl}>
		<li>
			<button
				class="
					relative
					focus:outline-none
					{selectionIndex == 0 ? 'text-primary-800 dark:text-primary-500' : ''}
					{selected == 0 ? 'selected' : ''}
					selection-link
					ps-4
					{selectionIndex == 0 ? 'before:opacity-100' : 'before:opacity-0'}
				"
				onfocus={() => {
					selectionIndex = 0;
				}}
				onclick={(event) => {
					event.preventDefault();
					selected = 0;
				}}
				onanimationend={onNewGame}
			>
				New Game
			</button>
		</li>
		<li>
			<a
				class="
					relative
					focus:outline-none
					{selectionIndex == 1 ? 'text-primary-800 dark:text-primary-500' : ''}
					{selected == 1 ? 'selected' : ''}
					selection-link
					ps-4
					{selectionIndex == 1 ? 'before:opacity-100' : 'before:opacity-0'}
				"
				href="/"
				onfocus={() => {
					selectionIndex = 1;
				}}
				onclick={(event) => {
					event.preventDefault();
					selected = 1;
				}}
				onanimationend={(event) => {
					goto(event.currentTarget.href);
				}}
			>
				Main Menu
			</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	.selection-link:before {
		--size: 3px;
		--color: currentColor;
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
