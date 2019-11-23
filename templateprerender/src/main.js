import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  mounted: () => {
    document.dispatchEvent(new Event("render-event"));
  },
  render: h => h(App)
}).$mount("#app");
