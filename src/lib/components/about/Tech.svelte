<script lang="ts">
	import { tech } from '$lib/data/tech';
	import { onMount } from 'svelte';
	import Loading from '../global/Loading.svelte';

	let accent = '';

	onMount(() => {
		accent = getComputedStyle(document.documentElement)
			.getPropertyValue('--accent')
			.replace('#', '');
	});
</script>

<div class="tech-container">
	<h2>Tech Stack</h2>
	{#if accent}
		<div class="tech-items">
			{#each tech as tech (tech.name)}
				<div class="tech-item">
					<img src={`${tech.icon}/${accent}`} alt={tech.name} />
					<div class="tech-info">
						<span class="tech-name">{tech.name}</span>
						{#if tech.category === 'exploring'}
							<span class="tech-badge">Learning</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<Loading />
	{/if}
</div>

<style>
	.tech-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	h2 {
		font-size: clamp(20px, 3vw, 28px);
		text-align: center;
		margin-bottom: 1rem;
	}

	.tech-items {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		max-width: 900px;
	}

	.tech-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: var(--background-alt);
		padding: 0.5rem 1rem;
		font-size: clamp(12px, 1.3vw, 16px);
	}

	img {
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}

	.tech-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tech-badge {
		background-color: var(--green);
		color: var(--black);
		font-size: 14px;
		padding: 0.15rem 0.35rem;
		border-radius: 6px;
		font-weight: bold;
	}
</style>
