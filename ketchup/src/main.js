import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "tui-image-editor/dist/tui-image-editor.css";
import carousel from 'vue-owl-carousel'
import store from './store/store.js';
 import './etc/tool.scss';
 import './etc/tool.css';
 import './etc/fontdata.scss'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(carousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
