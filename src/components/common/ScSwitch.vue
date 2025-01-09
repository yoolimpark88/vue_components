<template>
  <div
    class="sc-switch"
    :class="[{ active: modelValue }, size, customProps, { disabled: disabled }]"
    @click="toggleSwitch"
  >
    <div class="sc-switch-toggle" :class="[size, customProps, { disabled: disabled }]"></div>
    <div v-if="labeled" class="sc-switch-text" :class="[{ active: modelValue }, size, customProps]">
      <span v-if="modelValue">ON</span>
      <span v-else>OFF</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScSwitch',
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    labeled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customProps() {
      const size = [];
      if (this.small) {
        size.push('small');
      }
      if (this.medium) {
        size.push('medium');
      }
      if (this.large) {
        size.push('large');
      }
      return size.join(' ');
    },
  },
  methods: {
    toggleSwitch() {
      if (!this.disabled) {
        const value = !this.modelValue;
        this.$emit('update:modelValue', value);
        this.$emit('change', value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
// 스위치 사이즈
$SWITCH_SIZE: 24px; // medium
$SWITCH_SMALL_SIZE: 19px; // small
$SWITCH_LARGE_SIZE: 32px; // large

@mixin switch-size($size) {
  width: calc($size * 2.5);
  height: $size;
  border-radius: calc($size / 2); // 높이의 절반
}
@mixin sc-switch-toggle($size) {
  width: calc($size - 4px);
  height: calc($size - 4px);
}

.sc-switch {
  &.small {
    @include switch-size($SWITCH_SMALL_SIZE);
  }
  &.medium {
    @include switch-size($SWITCH_SIZE);
  }
  &.large {
    @include switch-size($SWITCH_LARGE_SIZE);
  }
  display: flex;
  align-items: center;
  background-color: $SC-COLOR-GRAY-70;
  cursor: pointer;
  position: relative;

  &.active {
    background-color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
.sc-switch-toggle {
  &.small {
    @include sc-switch-toggle($SWITCH_SMALL_SIZE);
  }
  &.medium {
    @include sc-switch-toggle($SWITCH_SIZE);
  }
  &.large {
    @include sc-switch-toggle($SWITCH_LARGE_SIZE);
  }
  top: 2px;
  left: 2px;
  background-color: $SC-COLOR-WHITE;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.2s ease-in-out;
}
.sc-switch.active {
  .sc-switch-toggle {
    &.small {
      transform: translateX(calc($SWITCH_SMALL_SIZE * 1.5));
    }
    &.medium {
      transform: translateX(calc($SWITCH_SIZE * 1.5));
    }
    &.large {
      transform: translateX(calc($SWITCH_LARGE_SIZE * 1.5));
    }
  }
}
.sc-switch-text {
  flex-grow: 1;
  text-align: right;
  color: $SC-COLOR-WHITE;
  &.active.small {
    position: relative;
    font-size: 10px;
    font-weight: 400;
    left: 30px;
    transform: translateX(-20px);
    transition: all 0.3s;
  }
  &.small {
    position: relative;
    font-size: 10px;
    font-weight: 400;
    transform: translateX(-8px);
    transition: all 0.3s;
  }
  &.active.medium {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    left: 50px;
    transform: translateX(-40px);
    transition: all 0.3s;
  }
  &.medium {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    transform: translateX(-10px);
    transition: all 0.3s;
  }
  &.active.large {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    left: 15px;
  }
  &.large {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    right: 12px;
  }
  &.active {
    text-align: left;
  }
}
</style>
