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
