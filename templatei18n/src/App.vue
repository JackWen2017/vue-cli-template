<template>
  <div id="app">
    <div id="nav">
      <%_ if (options.addPrerender) { _%>
      <router-link to="/index.html">Home</router-link>|
      <router-link to="/about.html">About</router-link>|
      <router-link to="/i18n.html">About</router-link>
      <%_ } else { _%>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/i18n">About</router-link>
      <%_ } _%>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  <%_ if (options.addPrerender) { _%>
  metaInfo() {
    return {
      titleTemplate: "%s - Vue Prerender"
    };
  }
  <%_ } _%>
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
