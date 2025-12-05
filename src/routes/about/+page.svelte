<script>
	import Favourites from '$lib/components/about/Favourites.svelte';
	import Tech from '$lib/components/about/Tech.svelte';
	import About from '$lib/components/about/About.svelte';
	import Media from '$lib/components/about/Media.svelte';
</script>

<div class="about-container">
	<a href="/">cd ..</a>
	<div class="panels">
		<div class="upper-panels">
			<div class="left-panel">
				<About />
			</div>
			<div>
				<img src="https://avatars.githubusercontent.com/u/170134946?v=4" alt="My avatar" />
			</div>
			<div class="right-panel">
				<Tech />
			</div>
		</div>
		<div>
			<Favourites />
			<Media />
		</div>
	</div>
</div>

<style>
	a {
		margin-top: 10px;
		font-size: clamp(12px, 2vw, 25px);
		display: flex;
		width: 80%;
		color: var(--accent);

		align-items: flex-start;
		justify-content: flex-start;
	}
	img {
		margin-left: 15px;
		width: clamp(55px, 15vw, 205px);
		height: clamp(55px, 15vw, 205px);
		border-radius: 100%;
	}

	.upper-panels {
		display: flex;
	}

	.about-container {
		display: flex;
		height: 90%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.panels {
		display: flex;
		width: 90%;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.left-panel {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
</style>
