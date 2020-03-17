
<script>
  export let tip = "caritate";
  export let proiecte;

  const result = proiecte.filter(proiect => proiect.tip === tip);
</script>

<style>

span {
    font-style: italic;
}
</style>

{#each result as proiect}
<div class="mr-2">
<span class="data">{proiect.data}</span> <a rel='prefetch' href='toate-proiectele/{proiect.slug}'>{proiect.title}</a>
</div>
<hr>
{/each}
