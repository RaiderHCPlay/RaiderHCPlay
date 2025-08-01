<script lang="ts">
	import { onMount } from 'svelte';
	let spotify: SpotifyData | null = null;

	onMount(() => {
		let isMounted = true;
		const fetchSpotify = () => {
			fetch('/api/spotify/playing', { method: 'GET' }).then(async (res) => {
				if (res.ok) {
					const data = await res.json();
					if (isMounted) {
						spotify = data;
					}
				}
			});
		};

		fetchSpotify();
		const interval = setInterval(fetchSpotify, 2000);
		return () => {
			isMounted = false;
			clearInterval(interval);
		};
	});
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
	{#if spotify?.error || !spotify?.isPlaying}
		<div class="spotify-div">No currently played track</div>
	{/if}
	{#if spotify?.isPlaying}
		<a href={spotify.trackUrl} target="_blank" class="spotify-div">
			<svg
				width="40px"
				height="40px"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#7366d3"
				viewBox="0 0 24 24"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z"
						fill="#7366d3"
						stroke="#7366d3"
					></path>
				</g>
			</svg>
			<img src={spotify.albumImageUrl} alt="" width="50" height="50" />
			<div class="spotify-content">
				<h3>Now playing: {spotify.title}</h3>
				<h3>By: {spotify.artist}</h3>
			</div>
		</a>
	{/if}
</div>
