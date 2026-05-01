<script>
  let { data } = $props();

  const size = 48;
  const r = size / 2;
  const cx = r;
  const cy = r;

  const angle = data.phase * 2 * Math.PI;
  const k = Math.cos(angle);

  const rx = Math.max(0.001, r * Math.abs(k));

  const path = `
M ${cx} ${cy - r}
A ${r} ${r} 0 1 1 ${cx} ${cy + r}
A ${rx} ${r} 0 1 ${data.isWaxing ? 0 : 1} ${cx} ${cy - r}
Z
`;
</script>

<div
  class="fixed top-4 left-4 max-md:left-1/2 max-md:-translate-x-1/2 z-50 bg-(--surface0) border border-(--overlay0) rounded-xl p-4"
>
  <div class="flex items-center gap-4">
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle {r} {cx} {cy} fill="var(--base)" />
      <path d={path} fill="var(--mauve)" />
    </svg>

    <div class="flex flex-col gap-0.5 min-w-0">
      <div class="text-xs text-(--subtext1)">
        {data.phaseName}
      </div>
      <div class="text-sm text-(--text)">
        Age: {data.age.toFixed(2)}
      </div>
      {#if data.phaseName !== 'Full Moon'}
        <div class="text-xs text-(--mauve)">
          {data.daysToFullMoon.toFixed(2)} days to full
        </div>
      {:else}
        <div class="text-xs text-(--mauve)">It's full moon again</div>
      {/if}
    </div>
  </div>
</div>
