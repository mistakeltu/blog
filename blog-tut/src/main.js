import Vue from "vue";
import App from "./App.vue";
import addBlog from "./components/addBlog";

Vue.component("add-blog", addBlog);

new Vue({
  el: "#app",
  render: h => h(App)
});
