<template>
  <div id="app" class="ma-3 text-center">
      <top-header></top-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/secret">Secret</router-link> |
      <router-link to="/data">Data</router-link> |
    </div>
    <router-view/>
    <div style="height:425px;"></div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopHeader from "./components/Top-Header.vue"
import BottomFooter from "./components/Bottom-Footer.vue"

export default ({
  components: {'top-header': TopHeader, 'bottom-footer': BottomFooter}
})
</script>
