<script lang="ts">
	import { onMount } from 'svelte';

	let spotify: SpotifyData | null = null;
	let color = '';

	function truncate(text: string) {
		text = text.normalize();
		console.log(text, text.length);
		if (text.length > 35) {
			return text.substring(0, 35) + '...';
		} else {
			return text;
		}
	}

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

{#if spotify?.error || !spotify?.isPlaying}
	<div class="spotify-div">
		<svg
			width="40px"
			height="40px"
			viewBox="0 0 20 20"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<title>spotify [#79d6fc]</title> <desc>Created with Sketch.</desc> <defs> </defs>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7479.000000)">
						<g id="icons" transform="translate(56.000000, 160.000000)">
							<path
								d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"
								id="spotify-[#79d6fc]"
							>
							</path>
						</g>
					</g>
				</g>
			</g></svg
		>
		<p>Nothing playing right now</p>
	</div>
{/if}
{#if spotify?.isPlaying}
	<a href={spotify.trackUrl} target="_blank" class="spotify-div">
		<svg
			width="40px"
			height="40px"
			viewBox="0 0 20 20"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<title>spotify [#79d6fc]</title> <desc>Created with Sketch.</desc> <defs> </defs>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7479.000000)">
						<g id="icons" transform="translate(56.000000, 160.000000)">
							<path
								d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"
								id="spotify-[#79d6fc]"
							>
							</path>
						</g>
					</g>
				</g>
			</g></svg
		>
		<img src={spotify.albumImageUrl} alt="" width="50" height="50" />
		<div class="spotify-content">
			<h3>Now playing: {truncate(spotify.title)}</h3>
			<h3>By: {truncate(spotify.artist)}</h3>
		</div>
	</a>
{/if}

<style>
	.spotify-div {
		align-items: center;
		display: flex;
		justify-content: center;

		p {
			margin-left: 15px;
			font-size: clamp(12px, 2vw, 16px);
		}
		img {
			width: 60px;
			height: 60px;
			margin-left: 10px;
		}

		@media only screen and (max-width: 700px) {
			flex-direction: column;

			img {
				margin-left: 0;
				margin-top: 10px;
			}
		}
	}

	.spotify-content {
		margin: 0 0 0 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: 700px) {
			margin-top: 10px;
			margin-right: 0;
		}

		h3 {
			margin: 0;
			margin-top: 5px;
		}
	}

	a {
		text-decoration: none;
		color: var(--text);
		font-size: clamp(12px, 2vw, 16px);
	}

	svg {
		fill: var(--accent);
		g {
			fill: var(--accent);
		}
	}
</style>
