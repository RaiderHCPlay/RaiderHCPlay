<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '../global/Loading.svelte';

	let projects: Projects[] = [];
	let loading = false;

	onMount(() => {
		loading = true;
		fetch('/projects.json').then(async (res) => {
			if (res.ok) {
				projects = await res.json();
			}
			loading = false;
		});
	});
</script>

{#if projects && projects.length > 0}
	<div class="projects-wrapper">
		<h2>Projects</h2>
		<div class="projects-content">
			{#each projects as project (project.name)}
				<div class="project">
					<div class="project-top-content">
						<a href={project.github} target="_blank">
							{project.name}
						</a>
						<article>
							{project.description}
							{#if project.sublinks}
								{#each project.sublinks as sublink (sublink.url)}
									<a href={sublink.url} target="_blank">{sublink.name}</a>
								{/each}
							{/if}
						</article>
					</div>
				</div>
			{/each}
		</div>
	</div>
{:else if loading}
	<Loading />
{/if}
