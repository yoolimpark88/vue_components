import { createI18n } from "vue-i18n";

const i18n = createI18n({
  messages: {},
  locale: "ko",
  fallbackLocale: "en",
  legacy: false,
  postTranslation: (message) => {
    return message
      .replace(/\\n\\r/g, "<br />")
      .replace(/\\n/g, "<br />")
      .replace(/\\r/g, "<br />");
  },
});

export default i18n;
