<template>
  <label :class="['sc-radio', { disabled: disabled, checked: isChecked }, size, customProps]">
    <input
      type="radio"
      :name="name"
      :value="value"
      class="sr-only"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChangeHandler"
    />
    <span class="radio-icon">
      <!-- 선택시 -->
      <svg v-if="isChecked" width="20" height="20" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" stroke="#00b8dd" stroke-width="1" fill="#00b8dd" />
        <circle cx="10" cy="10" r="5" fill="#fff" />
      </svg>
      <!-- 미선택시 -->
      <svg v-else width="20" height="20" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" stroke="#a5a5a5" stroke-width="1" fill="#fff" />
      </svg>
    </span>
    <span class="label-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ScRadio',
  emits: ['update:modelValue'],
  props: {
    value: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    name: String,
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium'].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
    customProps() {
      const size = [];
      if (this.small) {
        size.push('small');
      }
      return size.join(' ');
    },
  },
  methods: {
    onChangeHandler() {
      this.$emit('update:modelValue', this.value);
    },
  },
};
</script>

<style scoped lang="scss">
.sc-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    .radio-icon {
      stroke: $SC-COLOR-GRAY-40;
    }
  }
  .label-text {
    white-space: nowrap;
    padding-left: 3px;
  }

  // 마우스 오버시 색상
  &:hover:not(.disabled) circle:first-child {
    stroke: $SC-PRIMARY-COLOR-LIGHT-BLUE !important;
  }
  // 사이즈 small
  &.small {
    font-size: $SC-FONT-SIZE-BODY-1;
    height: 16px;
    line-height: 16px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  &.medium {
    font-size: $SC-FONT-SIZE-BODY-3;
    height: 20px;
    line-height: 20px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  // 스크린 only
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .radio-icon {
  }
  & + .sc-radio {
    margin-left: 10px;
  }
}
</style>
