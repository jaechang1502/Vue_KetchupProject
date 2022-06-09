import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/Vuebootstrap'
import "tui-image-editor/dist/tui-image-editor.css";
import carousel from 'vue-owl-carousel'
import store from './store/store.js';
import './plugins/cssdata'
import './plugins/firebase'
import InputColorPicker from 'vue-native-color-picker'


Vue.use(carousel);
Vue.use(InputColorPicker);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
