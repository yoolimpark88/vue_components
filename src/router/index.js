// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PortalLayout from '@/layouts/PortalLayout.vue';
import BasicLayout from '@/layouts/BasicLayout.vue';
import SampleQueryInfo from '@/components/sample/SampleQueryInfo.vue';
import SampleModal from '@/components/sample/SampleModal.vue';
import SampleButton from '@/components/sample/SampleButton.vue';
import SampleCheckbox from '@/components/sample/SampleCheckbox.vue';
import SampleCheckboxWrapper from '@/components/sample/SampleCheckboxWrapper.vue';
import SampleFormBox from '@/components/sample/SampleFormBox.vue';
import SampleFormItem from '@/components/sample/SampleFormItem.vue';
import SampleTextField from '@/components/sample/SampleTextField.vue';
import SampleTextArea from '@/components/sample/SampleTextArea.vue';

const routes = [
  {
    path: '/',
    name: 'portal',
    component: PortalLayout,
  },
  {
    path: '/basic-layout',
    name: 'basicLayout',
    component: BasicLayout,
    children: [
      {
        path: 'sample-query-info',
        name: 'sampleQueryInfo',
        component: SampleQueryInfo,
      },
      {
        path: 'sample-modal',
        name: 'sampleModal',
        component: SampleModal,
      },
      {
        path: 'sample-button',
        name: 'sampleButton',
        component: SampleButton,
      },
      {
        path: 'sample-ckeckbox',
        name: 'sampleCheckbox',
        component: SampleCheckbox,
      },
      {
        path: 'sample-ckeckbox-wrapper',
        name: 'sampleCheckboxWrapper',
        component: SampleCheckboxWrapper,
      },
      {
        path: 'sample-form-box',
        name: 'sampleFormBox',
        component: SampleFormBox,
      },
      {
        path: 'sample-form-item',
        name: 'sampleFormItem',
        component: SampleFormItem,
      },
      {
        path: 'sample-text-field',
        name: 'sampleTextField',
        component: SampleTextField,
      },
      {
        path: 'sample-text-Area',
        name: 'sampleTextArea',
        component: SampleTextArea,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
