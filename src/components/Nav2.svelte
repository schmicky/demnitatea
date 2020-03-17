<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<div class="row">

  <div class="col-12">
    <div class="text-center">
      <nav>
        <ul>
          <li>
            <a
              aria-current={segment === undefined ? 'page' : undefined}
              href=".">
              Acasa
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'despre-noi' ? 'page' : undefined}
              href="despre-noi">
              Despre noi
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'brauletul' ? 'page' : undefined}
              href="brauletul">
              Brâulețul
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'toate-proiectele' ? 'page' : undefined}
              href="toate-proiectele">
              Toate proiectele
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'doneaza' ? 'page' : undefined}
              href="doneaza">
              Doneaza
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'contact' ? 'page' : undefined}
              href="contact">
              Contact
            </a>
          </li>

          <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
          <!-- <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
        </ul>
      </nav>
    </div>
  </div>
</div>
