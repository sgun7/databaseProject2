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
        <router-link to="/moreinfo" style="text-decoration: none; color: white;">More Info</router-link> | | | |
        <span v-if="loggedIn">
          <router-link to="/admin" style="text-decoration: none; color: white;">Admin Page</router-link> | | | |
        </span>
      </div>
    </div>
  </nav>
    <router-view/>
    <bottom-footer style="position:fixed; bottom:0;"></bottom-footer>
  </div>
</template>

<script>
// import TopHeader from "./components/Top-Header.vue"
import BottomFooter from "./components/Bottom-Footer.vue"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default ({
  components: {'bottom-footer': BottomFooter},
  data(){
    return {
      loggedIn: false,
    }
  },
  created()
  {
    firebase.auth().onAuthStateChanged(user => {
            if(user){
              this.loggedIn = true;
            }
            else{
            this.loggedIn = false;
            }
    }) 
  }

})
</script>
<style scoped>

</style>
