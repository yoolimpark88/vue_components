// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import PortalLayout from '@/layouts/PortalLayout.vue';
// import BasicLayout from '@/layouts/BasicLayout.vue';
//import DashboardMain from '@/layouts/DashboardMain.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import SampleQueryInfo from '@/components/sample/SampleQueryInfo.vue';
import SampleModal from '@/components/sample/SampleModal.vue';
import SampleButton from '@/components/sample/SampleButton.vue';
import SampleCheckbox from '@/components/sample/SampleCheckbox.vue';
import SampleCheckboxWrapper from '@/components/sample/SampleCheckboxWrapper.vue';
import SampleFormBox from '@/components/sample/SampleFormBox.vue';
import SampleFormItem from '@/components/sample/SampleFormItem.vue';
import SampleTextField from '@/components/sample/SampleTextField.vue';
import SampleTextArea from '@/components/sample/SampleTextArea.vue';
import SampleIcon from '@/components/sample/SampleIcon.vue';
import SampleSearchBox from '@/components/sample/SampleSearchBox.vue';
import SampleDropdown from '@/components/sample/SampleDropdown.vue';
import SampleMultiDropdown from '@/components/sample/SampleMultiDropdown.vue';
import SampleRadio from '@/components/sample/SampleRadio.vue';
import SampleToggleButton from '@/components/sample/SampleToggleButton.vue';
import SampleTab from '@/components/sample/SampleTab.vue';
import SampleTag from '@/components/sample/SampleTag.vue';
import SampleBadge from '@/components/sample/SampleBadge.vue';
import SampleInputChip from '@/components/sample/SampleInputChip.vue';
import SampleTable from '@/components/sample/SampleTable.vue';
import SampleAccordion from '@/components/sample/SampleAccordion.vue';
import SampleFileForm from '@/components/sample/SampleFileForm.vue';
import SampleTooltip from '@/components/sample/utils/SampleTooltip.vue';
import SampleAlert from '@/components/sample/utils/SampleAlert.vue';
import SampleConfirm from '@/components/sample/utils/SampleConfirm.vue';
import SampleColorPicker from '@/components/sample/SampleColorPicker.vue';
import SampleDatepicker from '@/components/sample/SampleDatepicker.vue';
import SampleDateRangePicker from '@/components/sample/SampleDateRangePicker.vue';
import SampleClipboard from '@/components/sample/utils/SampleClipboard.vue';
import SampleNumber from '@/components/sample/utils/SampleNumber.vue';
import SampleLocale from '@/components/sample/utils/SampleLocale.vue';
import SampleI18n from '@/components/sample/utils/Samplei18n.vue';
import SampleColor from '@/components/sample/utils/SampleColor.vue';
import SamplePagination from '@/components/sample/SamplePagination.vue';
import SampleScrollSpy from '@/components/sample/SampleScrollSpy.vue';
import SampleTree from '@/components/sample/SampleTree.vue';
import SampleValidator from '@/components/sample/SampleValidator.vue';
import SampleGnb from '@/components/sample/SampleGnb.vue';

const routes = [
  {
    path: '/',
    name: 'dashboardLayout',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: SampleAccordion,
      },
      {
        path: 'sample-button',
        name: 'sampleButton',
        component: SampleButton,
      },
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
      {
        path: 'sample-icon',
        name: 'sampleIcon',
        component: SampleIcon,
      },
      {
        path: 'sample-search-box',
        name: 'sampleSearchBox',
        component: SampleSearchBox,
      },
      {
        path: 'sample-dropdown',
        name: 'sampleDropdown',
        component: SampleDropdown,
      },
      {
        path: 'sample-multi-dropdown',
        name: 'sampleMultiDropdown',
        component: SampleMultiDropdown,
      },
      {
        path: 'sample-radio',
        name: 'sampleRadio',
        component: SampleRadio,
      },
      {
        path: 'sample-toggle-button',
        name: 'sampleToggleButton',
        component: SampleToggleButton,
      },
      {
        path: 'sample-tab',
        name: 'sampleTab',
        component: SampleTab,
      },
      {
        path: 'sample-tag',
        name: 'sampleTag',
        component: SampleTag,
      },
      {
        path: 'sample-badge',
        name: 'sampleBadge',
        component: SampleBadge,
      },
      {
        path: 'sample-input-chip',
        name: 'sampleInputChip',
        component: SampleInputChip,
      },
      {
        path: 'sample-table',
        name: 'sampleTable',
        component: SampleTable,
      },
      {
        path: 'sample-accordion',
        name: 'sampleAccordion',
        component: SampleAccordion,
      },
      {
        path: 'sample-file-form',
        name: 'sampleFileForm',
        component: SampleFileForm,
      },
      {
        path: 'sample-tooltip',
        name: 'sampleTooltip',
        component: SampleTooltip,
      },
      {
        path: 'sample-alert',
        name: 'sampleAlert',
        component: SampleAlert,
      },
      {
        path: 'sample-confirm',
        name: 'sampleConfirm',
        component: SampleConfirm,
      },
      {
        path: 'sample-color-picker',
        name: 'sampleColorPicker',
        component: SampleColorPicker,
      },
      {
        path: 'sample-datepicker',
        name: 'sampleDatepicker',
        component: SampleDatepicker,
      },
      {
        path: 'sample-date-range-picker', //SampleDateRangePicker
        name: 'sampleDateRangePicker',
        component: SampleDateRangePicker,
      },
      {
        path: 'sample-clipboard',
        name: 'sampleClipboard',
        component: SampleClipboard,
      },
      {
        path: 'sample-number',
        name: 'sampleNumber',
        component: SampleNumber,
      },
      {
        path: 'sample-locale',
        name: 'sampleLocale',
        component: SampleLocale,
      },
      {
        path: 'sample-i18n',
        name: 'sampleI18n',
        component: SampleI18n,
      },
      {
        path: 'sample-color',
        name: 'sampleColor',
        component: SampleColor,
      },
      {
        path: 'sample-pagination',
        name: 'samplePagination',
        component: SamplePagination,
      },
      {
        path: 'sample-scroll-spy',
        name: 'sampleScrollSpy',
        component: SampleScrollSpy,
      },
      {
        path: 'sample-tree', 
        name: 'sampleTree',
        component: SampleTree,
      },
      {
        path: 'sample-validator',
        name: 'sampleValidator',
        component: SampleValidator,
      },
      {
        path: 'sample-gnb',
        name: 'sampleGnb',
        component: SampleGnb,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
