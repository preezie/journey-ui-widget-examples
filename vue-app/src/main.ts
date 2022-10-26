import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Cta from './views/Cta.vue'
import ExitIntent from './views/Exit-intent.vue'
import Popup from './views/Popup.vue'
import Workflow from './views/Workflow.vue'

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

const routes = [
  { path: "/", component: Workflow },
  { path: "/workflow", component: Workflow },
  { path: "/cta", component: Cta },
  { path: "/popup", component: Popup },
  { path: "/exit-intent", component: ExitIntent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
