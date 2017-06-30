import Vue from 'vue';
import vueCookie from 'vue-cookie';
import axios from 'axios';
import vueAxios from 'vue-axios';
import Header from '@/components/layout/Header';
import LeftMenu from '@/components/layout/LeftMenu';
import RightContent from '@/components/layout/Right';
import Footer from '@/components/layout/Footer';
import App from './App';
import router from './router';

// 关闭生产提示
Vue.config.productionTip = false;

Vue.use(vueCookie);
Vue.use(vueAxios, axios);

// 注册全局指令，获取页面中title中的内容赋值给head中的title标签
Vue.directive('title', {
  inserted(el) {
    document.title = el.innerText;
    el.remove();
  },
});

Vue.component('my-nav', Header);
Vue.component('my-left-menu', LeftMenu);
Vue.component('my-right-content', RightContent);
Vue.component('my-footer', Footer);

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    const login = {
      path: '/login',
      query: { target: to.fullPath },
    };
    const msid = Vue.cookie.get('msid');
    if (msid === undefined || msid === null) {
      Vue.axios.get('/api/user/getSession')
        .then((response) => {
          Vue.cookie.set('msid', response.data, 1);
        });
      next(login);
    } else {
      Vue.axios.get('/api/user/login-check')
        .then((response) => {
          console.log(JSON.stringify(response));
          if (response.data) {
            next();
          } else {
            next(login);
          }
        }).catch(
        () => {
          next(login);
        });
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
