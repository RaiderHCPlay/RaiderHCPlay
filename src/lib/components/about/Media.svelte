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

<div>
	<h1>Media</h1>
	{#await getMedia()}
		<Loading />
	{:then data}
		{#each data as media (media.name)}
			<a href={media.url} target="_blank">
				<div>
					<img src={`${media.icon}/${accent.substring(1)}`} alt={media.name} />
					{media.name}
				</div>
			</a>
		{/each}
	{:catch}
		<div>Error has occured.</div>
	{/await}
</div>
