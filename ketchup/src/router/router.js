import Vue from "vue";
import Router from "vue-router";
import Home from "../views/editor/Home";
import Main from "../views/Home/HomeMain";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/editor",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "main",
      component: Main
    }
  ]
});