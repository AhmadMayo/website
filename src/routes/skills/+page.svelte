<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	const linksMenu = getContext<Snippet>('linksMenu');
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
{@render linksMenu()}
