import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Index from '@/components/Index';
import Apps from '@/components/Apps';
import Roles from '@/components/Roles';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps,
    },
    {
      path: '/roles',
      name: 'Roles',
      component: Roles,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
