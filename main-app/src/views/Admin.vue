<template>
<div>

<div class="container">
  <div class="row">          
      <div class="col-md-6">
        <div class="form-group">
            <input type="text" name="" v-model="profile.name" placeholder="Full name" class="form-control">
        </div>
      </div>

        <div class="col-md-6">
          <div class="form-group">
              <input type="text"  v-model="profile.phone" placeholder="Phone" class="form-control">
          </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <input type="text"  v-model="profile.address" placeholder="Address" class="form-control">
              </div>
        </div>

          <div class="col-md-8">
                <div class="form-group">
                    <input type="text"  v-model="profile.postCode" placeholder="Postcode" class="form-control">
                </div>
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
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Full Name: {{this.profile.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
 
</div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/functions"
import { getAuth, updateProfile } from "firebase/auth";
export default ({
    data () {
      return {
          userName:"",
          profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null
        },
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
        displayName: this.profile.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
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
    },
    async mainPress()
    {
        const addAdmin = await firebase.functions().httpsCallable('addAdminRole');
        const result = await addAdmin({email: "Hello"});
        console.log(result.data.message)
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
