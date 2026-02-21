<script lang="ts">
  import { media } from '$lib/data/media';

  let accent = $state('');

  $effect(() => {
    const style = getComputedStyle(document.documentElement);

    accent = style.getPropertyValue('--accent').trim().replace('#', '');
  });

  const gifs = [
    {
      name: 'Franchise',
      postId: '22294707',
      ratio: '1.15942',
      a1Link: 'https://tenor.com/view/dead-space-gif-22294707',
      a1Text: 'Dead Space GIF',
      a2Link: 'https://tenor.com/search/dead+space-gifs',
      a2Text: 'Dead Space GIFs',
      para: 'Dead Space'
    },
    {
      name: 'Manga/Anime',
      postId: '8461634906281469686',
      ratio: '1.08261',
      a1Link: 'https://tenor.com/view/jojo-bizarre-adventure-gif-8461634906281469686',
      a1Text: 'Jojo Bizarre Adventure Meme',
      a2Link: 'https://tenor.com/search/jojo+bizarre+adventure-memes',
      a2Text: 'Jojo Bizarre Adventure Memes',
      para: 'Jojo'
    },
    {
      name: 'OST',
      postId: '9481613402119764555',
      ratio: '1',
      a1Link:
        'https://tenor.com/view/p3r-p3-persona-3-persona-persona-3-reload-gif-9481613402119764555',
      a1Text: 'P3r Persona 3 GIF',
      a2Link: 'https://tenor.com/search/p3r-gifs',
      a2Text: 'P3r GIFs',
      para: 'Persona 3 Reload'
    }
  ];
</script>

<div class="text-(--text) bg-(--crust) text-center pb-7">
  <h1 class="text-3xl sm:text-5xl text-(--accent) mt-3 pt-7">Something about me</h1>
  <div class="mt-14 flex justify-evenly items-start">
    <article class="w-[40%]">
      Hi! I'm Paweł (AKA RaiderHCPlay). I'm a developer. My focus is on building good software that
      would be useful for at least a few people on this world. I mainly do stuff in the browser but
      I'm trying to also explore area outside of it thanks to Zig. For everyday I'm a student and a
      collector of stuff from my favourite franchises. I like programming (of course), playing video
      games, listening to music, watching movies and anime, looking at the moon (especially when
      it's full) and reading mangas.
    </article>
    <div class="flex flex-col justify-center items-center">
      <div>
        <h2 class="text-lg sm:text-2xl text-(--accent)">Some of my favourites</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 text-center p-6 gap-3">
          {#each gifs as gif (gif.name)}
            <div>
              <h3 class="mb-0.5">{gif.name}</h3>
              <div
                class="tenor-gif-embed w-24.5 h-21"
                data-postid={gif.postId}
                data-share-method="host"
                data-aspect-ratio={gif.ratio}
                data-width="100%"
              >
                <a href={gif.a1Link}>
                  {gif.a1Text}
                </a>from <a href={gif.a2Link}>{gif.a2Text}</a>
              </div>
              <p>{gif.para}</p>
            </div>
          {/each}
        </div>
      </div>
      <div class="w-[50%]">
        <h1 class="text-lg sm:text-2xl text-(--accent) mb-2.5">Media</h1>
        <div class="flex justify-evenly items-center">
          {#each media as media (media.name)}
            <a href={`${media.url}`} target="_blank">
              <img class="w-14 h-14" src={`${media.icon}/${accent}`} alt={`${media.name} logo`} />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
