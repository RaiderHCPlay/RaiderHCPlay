<script>
  import Spotify from '$lib/components/Spotify.svelte';
  import About from '$lib/components/sections/About.svelte';
  let { data } = $props();
</script>

<div class="h-[90%] text-center flex flex-col justify-center items-center">
  <h1 class="text-(--accent) text-3xl sm:text-5xl mb-2">RaiderHCPlay</h1>
  <h2 class="text-(--accent) text-lg sm:text-2xl">Just a developer</h2>
  <Spotify data={data.initialSpotify} />
</div>
<About />
