<script>
export default {
  name: 'App', // Il nome del componente Vue
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Sezione Header -->
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">

          <!-- Lista di link per la navigazione -->
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">

              <!-- Link alla Home -->
              <router-link class="nav-link active" to="/" aria-current="page">Home<span
                  class="visually-hidden">(current)</span></router-link>
            </li>
            <li class="nav-item">

              <!-- Link alla pagina "About" -->
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">

              <!-- Link alla pagina "Blog" -->
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">

              <!-- Link alla pagina "Contacts" -->
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
          </ul>

          <!-- Pulsante di accesso all'area admin -->
          <div class="admin">
            <a href="http://127.0.0.1:8000/admin" class="btn" target="__blank">
              Admin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Sezione Main -->
  <main class="">

    <!-- Componente che visualizza la vista corrente in base alla rotta -->
    <router-view></router-view>
  </main>

  <!-- Sezione Footer -->
  <footer class="py-5 bg-dark text-light">
    <div class="container d-flex justify-content-center">
      <div class="row gap-5">
        <div class="col">
          <h3 class="text-center">Technologies</h3>
          <ul class="list-unstyled d-flex gap-2">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-html5"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-css3-alt"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-sass"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-js"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-php"></i></a></li>
          </ul>
        </div>
        <div class="col">
          <h3 class="text-center">Frameworks</h3>
          <ul class="list-unstyled d-flex gap-4">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-bootstrap"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-vuejs"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-laravel"></i></a></li>
          </ul>
        </div>
        <div class="col">
          <h3 class="text-center">Tools</h3>
          <ul class="list-unstyled d-flex gap-2">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-node"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-git-alt"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-github"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-solid  fa-2x fa-database"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <footer class="py-5 bg-dark text-light">
    <div class="container">
      <div class="row">

        <!-- Colonna 1 del footer -->
        <div class="col">
          <h3>Lorem.</h3>
          <ul class="list-unstyled">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
          </ul>
        </div>

        <!-- Colonna 2 del footer -->
        <div class="col">
          <h3>Deserunt?</h3>
          <ul class="list-unstyled">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
          </ul>
        </div>

        <!-- Colonna 3 del footer -->
        <div class="col">
          <h3>Voluptatibus.</h3>
          <ul class="list-unstyled">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
