import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

let isPrerender = false
<%_ if (options.addPrerender) { _%>
  isPrerender = true
<%_ } _%>
const routes = [
  {
    path: isPrerender ? "/index.html" : "/",
    name: "home",
    component: Home
  },
  {
    path: isPrerender ? "/about.html" : "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
if (isPrerender) {
  routes.push({
    path: "*",
    redirect: "/index.html"
  });
}

const router = new VueRouter({
  mode: isPrerender ? "history" : "hash",
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
