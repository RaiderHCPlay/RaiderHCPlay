<script lang="ts">
	import Spotify from '$lib/components/home/Spotify.svelte';
	import { MoonComponent } from '$lib/components/moons';
</script>

<div class="home-wrapper">
	<h1>RaiderHCPlay</h1>
	<subtext>Just a web developer</subtext>
	<div class="containers-wrapper">
		<div class="container">
			<p>More info about me:</p>
			<a href="/about"><code>cd ./about</code></a>
		</div>
		<div class="container">
			<p>My projects:</p>
			<a href="/projects"><code>cd ./projects</code></a>
		</div>
		<div class="other-container">
			<Spotify />
			<MoonComponent />
		</div>
	</div>
</div>

<style>
	.home-wrapper {
		display: flex;
		height: 90%;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}

	h1 {
		font-size: clamp(35px, 3vw, 85px);
		color: var(--accent);
		margin-bottom: 10px;
	}

	subtext {
		font-size: clamp(15px, 2vw, 25px);
	}

	.containers-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 15px;
		width: 80%;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		p,
		code {
			margin: 0;
			font-size: clamp(12px, 2vw, 20px);
		}

		a {
			margin-left: 10px;
			font-size: clamp(12px, 2vw, 16px);
			color: var(--accent);
			text-decoration: none;
		}
	}

	.other-container {
		margin-top: 25px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
