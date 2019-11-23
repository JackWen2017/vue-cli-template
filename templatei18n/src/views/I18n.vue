<template>
  <div>
    <h3>{{ $t('hello') }}</h3>
    <button
      v-for="locale in ['tw','en','jp']"
      v-show="$i18n.locale !== locale"
      :key="locale"
      @click="changeLang(locale)"
    >{{ $t(`lang-${locale}`) }}</button>
  </div>
</template>

<script>
export default {
  name: "I18N",
  methods: {
    changeLang(locale) {
      // this.$i18n.locale = locale
      this.$store.dispatch("SET_LANG", locale);
    }
  },
  <%_ if (options.addPrerender) { _%>
  metaInfo() {
    return {
      title: "I18N"
    };
  }
  <%_ } _%>
};
</script>

<style>
</style>