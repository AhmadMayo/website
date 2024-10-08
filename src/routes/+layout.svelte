<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	const { children } = $props();

	const allRoutes = ['/', '/experience', '/skills'];
	const routesRelations = allRoutes.reduce(
		(acc, route, index, originalArray) => {
			const next = originalArray[(index + 1) % originalArray.length];
			const previous = originalArray[(originalArray.length + index - 1) % originalArray.length];
			acc[route] = { next, previous };

			return acc;
		},
		{} as Record<string, { next: string; previous: string }>,
	);
</script>

<div class="flex grow flex-col px-4 pb-10 pt-24">
	<nav class=""></nav>
	<main
		data-theme="modern"
		class="
			console
			grid grow
			grid-cols-1 grid-rows-[1fr_8rem]
			bg-surface-50 p-2 dark:bg-surface-900
		"
	>
		<div class="col-start-1 col-end-2 row-start-1 row-end-2 bg-black p-2">
			{@render children()}
		</div>
		<div class="col-start-1 col-end-2 row-start-2 row-end-3 flex items-center justify-around">
			<!-- Arrows -->
			<div
				class="
					grid h-20 w-20
					grid-cols-[35%_10%_10%_10%_35%] grid-rows-[35%_10%_10%_10%_35%]
					text-gray-600
				"
			>
				<!-- Left -->
				<div class="arrow col-start-1 col-end-3 row-start-2 -row-end-2 transition ease-out">
					<a
						href={routesRelations[$page.url.pathname].previous}
						class="
							block h-full w-full
							bg-current
							[clip-path:polygon(0%_0%,65%_0%,100%_50%,65%_100%,0%_100%)]
						"
						title="Previous Page"
					>
						l
					</a>
				</div>
				<!-- Up -->
				<div class="arrow col-start-2 -col-end-2 row-start-1 row-end-3 transition ease-out">
					<button
						class="
							h-full w-full
							bg-current
							[clip-path:polygon(0%_0%,100%_0%,100%_65%,50%_100%,0%_65%)]
						"
					>
						l
					</button>
				</div>
				<!-- Right -->
				<div class="arrow -col-start-3 -col-end-1 row-start-2 -row-end-2 transition ease-out">
					<a
						href={routesRelations[$page.url.pathname].next}
						class="
							block h-full w-full
							bg-current
							[clip-path:polygon(0%_50%,35%_0%,100%_0%,100%_100%,35%_100%)]
						"
					>
						l
					</a>
				</div>
				<!-- Down -->
				<div class="arrow col-start-2 -col-end-2 -row-start-3 -row-end-1 transition ease-out">
					<button
						class="
							h-full w-full
							bg-current
							[clip-path:polygon(0%_35%,50%_0%,100%_35%,100%_100%,0%_100%)]
						"
					>
						l
					</button>
				</div>
			</div>
			<div></div>
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
		</div>
	</main>
</div>

<style lang="postcss">
	.console {
		--outer-border-color: rgba(var(--color-tertiary-900) / 1);
		--inner-border-color: rgba(var(--color-tertiary-700) / 1);
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

	.arrow {
		--shadow-x: -3px;
		--shadow-y: 3px;

		filter: drop-shadow(var(--shadow-x) var(--shadow-y) 0 #000000);
	}
	.arrow:active {
		--shadow-x: -1.5px;
		--shadow-y: 1.5px;
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
