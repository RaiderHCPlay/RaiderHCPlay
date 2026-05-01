<script>
  import Spotify from '$lib/components/Spotify.svelte';
  let { data } = $props();
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
  <div class="flex justify-center mb-8">
    <img
      src="https://avatars.githubusercontent.com/u/170134946?v=4"
      alt="RaiderHCPlay Avatar"
      class="w-32 h-32 rounded-full border-4 border-(--mauve)"
    />
  </div>

  <h1 class="text-6xl md:text-8xl mb-6 tracking-tight text-(--text)">RaiderHCPlay</h1>

  <p class="text-2xl md:text-3xl mb-8 text-(--subtext0)">Just a developer</p>

  <Spotify data={data.initialSpotify} />
</div>
