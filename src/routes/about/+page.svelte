<script>
	import Favourites from '$lib/components/about/Favourites.svelte';
	import Tech from '$lib/components/about/Tech.svelte';
	import About from '$lib/components/about/About.svelte';
	import Media from '$lib/components/about/Media.svelte';
</script>

<div class="about-container">
	<a href="/">cd ..</a>
	<div>
		<div class="upper-panels">
			<div class="left">
				<About />
			</div>
			<div class="middle">
				<img src="https://avatars.githubusercontent.com/u/170134946?v=4" alt="My avatar" />
			</div>
			<div class="right">
				<Tech />
			</div>
		</div>
		<div class="bottom-panels">
			<Favourites />
			<Media />
		</div>
	</div>
</div>

<style>
	.about-container {
		width: 100%;
	}
	a {
		margin-top: 10px;
		font-size: clamp(12px, 2vw, 25px);
		display: flex;
		width: 100%;
		text-decoration: none;
		color: var(--accent);
		align-items: center;
		justify-content: center;
	}
	img {
		width: clamp(55px, 15vw, 205px);
		height: clamp(55px, 15vw, 205px);
		border-radius: 100%;
	}

	.upper-panels {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		width: 100%;
		margin-top: 2rem;
	}

	.left,
	.middle,
	.right {
		flex: 1;
		max-width: 350px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: left;
	}

	.middle img {
		margin: 0 auto;
	}

	.bottom-panels {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
	}
</style>
