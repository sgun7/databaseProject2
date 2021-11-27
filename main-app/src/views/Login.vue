<template>
  <div>
    <top-header></top-header>
    <div class="mainpage">
    Login
    <form @submit.prevent="pressed">
        <div>
          <input type="email" placeholder="email" v-model="email">
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password" />
      </div>
      <v-btn type="submit" elevation="7">Login</v-btn>
    </form>
    <div class="error" v-if="error">{{newErrorMessage}}</div>
  </div>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import TopHeader from "../components/Top-Header.vue"

export default {
  components: {'top-header': TopHeader},
  data() {
        return {
            email: "",
            password: '',
            error: '',
            newErrorMessage: "Invalid Credentials!"
        }
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
        console.log(val);
        this.$router.replace({name: "Home"})
      } catch (err) {
        console.log(err)
        this.error = err;
      }
    }
  }
}
</script>

<style scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
.mainpage
{
  position: relative;
  top:200px;
}
</style>