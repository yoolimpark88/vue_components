// 공통 유틸
import {createApp} from 'vue';
import ScAlert from '@/components/common/ScAlert.vue';
// import ScConfirm from '@/components/common/ScConfirm.vue';
import i18n from '@/plugins/i18n';
let alertInstance;
// let confirmInstance;

export const showAlert = (message, confirmFn = () => {}, title = '') => {
  if (!alertInstance) {
    const app = createApp(ScAlert);
    app.use(i18n);
    app.config.globalProperties.$util = {
      isEmpty,
      isNotEmpty,
    };
    if (typeis confirmFn == 'string') {
      title = confirmFn;
      confirmFn = () => {};
    }
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);
    alertInstance = app.mount(mountNode);
  }
  alertInstance.show(message, confirmFn, title);
};

// Icon Copy
const copyToClipboard = async (text, successFn = () => {}) => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      successFn();
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  install(app) {
    app.config.globalProperties.$util = {
      copyToClipboard,
      isNotEmpty(value) {
        return value !== null && value !== undefined && value !== '';
      },
    };
  },
};