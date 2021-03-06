import Vue from "vue";
import "./axios.config";
import App from "./App.vue";
import router from "./router";
import VueAgile from "vue-agile";
import store from "./store";
import VueGallery from "vue-gallery";

//component
Vue.use(VueAgile);
Vue.use(VueGallery);
Vue.prototype.$ebus = new Vue();

// event bus ($ebus) : https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus
Vue.prototype.$ebus = new Vue(); // rendre dispo des evt a tout les component

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
