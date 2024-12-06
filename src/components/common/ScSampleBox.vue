<template>
  <div class="sc-sample-box my-5">
    <div class="title">{{ titel }}</div>
    <div v-if="slots.description" class="description text-sm text-gray-500">
      <slot name="description"></slot>
    </div>
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
  }
</style>