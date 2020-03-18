<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  export let segment;

  function doneaza() {
    goto("/doneaza");
  }

  function inchide() {
    var navMain = document.querySelector("#collapse-button");
    var toggler = document.querySelector("#navbarTogglerDemo02");
    console.log(toggler);
    if (hasClass(toggler, 'show')) {
      navMain.click();
    }

    // if (hasClass(navMain, "collapsed")) {
    //   navMain.click();
    // }
  }

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
</script>

<style>
  .selected {
    font-weight: 500;
  }
</style>

<div class="container">
  <div class="row">

    <div class="col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/" on:click={inchide}>demnitatea.ro</a>
        <button
          id="collapse-button"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a
                on:click={inchide}
                class="nav-link"
                class:selected={segment === '/'}
                href="/">
                Acasa
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li
              class="nav-item"
              class:active={segment === 'despre-noi'}
              on:click={inchide}>
              <a
                class="nav-link"
                class:selected={segment === 'despre-noi'}
                href="despre-noi">
                Despre noi
              </a>
            </li>
            <li class="nav-item" on:click={inchide}>
              <a
                class="nav-link"
                class:selected={segment === 'brauletul'}
                href="brauletul">
                Brâulețul
              </a>
            </li>
            <li class="nav-item">
              <a
                on:click={inchide}
                class="nav-link"
                class:selected={segment === 'toate-proiectele'}
                href="toate-proiectele">
                Toate proiectele
              </a>
            </li>
            <li class="nav-item">
              <a
                on:click={inchide}
                class="nav-link"
                class:selected={segment === 'contact'}
                href="contact">
                Contact
              </a>
            </li>
            <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-success my-2 my-sm-0" on:click={doneaza}>
              Donează
            </button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</div>
