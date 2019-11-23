import Vue from "vue";
import VueI18n from "vue-i18n";

import tw from "./locales/tw";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "tw", // 預設語言
  messages: { tw }
});

export default i18n;
