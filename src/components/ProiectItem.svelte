<script>
  export let proiect;

  const d = new Date(proiect.data);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
    d
  );
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  h1 {
    font-size: 1.5em;
  }

  a {
    text-decoration: underline;
  }
</style>

<h1 class="mt-4">{proiect.title}</h1>

<div class="content mt-4">
  {#if proiect.foto && proiect.foto[0]}
    <div class="mx-auto mt-4">
      <img
        class="rounded mx-auto d-block"
        src="foto/{proiect.foto[0]}"
        style="max-width:100%; height: auto;"
        alt="Responsive image" />
    </div>
  {/if}
  <div class="mt-4">
    {@html proiect.html}
  </div>

  {#if proiect.suma}
    <p>Suma alocata: {proiect.suma}</p>
  {/if}

  <p>Data: {da}/{mo}/{ye}</p>

  {#if proiect.linkExtern}
    <a target="_blank" href={proiect.linkExtern.link}>{proiect.linkExtern.titlu}</a>
  {/if}

</div>
