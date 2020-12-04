import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VueMq from "vue-mq";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 992,
    laptop: 1200,
    desktop: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
