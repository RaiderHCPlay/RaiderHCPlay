<script lang="ts">
	import {
		FullMoon,
		LastQuarterMoon,
		NewMoon,
		WaningGibbousMoon,
		WaxingGibbousMoon,
		WaningCrescentMoon,
		WaxingCrescentMoon,
		FirstQuarterMoon
	} from '../moons';

	import { onMount } from 'svelte';

	type MoonData = {
		phase: string;
		age: number;
	};

	let moons = [
		{ name: 'Full Moon', component: FullMoon },
		{ name: 'Last Quarter', component: LastQuarterMoon },
		{ name: 'New Moon', component: NewMoon },
		{ name: 'Waning Gibbous', component: WaningGibbousMoon },
		{ name: 'Waxing Gibbous', component: WaxingGibbousMoon },
		{ name: 'Waning Crescent', component: WaningCrescentMoon },
		{ name: 'Waxing Crescent', component: WaxingCrescentMoon },
		{ name: 'First Quarter', component: FirstQuarterMoon }
	];

	let moonData: MoonData;
	let daysToFullMoon: number = 0;

	onMount(async () => {
		const response = await fetch('/api/moons', { method: 'GET' });
		const data = await response.json();
		moonData = data;
		const cycleDays = 29.53058867;
		const fullMoonAge = cycleDays / 2;

		if (data.phase === 'Full Moon') {
			daysToFullMoon = 0;
		} else if (data.age < fullMoonAge) {
			daysToFullMoon = fullMoonAge - data.age;
		} else {
			daysToFullMoon = cycleDays - data.age + fullMoonAge;
		}
		changeTheme();
	});

	function changeTheme() {
		let theme = 'normal';

		if (moonData.phase === 'Full Moon') {
			theme = 'moon';
		} else {
			theme = 'normal';
		}
		document.documentElement.removeAttribute('data-theme');
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('data-theme', theme);
	}
</script>

<div class="moon-section">
	{#if moonData}
		{#each moons as moon (moon.name)}
			{#if moon.name === moonData.phase}
				<svelte:component this={moon.component} />
				<div class="moon-info">
					<h3>Moon phase: {moonData.phase}</h3>
					<h3>Current moon age: {moonData.age.toFixed(1)} days</h3>
					{#if daysToFullMoon > 0}
						<h3>Days until full moon: {daysToFullMoon.toFixed(1)}</h3>
					{:else}
						<h3>It's full moon again.</h3>
						<h3>Crazy how time flies.</h3>
						<a
							href="https://open.spotify.com/track/3Jl2LQmRwbXEF2lO1RTvxn?si=c168ee4b166f4514"
							target="_blank"><h3>Full Moon Full Life - Persona 3 Reload</h3></a
						>
					{/if}
				</div>
			{/if}
		{/each}
	{:else}
		<div>Watching moon...</div>
	{/if}
</div>

<style>
	.moon-section {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top: 15px;

		@media screen and (max-width: 700px) {
			flex-direction: column;
		}
	}

	.moon-info {
		margin-left: 15px;
		font-size: clamp(12px, 2vw, 16px);
		color: var(--text);
		text-align: center;
	}
	a {
		text-decoration: none;
		color: var(--accent);

		&:hover {
			color: var(--overlay2);
		}
	}
	h3 {
		font-size: clamp(12px, 2vw, 16px);
		margin: 5px 0 0 0;
	}
</style>
