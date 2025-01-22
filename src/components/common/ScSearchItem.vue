<template>
  <div class="sc-search-item" :class="{ required: required }" :style="customStyle" v-show="isShow">
    <template v-if="slots.custom">
      <div class="custom w-full">
        <slot name="custom"></slot>
      </div>
    </template>
    <template v-if="!slots.custom">
      <div
        class="label"
        :class="{ required: required }"
        :style="{ width: width }"
        v-if="!noLabel && !blank"
      >
        <slot name="label" v-if="slots.label"></slot>
        <span v-html="label"></span>
      </div>
      <div
        v-if="slots.content"
        :class="['custom-content']"
        :style="{ width: `cals(100% - ${this.labelWidth}px)` }"
      >
        <slot name="content"></slot>
      </div>
      <div
        v-if="!slots.content"
        :class="['content']"
        :style="{ width: `cals(100% - ${this.labelWidth}px)` }"
      >
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScSearchItem',
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
  props: {
    span: {
      type: [String, Number],
      default: 1,
    },
    label: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: [String, Number],
      default: 110,
    },
    required: {
      type: Boolean,
      default: false,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customStyle() {
      const css = ['align-items: center', `grid-column: span ${this.span} / span ${this.span}`];
      return css.join(';');
    },
    width() {
      return `${this.labelWidth}px`;
    },
  },
  data() {
    return {
      isShow: true,
      classNames: '',
    };
  },
  created() {
    this.$parent.add(this);
  },
};
</script>

<style scoped lang="scss">
.sc-search-item {
  display: flex;
  font-size: 13px;
  .label {
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    min-height: 100%;
    padding: 5px 0 5px 10px;
    &.required::before {
      position: absolute;
      content: '*';
      color: $SC-PRIMARY-COLOR-RED;
      font-weight: 400;
      left: 0px;
      top: calc(100% / 2 - 8px);
      font-size: 16px;
    }
  }
  .custom {
    display: block;
    padding: 5px 15px;
    min-height: 42px;
  }
  .content {
    flex-grow: 1;
    padding: 5px 15px;
    line-height: 26px;
    white-space: nowrap;
  }
  .custom-content {
    display: block;
    width: 100%;
    line-height: 26px;
    padding: 5px 15px;
  }
}
</style>
