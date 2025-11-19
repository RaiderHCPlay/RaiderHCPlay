<script>
	import Moon from './Moon.svelte';
	import Spotify from './Spotify.svelte';
</script>

<div class="top-content">
	<div class="avatar-name">
		<img
			alt="RaiderHCPlay avatar"
			width="50"
			height="50"
			class="avatar"
			src="https://avatars.githubusercontent.com/u/170134946?v=4"
		/>
		<h2>RaiderHCPlay</h2>
	</div>
	<div class="top-sections">
		<Spotify />
		<Moon />
	</div>
</div>

<style>
	.top-sections {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}
</style>
