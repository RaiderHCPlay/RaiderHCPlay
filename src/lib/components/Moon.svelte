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
  } from '$lib/components/moons';

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

  let moonData: MoonData | null = null;
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
    if (!moonData) return;
    const theme = moonData.phase === 'Full Moon' ? 'moon' : 'normal';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('raiderhcplay-website-theme', theme);
  }
</script>

<div
  class="md:fixed md:top-4 md:left-4 flex items-center justify-start pt-[15px] max-[310px]:flex-col"
>
  {#if moonData}
    {#each moons as moon (moon.name)}
      {#if moon.name === moonData.phase}
        <svelte:component this={moon.component} />

        <div
          class="ml-[15px] text-center text-(--accent) text-[clamp(12px,2vw,16px)] max-[310px]:ml-0 max-[310px]:mt-4"
        >
          <h3 class="mt-[5px] font-normal leading-tight">Moon phase: {moonData.phase}</h3>
          <h3 class="mt-[5px] font-normal leading-tight">
            Current moon age: {moonData.age.toFixed(1)} days
          </h3>

          {#if daysToFullMoon > 0}
            <h3 class="mt-[5px] font-normal leading-tight">
              Days until full moon: {daysToFullMoon.toFixed(1)}
            </h3>
          {:else}
            <div class="mt-[5px]">
              <h3 class="font-normal leading-tight">It's full moon again.</h3>
              <h3 class="font-normal leading-tight">Crazy how time flies, isn't it?</h3>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  {:else}
    <div class="animate-pulse italic opacity-70">Watching moon...</div>
  {/if}
</div>
