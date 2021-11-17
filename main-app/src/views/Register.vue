<template>
<v-app>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
        Register
        <div class="email">
          <input type="email" v-model="email" placeholder="email">
        </div>
        <div>
          <input type="password" v-model="password" placeholder="password">
        </div>
        <v-btn type="submit" elevation="7">Submit</v-btn>
    </form>
  </div>
  </v-app>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default ({
    methods: {
        async pressed()
        {
          try {
            const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            console.log(user);
            this.$router.replace({name: "data"});  //Can now access this page
          } catch (err) { 
              console.log(err)
          }
        }
    },
    data() {
        return {
            email: "",
            password: '',
            error: ''
        }
    }
})
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
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
</style>