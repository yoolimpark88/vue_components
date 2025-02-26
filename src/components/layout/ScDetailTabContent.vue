<template>
  <div class="sc-detail-tab-content" v-show="isActive">
    <slot name="label"></slot>
    <slot></slot>
    <div v-if="slots.demodescription" class="demo-description-box">
      <div class="demo-area">
        <div class="demo-preview">
          <slot name="demo"></slot>
        </div>
      </div>
      <div class="demo-description">
        <slot name="demodescription"></slot>
      </div>
    </div>
    <div v-if="!slots.demodescription && slots.demo" class="demo-description-box">
      <div class="demo-area once">
        <div class="demo-preview">
          <slot name="demo"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScDetailTabContent',
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
  props: {
    idx: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      // required: true,
    },
  },
  computed: {
    isActive() {
      return this.idx === this.$parent.activeTab;
    },
  },
  created() {
    const tab = {
      idx: this.idx,
      label: this.label,
    };
    this.$parent.addTab(tab);
  },
  unmounted() {
    this.$parent.removeTab(this.idx);
  },
  data() {
    return {
      activeTab: 1,
      tabs: [],
    };
  },
  methods: {
    addTab(tabInfo) {
      this.tabs.push(tabInfo);
    },
  },
};
</script>
<style scoped lang="scss">
.sc-detail-tab-content {
  padding: 30px 0;
  .demo-description-box {
    display: flex;
    .demo-area {
      width: 80%;
      background: #FAFBFD;
      text-align: center;
      .demo-preview {
        width: calc(100% - 68px);
        height: calc(100% - 68px);
        background: $SC-COLOR-TYPE2-WHITE;
        border-radius: 8px;
        box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
        margin: 34px;
        padding: 50px;
        text-align: left;
      }
      &.once {
        width: 100%;
      }
    }
    .demo-description {
      width: 20%;
      padding:30px;
    }
  }
}
</style>
