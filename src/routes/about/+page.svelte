<script>
	import Favorites from '$lib/components/about/Favorites.svelte';
	import Tech from '$lib/components/about/Tech.svelte';
	import About from '$lib/components/about/About.svelte';
	import Media from '$lib/components/about/Media.svelte';
</script>

<div class="about-container">
	<div>
		<div class="upper-panels">
			<div class="left">
				<About />
			</div>

			<div class="right">
				<Tech />
			</div>
		</div>
		<div class="bottom-panels">
			<Favorites />
			<Media />
		</div>
	</div>
</div>

<style>
	.about-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	a {
		font-size: clamp(20px, 2vw, 25px);
		width: 100%;
		text-decoration: none;
		color: var(--accent);
	}

	.upper-panels {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		width: 100%;
		margin-top: 2rem;
		padding-top: 80px;
		flex-wrap: wrap;
		@media screen and (max-width: 310px) {
			padding-top: 150px;
		}
	}

	.left,
	.right {
		max-width: 550px;
		display: flex;
		padding-left: 15px;
		padding-right: 15px;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.bottom-panels {
		display: flex;
		justify-content: center;
		align-content: flex-start;
	}
</style>
