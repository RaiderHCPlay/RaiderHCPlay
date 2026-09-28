<script>
  import Hero from '$lib/components/Hero.svelte';
  let { data } = $props();
</script>

<Hero {data} />
