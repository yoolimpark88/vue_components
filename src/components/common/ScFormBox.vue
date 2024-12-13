<template>
  <div class="sc-form-box" :class="[{ borderless }]" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ScFormBox',
  components: {},
  props: {
    col: {
      type: [String, Number],
      default: 2,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      styles: '',
    };
  },
  created() {
    // 그리드 세팅
    this.styles = `display:grid; grid-template-columns: repeat(${this.col}, minmax(0, 1fr));`;
  },
};
</script>

<style scoped lang="scss">
  .sc-form-box {
    margin: 0 0 24px 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      width: 100%;
      height: 0.5px;
      background: $SC-COLOR-GRAY-50;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 1px;
      background: $SC-COLOR-GRAY-50;
    }
    &.borderless {
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }
  }
</style>