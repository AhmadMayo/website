<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	const linksMenu = getContext<Snippet>('linksMenu');
</script>

<svelte:head>
	<title>Ahmed Abdel-Aziz | About</title>
	<meta
		name="description"
		content="Know more about me."
	/>
	<meta
		name="twitter:title"
		property="og:title"
		content="Ahmed Abdel-Aziz | About"
	/>
	<meta
		name="twitter:description"
		property="og:description"
		content="Know more about me."
	/>
</svelte:head>

<h1 class="text-center text-4xl">About Me</h1>
<div>
	<img
		src="/my-picture.png"
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
{@render linksMenu()}
