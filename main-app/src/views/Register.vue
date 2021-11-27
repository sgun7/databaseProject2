<template>
  <div class="mainpage">
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
        <v-snackbar
          v-model="snackbar"
          :multi-line="multiLine"
          :timeout="timeout"
          absolute
          top
          right
        >
          {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
              color="red"
              text
              v-bind="attrs"
              @click="snackbar = false"
              >
              Close
            </v-btn>
          </template>
        </v-snackbar>
    </form>
  </div>
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
            this.snackbar = true
            console.log(user)
            this.$router.replace({name: "data"});  //Can now access this page
          } catch (err) { 
              this.snackbar = false;
              console.log(err)
          }
        },
    },
    data() {
        return {
            email: "",
            password: '',
            error: '',
            multiLine: true,
            snackbar: false,
            text: `Welcome!`,
            timeout: 5000,
        }
    }
})
</script>

<style scoped>
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
.mainpage
{
  position: relative;
  top:200px;
}
</style>