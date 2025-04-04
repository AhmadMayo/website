<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	const linksMenu = getContext<Snippet>('linksMenu');
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | Principal Front-End Engineer</title>
	<meta
		name="description"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
	<meta
		name="twitter:title"
		property="og:title"
		content="Ahmed Abdel-Aziz | Principal Front-End Engineer"
	/>
	<meta
		name="twitter:description"
		property="og:description"
		content="Principal Frontend Engineer | Javascript Guru | CSS & a11y Passionate"
	/>
</svelte:head>

<div class="grid h-full w-full place-items-center">
	<div class="flex flex-col">
		<h1 class="mb-4 text-4xl">Main Menu</h1>
		{@render linksMenu()}
		<div class="mt-16 max-w-xl">
			P.S. Use the keyboard buttons, or the console's buttons.
		</div>
	</div>
</div>
