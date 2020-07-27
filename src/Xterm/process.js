import Vue from "blessed-vue";
import App from "./TerminalApp.vue";

const el = Vue.dom.createElement(); // create a placebo element for Blessed Vue to append on

Vue.dom.append(el); // attaching the placebo element

const instance = new Vue({
  name: "app",
  components: {
    App
  },
  template: "<app />"
}).$mount(el);
console.debug(instance);
window.instance = instance;

export default instance;
