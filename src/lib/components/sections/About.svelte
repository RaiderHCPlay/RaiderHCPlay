<script lang="ts">
  import { media } from '$lib/data/media';

  let accent = $state('');

  $effect(() => {
    const style = getComputedStyle(document.documentElement);

    accent = style.getPropertyValue('--accent').trim().replace('#', '');
  });
</script>

<div class="text-(--text)">
  <h1 class="text-(--text)">Something about me</h1>
  <article class="text-(--text)">
    Hi! I'm Paweł (AKA RaiderHCPlay). I'm a developer. My focus is on building good software that
    would be useful for at least a few people on this world. I mainly do stuff in the browser but
    I'm trying to also explore area outside of it thanks to Zig. For everyday I'm a student and a
    collector of stuff from my favourite franchises. I like programming (of course), playing video
    games, listening to music, watching movies and anime, looking at the moon (especially when it's
    full) and reading mangas.
  </article>

  <div>
    <h2 class="">Some of my favourites</h2>

    <div class="flex justify-around items-center">
      <div>
        <h3>Franchise</h3>

        <div
          class="tenor-gif-embed w-28 h-28"
          data-postid="22294707"
          data-share-method="host"
          data-aspect-ratio="1.15942"
          data-width="100%"
        >
          <a href="https://tenor.com/view/dead-space-gif-22294707">Dead Space GIF</a>from
          <a href="https://tenor.com/search/dead+space-gifs">Dead Space GIFs</a>
        </div>
        <p>Dead Space</p>
      </div>

      <div>
        <h3>Manga/Anime</h3>

        <div
          class="tenor-gif-embed h-28 w-28"
          data-postid="8461634906281469686"
          data-share-method="host"
          data-aspect-ratio="1.08261"
          data-width="100%"
        >
          <a href="https://tenor.com/view/jojo-bizarre-adventure-gif-8461634906281469686"
            >Jojo Bizarre Adventure Meme</a
          >from

          <a href="https://tenor.com/search/jojo+bizarre+adventure-memes"
            >Jojo Bizarre Adventure Memes</a
          >
        </div>

        <p>Jojo's Bizarre Adventure</p>
      </div>

      <div>
        <h3>OST</h3>

        <div
          class="tenor-gif-embed h-28 w-28"
          data-postid="9481613402119764555"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a
            href="https://tenor.com/view/p3r-p3-persona-3-persona-persona-3-reload-gif-9481613402119764555"
            >P3r Persona 3 GIF</a
          >from <a href="https://tenor.com/search/p3r-gifs">P3r GIFs</a>
        </div>

        <p>Persona 3 Reload</p>
      </div>
    </div>
  </div>
  <div>
    <h1>Media</h1>
    {#each media as media (media.name)}
      <a href={`${media.url}`} target="_blank">
        <img class="w-14 h-14" src={`${media.icon}/${accent}`} alt={`${media.name} logo`} />
      </a>
    {/each}
  </div>
</div>
