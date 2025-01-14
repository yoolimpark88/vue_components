<template>
  <div class="sc-badge">
    <slot></slot>
    <sup v-if="dot" :class="['badge', 'dot']" :style="{ backgroundColor: backgroundColor }"></sup>
    <sup
      v-else
      :class="['badge', { double: value.length > 1 }]"
      :style="{ backgroundColor: backgroundColor, color: color }"
      >{{ value }}</sup
    >
  </div>
</template>

<script>
export default {
  name: 'ScBadge',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#fff',
    },
    backgroundColor: {
      type: String,
      default: '#f56c6c',
    },
  },
};
</script>

<style scoped lang="scss">
.sc-badge {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  .badge {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
    z-index: 1;
    border-radius: 10px;
    display: inline-block;
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    &.double {
      transform: translateY(-50%) translateX(80%);
    }
    &.dot {
      height: 8px;
      width: 8px;
      right: 5px;
      line-height: 8px;
      padding: 0;
      border-radius: 50%;
    }
  }
}
sup {
  vertical-align: super;
}
.sc-badge + .sc-badge {
  margin-left: 15px;
}
</style>
