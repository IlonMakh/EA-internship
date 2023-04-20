import { createApp } from "vue";
import App from "./App.vue";
import "./assets/less/main.less";
import { Router } from "./router/router";

createApp(App).use(Router).mount("#app");
