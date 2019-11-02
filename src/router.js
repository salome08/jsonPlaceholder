import Vue from "vue";
import vueRouter from "vue-router";
import Users from './views/Users.vue'
import Home from './views/Home.vue'
import Albums from './views/Albums.vue'
import Photos from './views/Photos.vue'


const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/albums/:userId',
    component: Albums,
    name: 'Albums'
  },
  {
    path: '/photos/:userId',
    component: Photos,
    name: 'Photos'
  },
  {
    path: '/users',
    component: Users
  },
]

Vue.use(vueRouter);
const router = new vueRouter({
  mode: "history",
  routes // short for `routes: routes`
})



// function loadView(view) {
//   return () => import(`./views/${view}.vue`);
// }


export default router;