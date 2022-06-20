import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/Vuebootstrap'
import "tui-image-editor/dist/tui-image-editor.css";
import VueSession from 'vue-session'
import carousel from 'vue-owl-carousel'
import store from './store/store';

import './plugins/cssdata'
import './plugins/firebase'

var sessionOptions = {
  persist: true
}

Vue.use(carousel,VueSession, sessionOptions);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
