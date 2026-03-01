<script lang="ts">
  import Moon from '$lib/components/Moon.svelte';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { init } from '$lib/data/theme';

  let { data, children } = $props();
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';

  init();
  injectSpeedInsights();
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>RaiderHCPlay</title>
  <meta name="google-site-verification" content="0ElUOcTRwi3dAAmnocu9z-7CzQ6YFJHdDZ3TCV16sjo" />
  <link rel="icon" href="https://avatars.githubusercontent.com/u/170134946?v=4" />
  <meta
    name="description"
    content="Dev portfolio of RaiderHCPlay - a student and a web developer"
  />
  <link rel="author" href="https://github.com/RaiderHCPlay" />
  <meta name="author" content="RaiderHCPlay" />
  <meta property="og:title" content="RaiderHCPlay" />
  <meta property="og:description" content="Dev portfolio of RaiderHCPlay" />
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/170134946?v=4" />
  <meta property="og:url" content="https://raiderhcplay.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="RaiderHCPlay" />
  <meta property="og:locale" content="en_US" />
  <link rel="canonical" href="https://raiderhcplay.vercel.app/" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />
  <meta
    name="keywords"
    content="RaiderHCPlay, web developer, portfolio, solo dev, developer portfolio, SvelteKit, Svelte"
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "RaiderHCPlay",
      "url": "https://raiderhcplay.vercel.app/",
      "image": "https://avatars.githubusercontent.com/u/170134946?v=4",
      "description": "Dev portfolio of RaiderHCPlay - a student and a developer",
      "sameAs": ["https://github.com/RaiderHCPlay", "https://wakatime.com/@RaiderHCPlay"]
    }
  </script>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RaiderHCPlay" />
  <meta
    name="twitter:description"
    content="Dev portfolio of RaiderHCPlay - a student and a web developer"
  />
  <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/170134946?v=4" />
  <script type="text/javascript">
    (() => {
      const theme = localStorage.getItem('raiderhcplay-website-theme') || 'normal';
      document.documentElement.dataset.theme = theme;
    })();
  </script>

  <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
</svelte:head>

<div class="absolute left-[45px] top-[20px] max-[310px]:left-1/2 max-[310px]:-translate-x-1/2">
  <Moon data={data.moon} />
</div>
{@render children?.()}
<Footer />

<style>
  :global([data-theme='normal']) {
    --accent2: #46d8f8;
    --accent: #0a30f9;

    --base: #050912;
    --text: #e6f1ff;

    --subtext0: #c6d6e6;
    --subtext1: #7f9bb8;

    --crust: #02040a;
    --mantle: #0a1224;

    --surface0: #0f1c33;
    --surface1: #132445;
    --surface2: #18305c;

    --overlay0: #1c2a44;
    --overlay1: #24365a;
    --overlay2: #2e4572;

    --pink: #c85f7a;
    --purple: #6f6bd6;
    --sapphire: #19bfff;

    --yellow: #f0d96b;
    --peach: #f29a7f;
    --green: #5ed39c;
    --blue: #0a30f9;

    --red: #d2556a;
    --black: #000000;
  }
  :global([data-theme='moon']) {
    --accent: #81cb1e;
    --accent2: #e4fd32;

    --base: #070d1f;
    --text: #e4f4ff;

    --subtext0: #c5daee;
    --subtext1: #9bb4cc;

    --crust: #030712;
    --mantle: #0f1a33;

    --surface0: #14264a;
    --surface1: #1b3270;
    --surface2: #224092;

    --overlay0: #2b4fa3;
    --overlay1: #3a63c7;
    --overlay2: #4a7dff;

    --pink: #ff6fb4;
    --purple: #9a86ff;
    --sapphire: #5bff8f;

    --yellow: #f5e97a;
    --peach: #ffb19a;
    --green: #6cf7b2;
    --blue: #2a7dd3;

    --red: #ff5e6c;
    --black: #040812;
  }
  :global(body) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  :global(html) {
    height: 100%;
    background-color: var(--base);
    overscroll-behavior: none;
  }
</style>
