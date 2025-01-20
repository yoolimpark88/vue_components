import { useTippy, roundArrow } from 'vue-tippy';
import { uniqueId } from 'lodash';

let tooltip = {};

export default {
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
      theme,
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
