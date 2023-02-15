import Vue from "vue";
import App from "./App.vue";
import VCalendar from "v-calendar";

import "./assets/main.scss";

Vue.use(VCalendar);

export const eventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
