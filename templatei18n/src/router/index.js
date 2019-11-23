import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    <%_ if (options.addPrerender) { _%>
    path: "/index.html",
    <%_ } else { _%>
      path: "/",
    <%_ } _%>
    name: "home",
    component: Home
  },
  {
    <%_ if (options.addPrerender) { _%>
    path: "/about.html",
    <%_ } else { _%>
      path: "/about",
    <%_ } _%>
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    <%_ if (options.addPrerender) { _%>
    path: "/i18n.html",
    <%_ } else { _%>
    path: "/i18n",
    <%_ } _%>
    name: "i18n",
    component: () => import(/* webpackChunkName: "i18n" */ "../views/I18n.vue")
  },
  <%_ if (options.addPrerender) { _%>
  {
    path: "*",
    redirect: "/index.html"
  }
  <%_ } _%>
];

const router = new VueRouter({
  <%_ if (options.addPrerender) { _%>
  mode: "history",
  <%_ } _%>
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
