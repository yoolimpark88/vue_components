// src/main.js
import { createApp } from "vue"; // Vue 3에서는 createApp을 사용합니다.
import App from "./App.vue";
import router from "./router";

import "@/style/tailwind.css";

// Vue 인스턴스 생성 및 마운트
const app = createApp(App);

// 플러그인 등록

app.use(router);

app.mount("#app");
