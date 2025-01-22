<template>
  <div class="sc-tab-content" v-show="isActive">
    <slot name="label"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScTabContent',
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
.sc-tab-box {
  .tab {
    padding: 10px;
    cursor: pointer;
    &.active {
      font-weight: 600;
    }
  }
}
</style>
