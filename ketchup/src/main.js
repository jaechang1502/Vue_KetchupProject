import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "tui-image-editor/dist/tui-image-editor.css";
import store from './store/store.js';
import ToolScss from './etc/tool.scss';
import ToolCss from './etc/tool.css';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ToolScss);
Vue.use(ToolCss);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
