<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	let { children } = $props();

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
			"description": "Dev portfolio of RaiderHCPlay - a student and a web developer",
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
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('data-theme', theme);
		})();
	</script>
</svelte:head>

{@render children?.()}
<Footer />

<style>
	:global([data-theme='normal']) {
		--accent: #46d8f8;
		--accent2: #0a30f9;

		--bg: #070d16;
		--text: #e5eef9;

		--subtext0: #d3d8de;
		--subtext1: #89a3be;

		--crust: #03020b;
		--mantle: #081656;

		--surface0: #2d6388;
		--surface1: #3a537e;
		--surface2: #4a95bb;

		--overlay0: #171f2b;
		--overlay1: #274a77;
		--overlay2: #7a93ad;

		--pink: #ac5c78;
		--purple: #716998;
		--sapphire: #11acf0;

		--yellow: #e6d163;
		--peach: #e89a7a;
		--green: #68c792;
		--blue: #0a30f9;

		--red: #bc5570;
		--black: #000000;
	}

	:global([data-theme='moon']) {
		--accent: #81cb1e;
		--accent2: #e4fd32;
		--bg: #0a0e1a;
		--text: #d3e7f7;
		--subtext0: #b7c9db;
		--subtext1: #91a0b5;
		--crust: #04070c;
		--mantle: #0c111a;
		--surface0: #182133;
		--surface1: #222d44;
		--surface2: #2c3752;
		--overlay0: #374363;
		--overlay1: #415075;
		--overlay2: #4c5d88;
		--pink: #d35c9e;
		--purple: #8c7cf0;
		--sapphire: #5bff8f;
		--yellow: #e6d163;
		--peach: #e89a7a;
		--green: #68c792;
		--blue: #2a7dd3;
		--red: #e04f5f;
		--black: #05070b;
	}

	:global(body) {
		background-color: var(--bg);
		color: var(--text);
		width: 100%;
		height: 100%;
		margin: 0;
	}
	:global(html) {
		height: 100%;
	}
</style>
