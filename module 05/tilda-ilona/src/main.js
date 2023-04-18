import { createApp } from "vue";
import App from "./App.vue";
import { Router } from "./router/router";
import './assets/less/main.less';

createApp(App).use(Router).mount("#app");
