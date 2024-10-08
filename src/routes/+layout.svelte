<script>
	import '../app.css';
	import classes from './+layout.module.css';
</script>

<div class="grid grow px-4 pb-10 pt-24">
	<main
		data-theme="modern"
		class="{`grid h-full w-full grid-cols-1 grid-rows-[1fr_8rem] bg-surface-50 p-2 dark:bg-surface-900 ${classes['console']} `}}"
	>
		<div class="col-start-1 col-end-2 row-start-1 row-end-2 bg-black p-2">
			<slot></slot>
		</div>
		<div class="col-start-1 col-end-2 row-start-2 row-end-3 flex items-center justify-around">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				class={`h-20 w-20 ${classes['drop-shadow']}`}
			>
				<path d="M0,35 h35 v-35 h30 v35 h35 v30 h-35 v35 h-30 v-35 h-35 z" class="fill-gray-600" />
				<polygon points="5,50 15,40 15,60" class="fill-black" />
				<polygon points="50,5 40,15 60,15" class="fill-black" />
				<polygon points="95,50 85,40 85,60" class="fill-black" />
				<polygon points="50,95 40,85 60,85" class="fill-black" />
			</svg>
			<div class="grid h-20 w-20 grid-cols-2 grid-rows-2">
				<a
					href="https://github.com"
					class={`col-start-2 col-end-3 row-start-1 row-end-2 rounded-full bg-blue-500 ${classes['drop-shadow']}`}
					>g</a
				>
				<a
					href="https://linked.com"
					class={`col-start-1 col-end-2 row-start-2 row-end-3 rounded-full bg-red-500 ${classes['drop-shadow']}`}
					>l</a
				>
			</div>
		</div>
	</main>
</div>
