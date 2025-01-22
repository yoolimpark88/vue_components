import outSideClick from './common/outSideClick';
import shake from './common/shake';
import tooltip from './common/tooltip';

export function registerDirectives(app) {
  app.directive('out-side-click', outSideClick);
  app.directive('shake', shake);
  app.directive('tooltip', tooltip);
}
