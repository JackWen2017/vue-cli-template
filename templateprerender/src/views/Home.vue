<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [{ property: "og:title", content: `Vue Prerender | ${this.title}` }]
    };
  },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
