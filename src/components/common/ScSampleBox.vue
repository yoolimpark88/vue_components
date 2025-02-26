<template>
  <div class="sc-sample-box">
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
  width: 100%;
  max-width: 100%;
  margin-bottom:30px;
  .title {
    color: $SC-COLOR-TYPE2-GRAY-100;
    font-size: $SC-FONT-SIZE-TYPE2-H5;
    font-weight: $SC-FONT-WEIGHT-TYPE2-H5;
    height: 30px;
    line-height: 30px;
    padding-left:16px;
    + .sc-detail-accordion-wrapper {
      margin-top:10px;
    }
  }
  .description {
    color: $SC-COLOR-TYPE2-GRAY-80;
    font-size:$SC-FONT-SIZE-TYPE2-BODY-3;
    font-weight: $SC-FONT-WEIGHT-TYPE2-BODY-3;
    margin-bottom: 20px;
    padding-left:16px;
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
  &:first-child {
    padding-top:0;
  }
}
</style>
