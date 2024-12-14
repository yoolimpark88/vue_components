export default {
  install(app) {
    app.config.globalProperties.$util = {
      isNotEmpty(value) {
        return value !== null && value !== undefined && value !== "";
      },
    };
  },
};