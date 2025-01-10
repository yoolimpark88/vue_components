<template>
  <div
    class="sc-tab-box"
    @resize="
      () => {
        console.info('resize');
      }
    "
  >
    <div class="tabs" ref="tabs" @scroll="onScroll">
      <div
        v-for="tab in tabs"
        :key="tab.idx"
        class="tab"
        :class="[{ active: activeTab === tab.idx }, `label-${tab.idx}`]"
        @click="selectTab(tab.idx)"
      >
        <span
          class="label"
          v-tooltip:white="tab.label.length > 20 ? tab.label : ''"
          v-if="!ignoreLabels.includes(tab.idx)"
        >
          {{ tab.label }}
        </span>
      </div>

      <!-- navigation -->
      <div v-if="navigation" :class="['navigation', { invisible: scrollInvisible }]">
        <div :class="['button', { disable: scrollLeft === 0 }]" @click="move('Left')">
          <sc-icon
            type="chevron-left"
            :color="scrollLeft === 0 ? '#dddddd' : 'dark-gray'"
            size="large"
          />
        </div>
        <div :class="['button', { disable: scrollLeft === scrollRight }]" @click="move('Right')">
          <sc-icon
            type="chevron-right"
            :color="scrollLeft === scrollRight ? '#dddddd' : 'dark-gray'"
            size="large"
          />
        </div>
      </div>
      <!-- // navigation -->
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { useSlots } from 'vue';
import { sortBy } from 'lodash';
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScTabBox',
  components: { ScIcon },
  emits: ['tab-box-ready', 'click'],
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
  props: {
    initIdx: {
      type: [Number, String],
      default: 1,
    },
    navigation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeTab: 1,
      tabs: [],
      ignoreLabels: [],
      id: '',
      scrollLeft: 0,
      scrollRight: 0,
      scrollInvisible: false,
      resizeObserver: null,
    };
  },
  methods: {
    selectTab(idx) {
      this.activeTab = idx;
      this.$emit('click', idx);
    },
    handleResize() {
      this.onScroll();
    },
    onScroll() {
      if (this.navigation) {
        this.scrollLeft = this.$refs.tabs.scrollLeft;
        this.scrollRight = this.$refs.tabs.scrollWidth - this.$refs.tabs.clientWidth;
        this.scrollInvisible = this.scrollLeft === this.scrollRight && this.scrollLeft === 0;
      }
    },
    move(direction = 'Right') {
      const scrollStep = 500; // 한틱에 움직이는 스크롤 사이즈
      if (direction === 'Right') {
        this.$refs.tabs.scrollTo({ left: this.scrollLeft + scrollStep, behavior: 'smooth' });
      } else {
        this.$refs.tabs.scrollTo({ left: this.scrollLeft - scrollStep, behavior: 'smooth' });
      }
    },
    /**
     * 컨텐츠
     * @param tabInfo
     */
    addTab(tabInfo) {
      const { idx } = tabInfo;
      // 기존에 있으면 지우고 다시 추가
      const idxList = this.tabs.map((tab) => tab.idx);
      if (idxList.includes(idx)) {
        const position = idxList.indexOf(idx);
        this.tabs[position] = tabInfo;
      } else {
        this.tabs.push(tabInfo);
      }
      this.tabs = sortBy(this.tabs, 'idx');
    },
    removeTab(tabIdx) {
      this.tabs = this.tabs.filter((tab) => tab.idx !== tabIdx);
    },
    /**
     * label
     * @param idx
     */
    addLabel(idx) {
      this.ignoreLabels.push(idx);
    },
    removeLabel(idx) {
      this.ignoreLabels = this.ignoreLabels.filter((label) => label !== idx);
    },
    generateId() {
      return `tab-${new Date().getTime()}`;
    },
  },
  mounted() {
    this.$emit('tab-box-ready');
    this.id = this.generateId();
    if (this.initIdx !== 1) {
      this.selectTab(this.initIdx * 1);
    }

    if (this.navigation) {
      this.$nextTick(() => {
        this.onScroll();
        this.resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            this.handleResize(entry.contentRect);
          }
        });

        this.resizeObserver.observe(this.$refs.tabs);
      });
      this.$watch('tabs', () => {
        this.$nextTick(() => this.onScroll());
      });
    }
  },
  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.$refs.tabs);
      this.resizeObserver.disconnect();
    }
  },
};
</script>

<style scoped lang="scss">
.sc-tab-box {
  width: 100%;
  .tabs {
    display: flex;
    position: relative;
    overflow-y: auto;
    width: 100%;
    background: $SC-COLOR-GRAY-10;
    font-size: $SC-FONT-SIZE-BODY-1;
    color: $SC-COLOR-GRAY-70;

    // 스크롤바 없애기
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .tab {
      display: flex;
      position: relative;
      align-items: center;
      padding: 0 25px;
      cursor: pointer;
      height: 40px;
      max-width: 250px;
      &.active {
        background-color: $SC-PRIMARY-HOVER-COLOR-LIGHT-BLUE;
        color: $SC-COLOR-WHITE;
        &:hover {
          background-color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
        }
        &:after {
          content: '';
          position: absolute;
          left: calc(50% - 5px);
          bottom: 0;
          border-style: solid;
          border-width: 0 5px 6px;
          border-color: transparent transparent $SC-COLOR-WHITE;
        }
      }
      &:hover {
        background-color: $SC-COLOR-GRAY-20;
      }
    }
    .tab:deep(.label) {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      white-space: nowrap;
    }
    .navigation {
      position: sticky;
      top: 0;
      right: 0;
      height: 100%;
      background-color: $SC-COLOR-WHITE;
      display: flex;
      &.invisible {
        display: none;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border: 1px solid $SC-COLOR-GRAY-30;
        &:first-child {
          border-right: 0;
        }
        &.disable {
          cursor: default;
          pointer-events: none;
        }
        &:hover {
          background: $SC-COLOR-GRAY-10;
        }
      }
    }
  }
  .tab-content {
    padding-top: 20px;
    height: 100%;
  }
}
</style>
