<script lang="ts">
	import { onMount } from 'svelte';

	let year: number;
	onMount(() => {
		year = new Date().getFullYear();
	});
</script>

<div>
	<footer>© {year} RaiderHCPlay</footer>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	footer {
		font-size: clamp(15px, 2vw, 20px);
	}
</style>
