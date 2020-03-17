<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`toate-proiectele/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { proiect: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let proiect;
  import ProiectItem from "../../components/ProiectItem.svelte";
</script>

<style>
 
</style>

<svelte:head>
  <title>{proiect.title}</title>
</svelte:head>
<ProiectItem {proiect} />
