import { createApp } from "vue";
import App from "./App.vue";
import "./assets/less/main.less";
import { Router } from "./router/router";
import { pinia } from "./store";

createApp(App).use(pinia).use(Router).mount("#app");
