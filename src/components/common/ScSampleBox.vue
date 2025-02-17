<template>
  <div class="sc-sample-box my-5">
    <div class="title">{{ title }}</div>
    <div v-if="slots.description" class="description text-sm text-gray-500">
      <slot name="description"></slot>
    </div>
    <slot />
    <div v-if="slots.result" class="result text-sm text-gray-500 mt-5">
      <slot name="result"></slot>
    </div>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScSampleBox',
  props: {
    title: {
      type: String,
      default: 'Basic Usage',
    },
  },
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
};
</script>

<style scoped lang="scss">
.sc-sample-box {
  border: 2px solid $SC-COLOR-GRAY-60;
  padding: 20px;
  width: 100%;
  max-width: 1532px;
  .title {
    font-size: 2rem;
    height: 40px;
    line-height: 40px;
    margin: 0 0 10px 0;
  }
  .description {
    margin-bottom: 20px;
  }
  .result {
  }
  .sc-sample-box + .sc-sample-box {
    margin: 20px 0;
  }
  &.my-5 {
    &:first-child {
      margin-top:0;
    }
  }
}
</style>
