<template>
  <div id="app" class="ma-3 text-center">
      <!-- <top-header></top-header> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/secret">Secret</router-link> |
      <router-link to="/data">Data</router-link> |
    </div> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="main-bar">
    <a class="navbar-brand" href="#">Covid Tracker</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" id="nav">
        <router-link to="/" style="text-decoration: none; color: white;">Home</router-link> | | | |
        <router-link to="/about" style="text-decoration: none; color: white;">About</router-link> | | | |
        <router-link to="/register" style="text-decoration: none; color: white;">Register</router-link> | | | |
        <router-link to="/login" style="text-decoration: none; color: white;">Login</router-link> | | | |
        <router-link to="/secret" style="text-decoration: none; color: white;">Secret</router-link> | | | |
        <router-link to="/data" style="text-decoration: none; color: white;">Data</router-link> | | | |
      </div>
    </div>
  </nav>
    <router-view/>
  </div>
</template>

<script>
// import TopHeader from "./components/Top-Header.vue"
// export default ({
//   components: {'top-header': TopHeader}
// })
</script>
<style scoped>

</style>
