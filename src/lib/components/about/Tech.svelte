<script lang="ts">
	import Loading from '../global/Loading.svelte';

	let accent = '';

	async function getTech() {
		accent = getComputedStyle(document.documentElement)
			.getPropertyValue('--accent')
			.replace('#', '');
		const res = await fetch('/tech.json');
		if (!res.ok) return null;
		return await res.json();
	}
</script>

<div>
	<h3>Tech stack</h3>
	{#await getTech()}
		<Loading />
	{:then data}
		{#each data as tech (tech.name)}
			<div>
				<div>
					<img src={`${tech.icon}/${accent}`} alt={tech.name} width="24" height="24" />
					<span>{tech.name}</span>
					{#if tech.category === 'exploring'}
						<span>Exploring</span>
					{/if}
				</div>
			</div>
		{/each}
	{:catch}
		<div>Error has occured</div>
	{/await}
</div>
