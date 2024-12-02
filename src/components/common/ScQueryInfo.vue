// ScQueryInfo.vue
<template>
  <div :class="[isDui ? 'sc-dui-query-info' : 'sc-query-info']">
    <div class="left">
      <template v-if="isDui">
        <span>추가 : {{ addTime }}</span>
        <span>수정 : {{ modifyTime }}</span>
        <span>삭제 : {{ deleteTime }}</span>
      </template>
      <template v-else>
        <span>Query Time : {{ queryTime }}</span>
        <span> s</span>
        <div class="divide"></div>
        <span>Display Time : {{ displayTime }}</span>
        <span> s</span>
      </template>
    </div>
    <div class="page"><slot></slot></div>
    <div class="right">
      <sc-button @click="copyUrl()" width="70" v-if="showCopyUrl">
        속도 테스트
      </sc-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScQueryInfo",
  data() {},
  props: {
    type: {
      type: String,
      default: "query", // 'query' or 'dui'
    },
    queryTime: {
      type: [String, Number],
      default: 0,
    },
    displayTime: {
      type: [String, Number],
      default: 0,
    },
    addTime: {
      type: [String, Number],
      default: 0,
    },
    modifyTime: {
      type: [String, Number],
      default: 0,
    },
    deleteTime: {
      type: [String, Number],
      default: 0,
    },
    showCopyUrl: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDui() {
      return this.type === "dui";
    },
  },
  methods: {
    copyUrl() {
      this.$util.copyToClipboard(window.location.href, () => {
        this.$util.alert("url이 복사되었습니다.");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.sc-query-info,
.sc-dui-query-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  .left {
    display: flex;
  }
}
</style>

// SampleQueryInfo.vue
<sc-query-info
  type="dui"
  :addTime="5"
  :modifyTime="3"
  :deleteTime="2"
  show-copy-url>
	<sc-pagination v-model="page" @change="onPageChange" />
</sc-query-info>
