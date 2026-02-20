<script>
  import Spotify from '$lib/components/Spotify.svelte';
  import About from '$lib/components/sections/About.svelte';
  let { data } = $props();
</script>

<div class="bg-(--base) h-full w-full">
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-(--accent) text-[clamp(35px, 3vw, 85px)] mb-2.5">RaiderHCPlay</h1>
    <h2 class="text-(--accent) text-[clamp(15px, 2vw, 25px)]">Just a developer</h2>
    <Spotify data={data.initialSpotify} />
  </div>
  <About />
</div>
