<template>
  <div>
    Login
    <form @submit.prevent="pressed">
        <div>
          <input type="email" placeholder="email" v-model="email">
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  data() {
        return {
            email: "",
            password: '',
            error: ''
        }
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
        console.log(val);
        this.$router.replace({name: "secret"})
      } catch (err) {
        console.log(err)
        this.error = err;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>