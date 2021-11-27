<template>
<div class="wholepage" data-app>
<div class="container">
  <div class="row">          
      <div class="col-md-6">
        <div class="form-group">
            <input type="text" name="" v-model="profile.name" placeholder="Full name" class="form-control">
        </div>
      </div>
      <div>
          <input type="text" name=""  v-model="profile.image" placeholder="Profile Image URL" class="form-control">
      </div>
      <div class="col-md-4">
          <div class="form-group">
              <input type="submit" @click="updateProfile" value="Save Changes" class="btn btn-primary w-100">
          </div>
       </div>
       
  </div>
</div>
<div class="card">
  <v-card
    class="mt-n12 mx-auto"
    dark
  >
    <!-- <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template> -->

    <v-img
      height="250"
      :src="this.profile.image"
    ></v-img>

    <v-card-title>Full Name: {{this.profile.name}}</v-card-title>
    <v-card-title>Email: {{this.profile.email}}  </v-card-title>
    <v-divider></v-divider>
    <v-card-title>Account Created at: {{this.profile.createdAt}}  </v-card-title>
    <!-- <v-card-title>Last login time: {{this.profile.loggedAt}}  </v-card-title> -->
    <v-divider></v-divider>
    <!-- <v-btn class="delete-button" @click="DeleteAccount">
      Delete Account
    </v-btn> -->
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Delete Account
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Are you sure you want to delete your Account?
        </v-card-title>

        <v-card-text>
          This will permanently remove your account from our database! 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false; DeleteAccount()"
          >
            Yes
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</div>
 
</div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/functions"
import { getAuth, updateProfile, deleteUser} from "firebase/auth";
export default ({
    data () {
      return {
          userName:"",
          profile: {
            name:null,
            phone:null,
            address:null,
            postcode:null,
            email: null,
            createdAt: null,
            loggedAt: null,
            image: ''
        },
          dialog: false
      }
    },
    methods: {
    updateProfile() {
        var defaultEmail = firebase.auth().currentUser.email;
        var arry = defaultEmail.split("@");
        this.userName = arry[0];

        const auth = getAuth();

        const user = auth.currentUser;
        updateProfile(auth.currentUser, {
        displayName: this.profile.name, photoURL: this.profile.image
        }).then(() => {
        console.log("updated")
        }).catch((error) => {
        console.log(error)
    });

    console.log(user);
        
    },
    updateCard(){
        const auth = getAuth();

        const user = auth.currentUser;

        this.profile.name = user.displayName;
        this.profile.email = user.email;
        this.profile.createdAt = user.metadata.creationTime
        this.profile.loggedAt = user.metadata.lastSignInTime
        this.profile.image = user.photoURL
        console.log(this.profile.image)

    },
    async mainPress()
    {
        const addAdmin = await firebase.functions().httpsCallable('addAdminRole');
        const result = await addAdmin({email: "Hello"});
        console.log(result.data.message)
    },
    DeleteAccount()
    {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
          console.log("Deleting User")
          this.$router.replace({name: "Home"});
        }).catch((error) => {
          console.log(error)
        });

    }
  },
  created()
  {
      const auth = getAuth();
      const user = auth.currentUser;
      this.updateCard();
      console.log(user);
  }
})

</script>
<style scoped>
/* .whole-page {
  padding-bottom: 200px;
} */
.delete-button
{
  color: red;
  background-color: red;
}
</style>
