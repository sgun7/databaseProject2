import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Secret from '../views/Secret.vue'
import Register from '../views/Register.vue'
import Data from '../views/Data.vue'
import MoreInfo from '../views/MoreInfo'
import firebase from 'firebase/compat/app';
import Admin from '../views/Admin.vue';
import 'firebase/compat/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: true

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    props: true
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret,
    // meta: {requiresAuth: true},//Requires the sign in to access this webpage,
    props: true
  },
  {
    path: '/data',
    name: 'data',
    component: Data,
    // meta: {requiresAuth: true},//Requires the sign in to access this webpage,
    props: true
  },
  {
    path: '/moreinfo',
    name: 'moreinfo',
    component: MoreInfo,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {requiresAuth: true},//Requires the sign in to access this webpage,
    props: true 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth) //Get the record
  const isAuthenticated = firebase.auth().currentUser; //Returns current user
  if(requiresAuth && !isAuthenticated) //If not logged in or needs authentication then go back to login page
  {
    next("/login");
  }
  else{ //Else keep going to normal route
    next();
  }
}) //This will run before running each route
export default router
