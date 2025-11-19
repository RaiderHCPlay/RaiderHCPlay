<script lang="ts">
	import Loading from '../global/Loading.svelte';
	import { onMount } from 'svelte';

	let media: Media[] = [];
	let loading = false;
	onMount(() => {
		loading = true;
		fetch('/media.json', {}).then(async (res) => {
			if (res.ok) {
				media = await res.json();
				loading = false;
			}
		});
	});
</script>

{#if media}
	<div class="media-content">
		{#each media as media (media.name)}
			<a target="_blank" href={`${media.url}`}>
				<svg
					role="img"
					viewBox="0 0 24 24"
					width="40"
					height="40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>{media.name}</title>
					<path d={`${media.path}`} />
				</svg>
			</a>
		{/each}
	</div>
{:else if loading}
	<Loading />
{/if}
