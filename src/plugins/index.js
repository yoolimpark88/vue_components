// Plugins
import i18n from './i18n';
import highlight from './highlight';
//import calendar from './calendar';
import tooltip from './tooltip';
import util from './util';
import router from '../router';
//import pinia from '../store';

export function registerPlugins(app) {
  //app.use(pinia).use(router).use(util).use(i18n).use(calendar).use(tooltip);
  app.use(router).use(util).use(i18n).use(tooltip);
  app.use(util).use(i18n);
  //app.config.globalProperties.i18n = i18n;

  // Code highlight
  if (import.meta.env?.VITE_USE_SAMPLE === 'true') {
    app.use(highlight);
  }
  //app.directive('tooltip', tooltip);
}
