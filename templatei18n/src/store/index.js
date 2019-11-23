import Vue from "vue";
import Vuex from "vuex";
import App from "../main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    SET_LANG(state, locale) {
      App.$i18n.locale = locale;
    }
  },
  actions: {
    async SET_LANG({ commit }, locale) {
      if (locale in App.$i18n.messages) {
        commit("SET_LANG", locale);
      } else {
        try {
          const module = await import(`@/plugins/i18n/locales/${locale}.json`);
          App.$i18n.setLocaleMessage(locale, module.default);
          commit("SET_LANG", locale);
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
  modules: {}
});
