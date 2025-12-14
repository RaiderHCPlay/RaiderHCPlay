<div class="about-container">
	<h2>About me</h2>
	<p>
		Hello, I'm RaiderHCPlay, a full stack developer. In programming time, I'm writing code mainly in <strong
			id="tech">TypeScript</strong
		>
		but I also experiment with <strong id="tech">C++</strong> and <strong id="tech">Ruby</strong>.
		From frameworks my personal choice is <strong id="tech">SvelteKit</strong>, but I can also make
		stuff in <strong id="tech">React/Next.js</strong>. For the rest of time, I'm a student,
		collector of stuff from my favourite franchises, manga/anime enjoyer and a gamer. I also love
		gazing at the moon, especially when it's full.
	</p>
</div>

<style>
	.about-container {
		display: flex;
		justify-content: start;
		text-align: left;
		flex-direction: column;

		@media screen and (max-width: 310px) {
			text-align: center;
		}
	}

	h2 {
		margin-bottom: 0;
	}

	p {
		font-size: clamp(12px, 1.8vw, 16px);
		line-height: 1.5;
	}

	#tech {
		color: var(--accent);
		font-weight: bold;
	}
</style>
