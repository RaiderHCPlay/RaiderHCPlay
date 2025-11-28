<script>
	import Favourites from '$lib/components/about/Favourites.svelte';
	import Tech from '$lib/components/about/Tech.svelte';
	import About from '$lib/components/about/About.svelte';
	import Github from '$lib/components/about/Github.svelte';
	import Media from '$lib/components/about/Media.svelte';
</script>

<div>
	<div>
		<a href="/">cd ..</a>
	</div>

	<div>
		<About />
		<Favourites />
		<Media />
	</div>
	<div>
		<Tech />
		<Github />
	</div>
</div>

<style>
	div {
		display: flex;
		height: 90%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	a {
		margin-top: 10px;
		font-size: clamp(12px, 2vw, 16px);
		color: var(--accent);
		text-decoration: none;
	}
</style>
