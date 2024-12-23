<template>
  <div class="sc-form-item" :class="{ required: required }" :style="customStyle">
    <template v-if="slots.custom">
      <!-- grid-column: 1 / -1; -->
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
        <span v-if="slots.label" class="custom-laabel"><slot name="label"></slot></span>
        <span v-else class="custom-label" v-html="label"></span>
      </div>
      <div
        v-if="slots.content"
        :class="['custom-content']"
        :style="{ width: `calc(100% - ${this.labelWidth}px )` }"
      >
        <slot name="constent"></slot>
      </div>
      <div v-if="!slots.content" :class="['content']">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScFormItem',
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
      default: 170,
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
      classNames: '',
    };
  },
  created() {
    // 그리드 세팅
    // this.classNames = `col-span-${this.span}`;
  },
};
</script>

<style scoped lang="scss">
.sc-form-item {
  display: flex;
  font-size: 13px;
  border-top: 1px solid $SC-COLOR-GRAY-30;
  background: $SC-COLOR-WHITE;
  .label {
    display: flex;
    position: relative;
    align-items: center;
    min-width: 170px;
    height: 100%;
    min-height: 36px;
    padding: 5px 10px 5px 15px;
    border-right: 1px solid $SC-COLOR-GRAY-30;
    background: $SC-COLOR-GRAY-10;
    // require필수
    &.required .custom-label::before {
      content: '*';
      display: block;
      position: relative;
      width: 10px;
      height: 100%;
      color: $SC-PRIMARY-COLOR-RED;
      font-weight: 400;
      margin: 0px 0px -27px -12px;
      font-size: 18px;
    }
  }
  .custom {
    display: block;
    padding: 5px 0 5px 15px;
    min-height: 42px;
  }

  .content {
    width: min-content;
    flex-grow: 1;
    padding: 5px 5px 5px 10px;
    line-height: 26px;
    :deep(a) {
      color: $SC-PRIMARY-COLOR-BLUE;
      &:hover {
        color: $SC-PRIMARY-COLOR-DEEP-BLUE;
        text-decoration: underline;
      }
    }
  }

  .custom-content {
    display: block;
    width: 100%;
    line-height: 26px;
    padding: 5px 15px;
  }
  &.scroll {
    .content:has(.sc-table) {
      overflow: auto;
    }
  }
}
</style>
