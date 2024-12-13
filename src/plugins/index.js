// Plugins
import i18n from "./i18n";
import util from "./util";
import highlight from "./highlight";

export function registerPlugins(app) {
  app.use(util).use(i18n);
  app.config.globalProperties.i18n = i18n;

  // Code highlight
  if (import.meta.env?.VITE_USE_SAMPLE === "true") {
    app.use(highlight);
  }
}
