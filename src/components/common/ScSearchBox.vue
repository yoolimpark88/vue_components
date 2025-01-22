<template>
  <div class="sc-search-box-wrap" ref="contents">
    <div
      class="sc-search-box top"
      :class="[{ fold: isFold, 'un-fold': !isFold }]"
      :style="styles"
      ref="topPanel"
    >
      <slot></slot>
    </div>
    <div class="resizer-horizontal" @mousedown="mouseDownHandler" ref="horizontalResizer"></div>
    <div class="action-bar bottom" v-if="slots['action-bar']">
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
    mouseDownHandler(e) {
      this.mouseY = e.clientY;
      this.topHeight = this.$refs.topPanel.getBoundingClientRect().height;
      this.contentsHeight = this.$refs.contents.getBoundingClientRect().height;
      this.isDragging = true;

      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    },

    mouseMoveHandler(e) {
      if (!this.isDragging) return;

      const dy = e.clientY - this.mouseY;
      document.body.style.cursor = 'row-resize';

      // contents 높이 조절
      const newContentsHeight = Math.min(Math.max(100, this.contentsHeight + dy), 1000);
      this.$refs.contents.style.height = `${newContentsHeight}px`;

      // top 패널 높이 조절
      const newTopHeight = ((this.topHeight + dy) * 100) / newContentsHeight;
      this.$refs.topPanel.style.height = `${newTopHeight}%`;
    },

    mouseUpHandler() {
      this.isDragging = false;
      document.body.style.removeProperty('cursor');
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      document.removeEventListener('mouseup', this.mouseUpHandler);
    },
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);
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

// resize

.top {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #000;
}

.bottom {
  flex: 1;
}

.resizer-horizontal {
  height: 4px;
  width: 100%;
  background: #eaeaea;
  cursor: ns-resize;
}

.resizer-horizontal:hover {
  background: #2b87ff;
}
</style>
