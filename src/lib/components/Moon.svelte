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
  import { setTheme } from '$lib/data/theme';
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

  let { data } = $props();

  const MoonSVG = moons.find((m) => m.name === data.phase)?.component;

  setTheme(data.theme);
</script>

<div
  class="md:fixed md:top-4 md:left-4 flex items-center justify-start pt-[15px] max-[310px]:flex-col"
>
  {#if data}
    <MoonSVG />
    <div
      class="ml-[15px] text-center text-(--accent2) text-[clamp(12px,2vw,16px)] max-[310px]:ml-0 max-[310px]:mt-4"
    >
      <h3 class="mt-[5px] font-normal leading-tight">Moon phase: {data.phase}</h3>
      <h3 class="mt-[5px] font-normal leading-tight">
        Current moon age: {data.age.toFixed(1)} days
      </h3>

      {#if data.daysToFullMoon > 0}
        <h3 class="mt-[5px] font-normal leading-tight">
          Days until full moon: {data.daysToFullMoon.toFixed(1)}
        </h3>
      {:else}
        <div class="mt-[5px]">
          <h3 class="font-normal leading-tight">It's full moon again.</h3>
          <h3 class="font-normal leading-tight">Crazy how time flies, isn't it?</h3>
        </div>
      {/if}
    </div>
  {:else}
    <div class="animate-pulse italic opacity-70">Watching moon...</div>
  {/if}
</div>
