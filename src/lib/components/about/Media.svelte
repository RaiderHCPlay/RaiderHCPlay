<script lang="ts">
	import { media } from '$lib/data/media';
	import { onMount } from 'svelte';
	import Loading from '../global/Loading.svelte';

	let accent: string = '';

	onMount(() => {
		accent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
	});
</script>

<div class="media-container">
	<h2>Media</h2>
	{#if accent}
		<div class="media-content">
			{#each media as media (media.name)}
				<a href={media.url} target="_blank">
					<div>
						<img src={`${media.icon}/${accent.substring(1)}`} alt={media.name} />
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<Loading />
	{/if}
</div>

<style>
	.media-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		width: 100%;
	}

	h2 {
		margin-bottom: 1rem;
	}

	.media-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	img {
		width: 50px;
		height: 50px;

		&:hover {
			filter: brightness(0.5) saturate(1.3);
		}
	}
</style>
