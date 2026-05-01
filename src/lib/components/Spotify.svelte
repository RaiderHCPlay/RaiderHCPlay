<script lang="ts">
  import { onMount } from 'svelte';
  let { data } = $props();

  let spotify = $state(data);

  onMount(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/spotify/playing');
      if (response.ok) {
        spotify = await response.json();
      }
    }, 5000);
    return () => clearInterval(interval);
  });
</script>

<a
  href={spotify?.trackUrl}
  target="_blank"
  class="flex items-center w-full bg-(--surface0) border-(--overlay0) rounded-xl max-w-md border p-4 gap-4"
>
  <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g><g id="SVGRepo_iconCarrier">
      <path
        d="M2 11.9405C2 17.4167 6.52381 21.9405 12 21.9405C17.4762 21.9405 22 17.4167 22 11.9405C22 6.46429 17.4762 2 12 2C6.52381 2 2 6.46429 2 11.9405ZM15.6905 16.5833C13.369 15.1548 10.3929 14.7976 6.94048 15.5714C6.10714 15.6905 5.9881 14.5 6.70238 14.381C10.5119 13.4881 13.7262 13.9048 16.3452 15.5119C17 15.9286 16.3452 16.9405 15.6905 16.5833ZM16.7024 13.9048C14.0238 12.2381 9.91667 11.7619 6.7619 12.7143C5.75 13.0119 5.39286 11.4643 6.34524 11.2262C9.97619 10.1548 14.4405 10.6905 17.5357 12.5952C18.369 13.131 17.5357 14.4405 16.7024 13.9048ZM6.28571 9.67857C5.27381 10.0357 4.61905 8.30952 5.75 7.89286C9.2619 6.82143 15.2143 7 18.9048 9.20238C19.9167 9.73809 18.9643 11.4048 17.8929 10.8095C14.6786 8.90476 9.32143 8.72619 6.28571 9.67857Z"
        class="fill-(--mauve)"
      ></path>
    </g></svg
  >
  {#if spotify?.error || !spotify?.isPlaying}
    <div class="flex-1 text-center">
      <p class="text-(--subtext0)">Nothing playing right now</p>
    </div>
  {:else if spotify?.isPlaying}
    <img class="w-14 h-14 rounded-lg" src={spotify.albumImageUrl} alt="Spotify album" />
    <div class="flex-1 min-w-0">
      <p class="truncate mb-1 text-(--text)">Now playing: {spotify.title}</p>
      <p class="truncate text-(--subtext0)">By: {spotify.artist}</p>
    </div>
  {/if}
</a>
