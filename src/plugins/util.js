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

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const getLocale = () => {
  return i18n.global.locale.value.toUpperCase();
};

const addComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const isKo = (locale) => {
  locale = locale || i18n.global.locale.value;
  return ['ko_KR', 'ko'].includes(locale);
};

const isEn = (locale) => {
  locale = locale || i18n.global.locale.value;
  return ['en_US', 'en'].includes(locale);
};

const isCh = (locale) => {
  locale = locale || i18n.global.locale.value;
  return ['zh_CN', 'zh', 'cn', 'tw', 'zh-CN', 'zh-TW', 'zh_TW'].includes(locale);
};

const nl2br = (input) => {
  if (input == null) {
    return '';
  }
  if (input.indexOf('<br>') < 0) {
    return input;
  }

  input = input.replaceAll('<br>', '\n');
  return input;
};

const nl2br3 = (input) => {
  if (input == null) {
    return '';
  }
  if (input.indexOf('|') < 0) {
    return input;
  }

  input = input.replaceAll('|', '\r\n');
  return input;
};

const tagReplace = (input) => {
  if (input == null) {
    return '';
  }
  if (input.indexOf('&lt;') < 0 || input.indexOf('&gt;') < 0) {
    return input;
  }
  if (input.indexOf('&lt;') >= 0) {
    input = input.replaceAll('&lt;', '<');
  }
  if (input.indexOf('&gt;') >= 0) {
    input = input.replaceAll('&gt;', '>');
  }
  return input;
};

export const existMSGKey = (msgKey) => {
  return i18n.global.t(msgKey) !== msgKey;
};

export const koreanUseYn = (str) => {
  let chk = false;
  for (let i = 0; i < str.length; i++) {
    let chr = str.charCodeAt(i);
    if (chr < 46 || chr > 90) {
      chk = true;
    }
  }
  return chk;
};

export const getByte = (str) => {
  if (str === undefined || str === null || str === '') {
    return 0;
  }
  str = str.trim();
  let rbyte = 0;
  let one_char = '';

  for (var i = 0; i < str.length; i++) {
    one_char = str.charAt(i);

    if (escape(one_char).length > 4) {
      rbyte += 2; //한글 2Byte
    } else {
      rbyte++; //그 외 문자 1Byte
    }
  }

  return rbyte;
};

export default {
  install(app) {
    app.config.globalProperties.$util = {
      isEmpty,
      isNotEmpty,
      copyToClipboard,
      escapeHtml,
      addComma,
      isKo,
      isEn,
      isCh,
      showAlert,
      alert: showAlert,
      confirm: showConfirm,
      locale: getLocale,
      existMSGKey,
      nl2br,
      nl2br3,
      tagReplace,
      koreanUseYn,
      getByte,
    };
  },
};
