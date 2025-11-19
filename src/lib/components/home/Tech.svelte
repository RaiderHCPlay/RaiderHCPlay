<script lang="ts">
	import Loading from '../global/Loading.svelte';
	import { onMount } from 'svelte';

	let tech: Icons[] = [];
	let loading = false;
	onMount(() => {
		loading = true;
		fetch('/icons.json', {}).then(async (res) => {
			if (res.ok) {
				tech = await res.json();
				loading = false;
			}
		});
	});
</script>

{#if tech}
	<div class="tech-wrapper">
		<h2>Technology</h2>
		<div class="tech-content">
			<div class="tech-div">
				<h3>Languages</h3>
				{#each tech as lang (lang.name)}
					{#if lang.category === 'language'}
						<div class="lang">
							<img src={lang.icon} alt={`${lang.name} logo`} width="35" height="35" />
							{lang.name}
						</div>
					{/if}
				{/each}
			</div>
			<div class="tech-div">
				<h3>Frameworks</h3>
				{#each tech as lang (lang.name)}
					{#if lang.category === 'framework'}
						<div class="lang">
							<img src={lang.icon} alt={`${lang.name} logo`} width="35" height="35" />
							{lang.name}
						</div>
					{/if}
				{/each}
			</div>
			<div class="tech-div">
				<h3>Exploring</h3>
				{#each tech as lang (lang.name)}
					{#if lang.category === 'exploring'}
						<div class="lang">
							<img src={lang.icon} alt={`${lang.name} logo`} width="35" height="35" />
							{lang.name}
						</div>
					{/if}
				{/each}
			</div>
			<div class="tech-div">
				<h3>Setup</h3>
				{#each tech as lang (lang.name)}
					{#if lang.category === 'setup'}
						<div class="lang">
							<img src={lang.icon} alt={`${lang.name} logo`} width="35" height="35" />
							{lang.name}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{:else if loading}
	<Loading />
{/if}
