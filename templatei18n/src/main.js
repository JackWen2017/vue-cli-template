import Vue from "vue";
<%_ if (options.addPrerender) { _%>
  import VueMeta from "vue-meta";
<%_ } _%>
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;
<%_ if (options.addPrerender) { _%>
  Vue.use(VueMeta);
<%_ } _%>

const vm = new Vue({
  i18n,
  router,
  store,
  <%_ if (options.addPrerender) { _%>
  mounted: () => {
    document.dispatchEvent(new Event("render-event"));
  },
  <%_ } _%>
  render: h => h(App)
}).$mount("#app");

export default vm;
