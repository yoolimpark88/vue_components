<template>
  <div class="sc-search-box-wrap">
    <div class="sc-search-box" :class="[{ fold: isFold, 'un-fold': !isFold }]" :style="styles">
      <slot></slot>
    </div>
    <div class="action-bar" v-if="slots['action-bar']">
      <slot
        name="action-bar"
        :toggleFold="toggleFold"
        :isFold="isFold"
        :isFoldButtonDisable="isFoldButtonDisable"
      ></slot>
    </div>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScSearchBox',
  props: {
    col: {
      type: [String, Number],
      default: 3,
    },
    foldLine: {
      type: [String, Number],
      default: 1,
    },
  },
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
  computed: {
    isFoldButtonDisable() {
      return this.childElementSpanCount <= Number(this.col);
    },
    childElementSpanCount() {
      let cnt = 0;
      this.childElement.forEach((item) => {
        cnt += Number(item.span);
      });
      return cnt;
    },
  },
  data() {
    return {
      styles: '',
      isFold: true,
      childElement: [],
    };
  },
  methods: {
    add($el) {
      this.childElement.push($el);
    },
    toggleFold() {
      this.isFold = !this.isFold;

      let count = 0;
      this.childElement
        .filter((item) => {
          if (Number(item.span) + count <= this.col * this.foldLine) {
            count += Number(item.span);
            return false;
          }
          return true;
        })
        .forEach((item) => {
          item.isShow = !item.isShow;
        });
    },
  },
  created() {
    // 그리드 세팅
    this.styles = `display: grid; grid-template-columns: repeat(${this.col}, minmax(0, 1fr));`;
  },
};
</script>

<style scoped lang="scss">
.sc-search-box {
  display: flex;
  position: relative;
  border: 1px solid $SC-COLOR-GRAY-20;
  background: $SC-COLOR-GRAY-10;
  padding: 7px 5px 7px 25px;
  font-size: 12px;
  &.un-fold {
    :deep(.sc-search-item) {
    }
  }
}
.action-bar {
  grid-column: 1 / -1;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  border: 1px solid $SC-COLOR-GRAY-20;
  border-top: 0 none;
  background-color: $SC-COLOR-GRAY-10;
}
</style>
