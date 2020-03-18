<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`toate-proiectele.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import ProiectList from "../components/ProiectList.svelte";
  import { goto } from "@sapper/app";
  export let posts;

  function doneaza() {
    goto("/doneaza");
  }
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5em;
    font-weight: 200;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }

  .motto {
    font-size: 2em;
  }
  .motto span {
    font-style: italic;
  }

  .prezentare {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .prezentare a {
    text-decoration: underline;
    color: #fff;
  }
  .doneaza1 {
    margin: 10px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #28a745;
    border-color: #28a745;
    font-weight: 400;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Fundatia demnitatea pontica</title>
</svelte:head>

<div>
  <img
    src="home-bg.jpg"
    class="img-fluid"
    style="width: 100%; height: auto; border-radius: 7px;"
    alt="Responsive image" />
</div>
<h1>Fundația Demnitatea Pontică</h1>
<p class="motto">
  <span>"În caritate nu există exces."</span>
  - Francis Bacon
</p>

<div class="row prezentare">
  <div class="col-md-8">
    <h5>Despre fundatie</h5>
    Fundatia Demnitatea Pontica sustine proiecte punctuale de caritate si
    proiectul cultural Brauletul. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Amet, veniam! Officia labore ut consequuntur dicta
    quibusdam praesentium assumenda nobis numquam?
  </div>
  <div class="col-md-3 doneaza1 mb-4" on:click={doneaza}>
    Contributia ta inseamna foarte mult pentru cei aflati in dificultate.
    Doneaza.
  </div>
</div>

<div class="row">

  <div class="col-md-6">
    <h4>Proiecte caritate</h4>
    <ProiectList proiecte={posts} tip="caritate" />
  </div>

  <div class="col-md-6">
    <h4>Brâulețul</h4>
    <ProiectList proiecte={posts} tip="brauletul" />
  </div>
</div>
