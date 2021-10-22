import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import CountryTable from './components/CountryTable'
import AdminTable from './components/AdminTable.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'

library.add(faUserSecret)
library.add(faSpinner)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.component('country-table', CountryTable)
Vue.component('admin-table', AdminTable)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const firebaseConfig = {
  apiKey: "AIzaSyD19iovkvYgAIdbRRmu3zCkM3DkQZqhjfo",
  authDomain: "database-prod-3e81e.firebaseapp.com",
  projectId: "database-prod-3e81e",
  storageBucket: "database-prod-3e81e.appspot.com",
  messagingSenderId: "378802947891",
  appId: "1:378802947891:web:9501ce250aeeda659f2046"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
