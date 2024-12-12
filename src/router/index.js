// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import PortalLayout from "@/layouts/PortalLayout.vue"; // PortalLayout 컴포넌트
import BasicLayout from "@/layouts/BasicLayout.vue"; // BasicLayout 컴포넌트
import SampleQueryInfo from "@/components/sample/SampleQueryInfo.vue"; // SampleQueryInfo 컴포넌트
import SampleModal from "@/components/sample/SampleModal.vue"; // SampleModal 컴포넌트
import SampleButton from "@/components/sample/SampleButton.vue"; // SampleButton 컴포넌트
import SampleCheckbox from "@/components/sample/SampleCheckbox.vue"; // SampleCheckbox 컴포넌트

const routes = [
  {
    path: "/",
    name: "portal",
    component: PortalLayout,
  },
  {
    path: "/basic-layout",
    name: "basicLayout",
    component: BasicLayout,
    children: [
      {
        path: "sample-query-info",
        name: "sampleQueryInfo",
        component: SampleQueryInfo,
      },
      {
        path: "sample-modal",
        name: "sampleModal",
        component: SampleModal,
      },
      {
        path: "sample-button",
        name: "sampleButton",
        component: SampleButton,
      },
      {
        path: "sample-ckeckbox",
        name: "sampleCheckbox",
        component: SampleCheckbox,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
