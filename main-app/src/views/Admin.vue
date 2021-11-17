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
      console.log(user);
  }
})

</script>
