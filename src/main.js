import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./views/Home";
import Sea from "./views/Sea";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/sea", component: Sea },
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
