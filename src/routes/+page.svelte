<script lang="ts">
	import Spotify from '$lib/components/home/Spotify.svelte';
	import { MoonComponent } from '$lib/components/moons';
</script>

<div class="home-wrapper">
	<h1>RaiderHCPlay</h1>
	<subtext>Just a student and web developer</subtext>
	<div class="containers-wrapper">
		<div class="container">
			<p>More info about me:</p>
			<a href="/about"><code>cd ./about</code></a>
		</div>
		<div class="container">
			<p>My projects</p>
			<a href="/projects"><code>cd ./projects</code></a>
		</div>
		<div>
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
		font-size: clamp(35px, 2vw, 60px);
	}

	subtext {
		font-size: clamp(20px, 2vw, 30px);
	}

	.containers-wrapper {
		display: flex;
		flex-direction: column;

		align-items: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;

		p,
		code {
			font-size: clamp(20px, 2vw, 30px);
		}

		a {
			margin-left: 10px;
			font-size: clamp(20px, 2vw, 25px);
			color: var(--accent);
			text-decoration: none;
		}
	}
</style>
