<script>
	import About from '$lib/components/about/About.svelte';
	import Github from '$lib/components/about/Github.svelte';
	import Interests from '$lib/components/about/Interests.svelte';
	import Tech from '$lib/components/about/Tech.svelte';
</script>

<div>
	<div>
		<a href="/">cd ..</a>
		<h1>About me</h1>
	</div>
	<div>
		<About />
		<Tech />
	</div>
	<div>
		<Interests />
		<Github />
	</div>
</div>
