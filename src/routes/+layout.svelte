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
    --base: #0a0a0a;
    --mantle: #050505;
    --crust: #000000;

    --text: #e0e0e0;
    --subtext1: #b8b8b8;
    --subtext0: #a5a5a5;
    --overlay2: #8c8c8c;
    --overlay1: #737373;
    --overlay0: #595959;
    --surface2: #3d3d3d;
    --surface1: #2a2a2a;
    --surface0: #1f1f1f;

    --rosewater: #a0aec0;
    --flamingo: #a0aec0;
    --pink: #bc2b2b;
    --mauve: #a0aec0;
    --red: #bc2b2b;
    --maroon: #bc2b2b;
    --peach: #d4a373;
    --yellow: #d4a373;
    --green: #4a6352;
    --teal: #a0aec0;
    --sky: #a0aec0;
    --sapphire: #a0aec0;
    --blue: #4a5568;
    --lavender: #a0aec0;
  }
  :global([data-theme='moon']) {
    --base: #050a0e;
    --mantle: #03070b;
    --crust: #010305;

    --text: #c5f1ff;
    --subtext1: #82a3ac;
    --subtext0: #5f7e85;

    --surface2: #1a2e33;
    --surface1: #122126;
    --surface0: #0d181c;

    --overlay2: #2d4f56;
    --overlay1: #1f363b;
    --overlay0: #142427;

    --rosewater: #c5f1ff;
    --flamingo: #d35c9e;
    --pink: #d35c9e;
    --mauve: #e4fd32;
    --red: #bc2b2b;
    --maroon: #e04f5f;
    --peach: #d4a373;
    --yellow: #e4fd32;
    --green: #81cb1e;
    --teal: #5bff8f;
    --sky: #3df3ff;
    --sapphire: #00d2ff;
    --blue: #1e66c2;
    --lavender: #a0aec0;
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
