
<script>
import { goto } from '@sapper/app';

 export let segment;

function doneaza(){
goto('/doneaza');
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
  <a class="navbar-brand" href="/">demnitatea.ro</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" class:selected={segment === "/"} href="/">Acasa <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" class:selected={segment === "despre-noi"}  href="despre-noi">Despre noi</a>
      </li>
        <li class="nav-item">
        <a class="nav-link" class:selected={segment === "brauletul"} href="brauletul">Brâulețul</a>
      </li>
        <li class="nav-item">
        <a class="nav-link"  class:selected={segment === "toate-proiectele"} href="toate-proiectele">Toate proiectele</a>
      </li>
        <li class="nav-item">
        <a class="nav-link"  class:selected={segment === "contact"} href="contact">Contact</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-success my-2 my-sm-0" type="submit" on:click={doneaza}>Donează</button>
    </form>
  </div>
</nav>
    </div>
  </div>
</div>
