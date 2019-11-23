module.exports = (api, options) => {
  const dependencies = {
    "core-js": "^3.3.2",
    vue: "^2.6.10",
    "vue-router": "^3.1.3",
    vuex: "^3.0.1"
  };
  if (options.addExample) {
    dependencies["prerender-spa-plugin"] = "^3.4.0";
    dependencies["vue-meta"] = "^2.3.1";
  }

  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies,
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.0.0",
      "@vue/cli-plugin-eslint": "^4.0.0",
      "@vue/cli-plugin-router": "^4.0.0",
      "@vue/cli-plugin-vuex": "^4.0.0",
      "@vue/cli-service": "^4.0.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "babel-eslint": "^10.0.3",
      eslint: "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "lint-staged": "^9.4.2",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0",
      "vue-template-compiler": "^2.6.10"
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,vue}": ["npm run lint", "git add"]
    }
  });
  api.render("./template");
  if (options.addExample) {
    api.render("./templateprerender");
  }
};
