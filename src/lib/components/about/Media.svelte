<script lang="ts">
	import Loading from '../global/Loading.svelte';

	let accent: string = '';

	async function getMedia() {
		accent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
		const res = await fetch('/media.json');
		if (!res.ok) return null;
		return await res.json();
	}
</script>

<div class="media-container">
	<h1>Media</h1>
	<div class="media-content">
		{#await getMedia()}
			<Loading />
		{:then data}
			{#each data as media (media.name)}
				<a href={media.url} target="_blank">
					<div>
						<img src={`${media.icon}/${accent.substring(1)}`} alt={media.name} />
					</div>
				</a>
			{/each}
		{:catch}
			<div>Error has occured.</div>
		{/await}
	</div>
</div>

<style>
	.media-container {
		display: flex;
		flex-direction: column;
	}

	.media-content {
		display: flex;
	}

	img {
		width: 50px;
		height: 50px;
	}
</style>
