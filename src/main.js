import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import storage from "./utils/localstorage";
import 'amfe-flexible/index.js';


import { Lazyload, Toast, Icon, Notify, Calendar, Cell } from 'vant';

Vue.use(Lazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  loading: require('@/assets/image/default-img.png'),
  attempt: 2
});
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Notify);
Vue.use(Calendar);
Vue.use(Cell);

Vue.prototype.$storage = storage;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
