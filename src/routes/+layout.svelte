<script lang="ts">
	import duration from 'dayjs/plugin/duration';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import dayjs from 'dayjs';
	import autoAnimate from '@formkit/auto-animate';

	import '../app.css';

	dayjs.extend(duration);
	dayjs.extend(relativeTime);

	const { children } = $props();

	if (typeof window != 'undefined') {
		console.log(`
	|-----------------------------------------------------|
	| What are you doing here? Are you checking the code? |
	| Hmph. Fiiine. Here's the link.                      |
	| https://github.com/AhmadMayo/website                |
	| And stop looking under people's console's. Pervert. |
	|-----------------------------------------------------|
	`);
	}
</script>

<div class="itenms-center flex h-screen grow flex-col px-4 py-24">
	<div
		data-theme="modern"
		class="
			console
			bg-surface-50
			dark:bg-surface-900 grid
			h-0 w-4xl grow
			grid-cols-1 grid-rows-[1fr_12rem] p-2
		"
	>
		<main
			use:autoAnimate
			class="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-4 overflow-auto bg-black p-2"
		>
			{@render children()}
		</main>
		<footer class="col-start-1 col-end-2 row-start-2 row-end-3 flex items-center justify-around">
			<!-- Arrows -->
			<div
				class="
					grid h-24 w-24
					grid-cols-[35%_10%_10%_10%_35%] grid-rows-[35%_10%_10%_10%_35%]
					text-gray-600
				"
			>
				<!-- Left -->
				<div class="button col-start-1 col-end-3 row-start-2 -row-end-2 transition ease-out">
					<button
						class="
							block h-full w-full
							bg-current
							[clip-path:polygon(0%_0%,65%_0%,100%_50%,65%_100%,0%_100%)]
						"
						aria-label="Left Arrorw"
						onclick={() => {
							window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
						}}
					>
					</button>
				</div>
				<!-- Up -->
				<div class="button col-start-2 -col-end-2 row-start-1 row-end-3 transition ease-out">
					<button
						class="
							h-full w-full
							bg-current
							[clip-path:polygon(0%_0%,100%_0%,100%_65%,50%_100%,0%_65%)]
						"
						aria-label="Arrow Up"
						onmousedown={() => {
							window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
						}}
					>
					</button>
				</div>
				<!-- Right -->
				<div class="button -col-start-3 -col-end-1 row-start-2 -row-end-2 transition ease-out">
					<button
						class="
							block h-full w-full
							bg-current
							[clip-path:polygon(0%_50%,35%_0%,100%_0%,100%_100%,35%_100%)]
						"
						aria-label="Arrow Right"
						onclick={() => {
							window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
						}}
					></button>
				</div>
				<!-- Down -->
				<div class="button col-start-2 -col-end-2 -row-start-3 -row-end-1 transition ease-out">
					<button
						class="
							h-full w-full
							bg-current
							[clip-path:polygon(0%_35%,50%_0%,100%_35%,100%_100%,0%_100%)]
						"
						aria-label="Arrow Down"
						onmousedown={() => {
							window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
						}}
					></button>
				</div>
			</div>
			<nav class="flex flex-col gap-4 lg:flex-row lg:gap-12">
				{#snippet internalLinkButton({
					href,
					label,
					ariaLabel,
				}: {
					href: string;
					label: string;
					ariaLabel: string;
				})}
					<div class="flex items-center gap-4 lg:flex-col">
						<a class="button block h-4 w-8 bg-gray-600" {href} aria-label={ariaLabel}></a>
						<span class="text-xs">{label}</span>
					</div>
				{/snippet}
				{@render internalLinkButton({ href: '/about', label: 'A', ariaLabel: 'About' })}
				{@render internalLinkButton({ href: '/experience', label: 'E', ariaLabel: 'Experience' })}
				{@render internalLinkButton({ href: '/skills', label: 'S', ariaLabel: 'Skills' })}
			</nav>
			<div class="grid h-20 w-20 grid-cols-[45%_5%_5%_45%] grid-rows-[45%_5%_5%_45%]">
				<a
					aria-label="github account"
					href="https://github.com/AhmadMayo"
					target="_blank"
					class="
						button
						col-start-2 col-end-5 row-start-1 row-end-4
						grid place-items-center
						rounded-full bg-black p-1 transition ease-out dark:bg-white
					"
					ondragstart={(event) => {
						event.preventDefault();
					}}
				>
					<enhanced:img
						src="/static/github-pixelated-logo.png"
						alt="github account"
						class="h-full w-full object-cover"
					/>
				</a>
				<a
					aria-label="linkedin account"
					href="https://www.linkedin.com/in/ahmad-mayo/"
					target="_blank"
					class="
						button
						col-start-1 col-end-4 row-start-2 row-end-5
						grid place-items-center
						rounded-full bg-white p-2 transition ease-out
					"
					ondragstart={(event) => {
						event.preventDefault();
					}}
				>
					<enhanced:img
						src="/static/linkedin-pixelated-logo.png"
						alt="linkedin account"
						class="h-full w-full object-cover"
					/>
				</a>
			</div>
		</footer>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.console {
		--outer-border-color: var(--color-tertiary-900);
		--inner-border-color: var(--color-tertiary-700);
		/* --outer-border-color: rgba(var(--color-tertiary-900) / 1);
		--inner-border-color: rgba(var(--color-tertiary-700) / 1); */
		--pixel-size: 0.25rem;
		--shadow-x: -3px;
		--shadow-y: 3px;

		/*
			Pixelated border radius
			Reference: https://codepen.io/fallwestmike/pen/ezOGJK
		*/
		box-shadow:
			/*
				Inner border layer
			*/
			calc(var(--pixel-size) * -2) 0 0 0 var(--inner-border-color),
			calc(var(--pixel-size) * 2) 0 0 0 var(--inner-border-color),
			0 calc(var(--pixel-size) * -1) 0 var(--pixel-size) var(--inner-border-color),
			0 var(--pixel-size) 0 var(--pixel-size) var(--inner-border-color),
			0 calc(var(--pixel-size) * -4) 0 0 var(--inner-border-color),
			0 calc(var(--pixel-size) * 4) 0 0 var(--inner-border-color),
			0 calc(var(--pixel-size) * -6) 0 calc(var(--pixel-size) * -1) var(--inner-border-color),
			0 calc(var(--pixel-size) * 6) 0 calc(var(--pixel-size) * -1) var(--inner-border-color),
			0 calc(var(--pixel-size) * -8) 0 calc(var(--pixel-size) * -2) var(--inner-border-color),
			0 calc(var(--pixel-size) * 8) 0 calc(var(--pixel-size) * -2) var(--inner-border-color),
			0 calc(var(--pixel-size) * -11) 0 calc(var(--pixel-size) * -4) var(--inner-border-color),
			0 calc(var(--pixel-size) * 11) 0 calc(var(--pixel-size) * -4) var(--inner-border-color),
			0 calc(var(--pixel-size) * -14) 0 calc(var(--pixel-size) * -6) var(--inner-border-color),
			0 calc(var(--pixel-size) * 14) 0 calc(var(--pixel-size) * -6) var(--inner-border-color),
			/*
				Outer border layer
			*/ calc(var(--pixel-size) * -3) 0 0 0 var(--outer-border-color),
			calc(var(--pixel-size) * 3) 0 0 0 var(--outer-border-color),
			0 0 0 calc(var(--pixel-size) * 2) var(--outer-border-color),
			0 calc(var(--pixel-size) * -3) 0 var(--pixel-size) var(--outer-border-color),
			0 calc(var(--pixel-size) * 3) 0 var(--pixel-size) var(--outer-border-color),
			0 calc(var(--pixel-size) * -5) 0 0 var(--outer-border-color),
			0 calc(var(--pixel-size) * 5) 0 0 var(--outer-border-color),
			0 calc(var(--pixel-size) * -7) 0 calc(var(--pixel-size) * -1) var(--outer-border-color),
			0 calc(var(--pixel-size) * 7) 0 calc(var(--pixel-size) * -1) var(--outer-border-color),
			0 calc(var(--pixel-size) * -9) 0 calc(var(--pixel-size) * -2) var(--outer-border-color),
			0 calc(var(--pixel-size) * 9) 0 calc(var(--pixel-size) * -2) var(--outer-border-color),
			0 calc(var(--pixel-size) * -12) 0 calc(var(--pixel-size) * -4) var(--outer-border-color),
			0 calc(var(--pixel-size) * 12) 0 calc(var(--pixel-size) * -4) var(--outer-border-color),
			0 calc(var(--pixel-size) * -15) 0 calc(var(--pixel-size) * -6) var(--outer-border-color),
			0 calc(var(--pixel-size) * 15) 0 calc(var(--pixel-size) * -6) var(--outer-border-color),
			/*
				Inset shadow
			*/ var(--shadow-x) var(--shadow-y) 0 #000000 inset;
	}

	.button {
		--shadow-x: -3px;
		--shadow-y: 3px;

		filter: drop-shadow(var(--shadow-x) var(--shadow-y) 0 #000000);
	}
	.button:active {
		--shadow-x: -1.5px;
		--shadow-y: 1.5px;
	}
</style>
