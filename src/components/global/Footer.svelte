<script lang="ts">
	import { onMount } from 'svelte';

	let year: number;
	onMount(() => {
		year = new Date().getFullYear();
	});
</script>

<div class="footer-container">
	<footer>© {year} RaiderHCPlay</footer>
</div>
