<script lang="ts">
	import { onMount, untrack } from 'svelte';
	import GameOverMenu from './GameOverMenu.svelte';
	import type { Direction, Game, Location } from './interfaces';
	import PauseMenu from './PauseMenu.svelte';
	import { goto } from '$app/navigation';

	let playAreaContainerEl: HTMLDivElement;
	let playAreaWidth = $state(0);
	let playAreaHeight = $state(0);
	const gameSpeed = 100; // Loop every this amount of milliseconds
	$effect(() => {
		const { width, height } = playAreaContainerEl.getBoundingClientRect();
		playAreaWidth = Math.floor(width / 10);
		playAreaHeight = Math.floor(height / 10);
	});

	function getInitialGame(): Game {
		const head: Location = {
			x: Math.floor(playAreaWidth / 2),
			y: Math.floor(playAreaHeight / 2),
		};
		const snake: Array<Location> = [
			head,
			getActualPosition({ x: head.x - 1, y: head.y }),
			getActualPosition({ x: head.x - 2, y: head.y }),
			getActualPosition({ x: head.x - 3, y: head.y }),
			getActualPosition({ x: head.x - 4, y: head.y }),
		];

		const food = getNewFoodLocation();

		return {
			state: 'running',
			snake,
			food,
			direction: { x: 1, y: 0 },
			score: 0,
		};
	}
	function getActualPosition(coords: { x: number; y: number }): Location {
		let newX = coords.x;
		if (newX == playAreaWidth) {
			newX = 0;
		}
		if (newX == -1) {
			newX = playAreaWidth - 1;
		}

		let newY = coords.y;
		if (newY == playAreaHeight) {
			newY = 0;
		}
		if (newY == -1) {
			newY = playAreaHeight - 1;
		}

		return {
			x: newX,
			y: newY,
		};
	}
	function moveSnake() {
		const snake = game.snake;
		const food = game.food;
		snake.unshift(
			getActualPosition({
				x: snake[0].x + game.direction.x,
				y: snake[0].y + game.direction.y,
			}),
		);

		const head = game.snake[0];
		if (head.x == food.x && head.y == food.y) {
			game.score += 1;
			game.food = getNewFoodLocation();
		} else {
			game.snake.pop();
		}

		for (let index = 1; index < game.snake.length; index++) {
			const position = game.snake[index];
			if (position.x == head.x && position.y == head.y) {
				game.state = 'finished';
				return;
			}
		}
	}
	function getNewFoodLocation(): Location {
		return {
			x: Math.round(Math.random() * (playAreaWidth - 1)),
			y: Math.round(Math.random() * (playAreaHeight - 1)),
		};
	}

	let game = $state<Game>({
		state: 'not-started',
		snake: [],
		food: { x: 0, y: 0 },
		direction: { x: 1, y: 0 },
		score: 0,
	});

	function loop() {
		if (game.state != 'running') {
			return;
		}

		moveSnake();

		setTimeout(loop, gameSpeed);
	}

	onMount(() => {
		game = getInitialGame();
	});
	$effect(() => {
		if (game.state != 'running') {
			return;
		}

		untrack(() => {
			loop();
		});
	});
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | A Game That I Made</title>
	<meta
		name="description"
		content="A blast from the past."
	/>
	<meta
		name="twitter:title"
		property="og:title"
		content="Ahmed Abdel-Aziz | A Game That I Made"
	/>
	<meta
		name="twitter:description"
		property="og:description"
		content="A blast from the past."
	/>
</svelte:head>

<svelte:window
	onkeydown={(event) => {
		if (event.key == 'Escape') {
			if (game.state == 'running') {
				game.state = 'paused';
				return;
			}

			if (game.state == 'paused') {
				game.state = 'running';
				return;
			}

			if (game.state == 'finished') {
				goto('/');
				return;
			}
		}

		if (game.state != 'running') {
			return;
		}

		let newDirection: Direction;
		switch (event.key) {
			case 'ArrowRight':
				event.preventDefault();
				newDirection = { x: 1, y: 0 };
				break;

			case 'ArrowLeft':
				event.preventDefault();
				newDirection = { x: -1, y: 0 };
				break;

			case 'ArrowDown':
				event.preventDefault();
				newDirection = { x: 0, y: 1 };
				break;

			case 'ArrowUp':
				event.preventDefault();
				newDirection = { x: 0, y: -1 };
				break;

			default:
				return;
		}

		// It's going in the same direction or in the opposite direction
		if (
			Math.abs(newDirection.x) == Math.abs(game.direction.x) &&
			Math.abs(newDirection.y) == Math.abs(game.direction.y)
		) {
			return;
		}

		game.direction = newDirection;
		moveSnake();
		return;
	}}
/>

<h1 class="text-center text-4xl">Snake</h1>
<div
	class="grid grow grid-cols-1 grid-rows-1 place-items-center"
	bind:this={playAreaContainerEl}
>
	<svg
		style:width="{playAreaWidth}em"
		style:height="{playAreaHeight}em"
		class="relative col-start-1 col-end-2 row-start-1 row-end-2 border border-black dark:border-white text-[10px]"
		viewBox="0 0 {playAreaWidth} {playAreaHeight}"
	>
		<!-- #region food -->
		<circle
			r=".5"
			cx={game.food.x + 0.5}
			cy={game.food.y + 0.5}
			class="fill-primary-800 dark:fill-primary-500"
		/>

		<!-- #endregion food -->

		<!-- #region snake -->
		{#each game.snake as snakeSlot}
			<rect
				x={snakeSlot.x}
				y={snakeSlot.y}
				width="1"
				height="1"
				class="fill-black dark:fill-white"
			/>
		{/each}
		<!-- #endregion snake -->
	</svg>
	<!-- #region game paused message -->
	{#if game.state == 'paused'}
		<PauseMenu
			onResume={() => {
				game.state = 'running';
			}}
			onNewGame={() => {
				game = getInitialGame();
			}}
		/>
	{/if}
	<!-- #endregion game paused message -->
	<!-- #region game over message -->
	{#if game.state == 'finished'}
		<GameOverMenu
			score={game.score}
			onNewGame={() => {
				game = getInitialGame();
			}}
		/>
	{/if}
	<!-- #endregion game over message -->
</div>
<div class="flex justify-between">
	<div>Score: {game.score}</div>
	{#if game.state == 'running'}
		<button
			onclick={() => {
				game.state = 'paused';
			}}>Pause</button
		>
	{/if}
</div>

<style lang="postcss">
</style>
