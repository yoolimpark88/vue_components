// 공통 유틸
import { createApp } from 'vue';
import ScAlert from '@/components/common/ScAlert.vue';
import ScConfirm from '@/components/common/ScConfirm.vue';
import i18n from '@/plugins/i18n';
let alertInstance;
let confirmInstance;

export const showAlert = (message, confirmFn = () => {}, title = '') => {
  if (!alertInstance) {
    const app = createApp(ScAlert);
    app.use(i18n);
    app.config.globalProperties.$util = {
      isEmpty,
      isNotEmpty,
    };
    if (typeof confirmFn == 'string') {
      title = confirmFn;
      confirmFn = () => {};
    }
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);
    alertInstance = app.mount(mountNode);
  }
  alertInstance.show(message, confirmFn, title);
};

export const showConfirm = (
  message = '',
  confirmFn = () => {},
  cancelFn = () => {},
  closeFn = () => {},
) => {
  if (message === '') {
    console.error('required message');
    return;
  }
  if (!confirmInstance) {
    const app = createApp(ScConfirm);
    app.use(i18n);
    app.config.globalProperties.$util = {
      isEmpty,
      isNotEmpty,
    };
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);
    confirmInstance = app.mount(mountNode);
  }
  confirmInstance.show(message, confirmFn, cancelFn, closeFn);
};

export const isEmpty = (input) => {
  return (
    typeof input === 'undefined' ||
    input === null ||
    input === '' ||
    input === 'null' ||
    input.length === 0 ||
    (typeof input === 'object' && !Object.keys(input).length)
  );
};

const isNotEmpty = (input) => {
  return !isEmpty(input);
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
      isEmpty,
      showConfirm,
      showAlert,
      alert: showAlert,
      confirm: showConfirm,
      copyToClipboard,
      isNotEmpty(value) {
        return value !== null && value !== undefined && value !== '';
      },
    };
  },
};
