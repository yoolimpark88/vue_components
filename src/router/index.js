// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
//import SampleQueryInfo from "../components/sample/SampleQueryInfo.vue"; // SampleQueryInfo 컴포넌트 임포트

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/PortalLayout.vue"),
  },

  //{
  //  path: "/sample-query-info",
  //  name: "SampleQueryInfo",
  //  component: SampleQueryInfo,
  //},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
