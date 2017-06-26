import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Wifi from '@/components/Wifi';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/:ssid/:password',
      name: 'Wifi',
      component: Wifi,
    },
  ],
});
