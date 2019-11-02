import Vue from "vue";
import vueRouter from "vue-router";

function loadView(view) {
  return () => import(`./views/${view}.vue`);
}


const routes = [{
    path: '/',
    component: loadView('Home')
  },
  {
    path: '/albums/:userId',
    component: loadView('Albums'),
    name: 'Albums'
  },
  {
    path: '/photos/:userId',
    component: loadView('Photos'),
    name: 'Photos'
  },
  {
    path: '/users',
    component: loadView('Users')
  },
]

Vue.use(vueRouter);
const router = new vueRouter({
  mode: "history",
  routes // short for `routes: routes`
})

export default router;