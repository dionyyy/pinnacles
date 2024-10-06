<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <router-link to="/" class="navbar-brand"><img src="./assets/images/logopinnacle.png"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item p-3">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to="about" class="nav-link" href="#">About</router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to="services" class="nav-link" href="#">Services</router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to="contact" class="nav-link" href="#">Contact us</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<body>
     <router-view/>
</body>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-nav .nav-item .nav-link {
  margin-left:30px;
  margin-right:30px;
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
  color: #f0662e;
}
</style>
