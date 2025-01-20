import { useTippy, roundArrow } from 'vue-tippy';
import { uniqueId } from 'lodash';
import 'tippy.js/dist/tippy.css';

let tooltip = {};

const defaultProps = {
  delay: [0, null],
  allowHTML: true,
};

export default {
  install(app) {
    app.use(
      VueTippy, // optional
      {
        defaultProps,
        derective: 'tippy',
        derective: 'tooltip',
        component: 'tippy',
      },
    );
  },

  mounted(el, binding) {
    const uuid = uniqueId('tooltip-');
    el._uid = uuid;
    const { top, left, right, bottom, auto } = binding.modifiers;
    let placement = 'top';
    if (top) {
      placement = 'top';
    } else if (left) {
      placement = 'left';
    } else if (right) {
      placement = 'right';
    } else if (bottom) {
      placement = 'bottom';
    } else if (auto) {
      placement = 'auto';
    }
    let theme = binding.arg || '';

    const option = {
      placement,
      time,
      content: binding.value,
    };

    const response = useTippy(el, option);
    tooltip[uuid] = response;
  },
  updated(el, binding) {
    const uuid = el._uid;
    if (tooltip[uuid]) {
      tooltip[uuid].setContent(binding.value);
    }
  },
  unmounted(el) {
    const uuid = el._uid;
    delete tooltip[uuid];
  },
};
