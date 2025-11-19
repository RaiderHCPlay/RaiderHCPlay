<script lang="ts">
	let { children } = $props();
	import Footer from '$lib/components/global/Footer.svelte';
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
		--accent: #79d6fc;
		--bg: #181822;
		--text: #c9d3ea;
		--subtext0: #a3aec9;
		--subtext1: #7d89a6;
		--crust: #0c0b11;
		--mantle: #12121a;
		--surface0: #2a2937;
		--surface1: #353546;
		--surface2: #403f55;
		--overlay0: #4a4963;
		--overlay1: #55546f;
		--overlay2: #605f7a;
	}

	:global([data-theme='moon']) {
		--accent: #68c792;
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
