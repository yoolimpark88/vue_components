<template>
  <div class="sc-code-highlight my-5">
    <div v-if="template">
      <sc-button class="float-right" @click="copyCode(trimTemplate)" medium>복사하기</sc-button>
      <!-- <h2 class="text-ls mb-2">&lt;template&gt;</h2> -->
      <highlightjs language="xml" :code="trimTemplate" />
    </div>

    <div class="mt-5" v-if="script">
      <sc-button class="float-right" @click="copyCode(script)" medium>복사하기</sc-button>
      <!-- <h2 class="text-lg mb-2">&lt;script&gt;</h2> -->
      <highlightjs language="javascript" :code="script" />
    </div>

    <div class="mt-5" v-if="style">
      <sc-button class="float-right" @click="copyCode(style)" medium>복사하기</sc-button>
      <!-- <h2 class="text-lg mb-2">&lt;style&gt;</h2> -->
      <highlightjs language="css" :code="style" />
    </div>
  </div>
</template>

<script>
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import ScButton from "@/components/common/ScButton.vue";

export default {
  name: "ScCodeHighlight",
  components: {
    highlightjs: hljsVuePlugin.component,
    ScButton,
  },
  props: {
    template: {
      type: String,
      default: "",
    },
    script: {
      type: String,
      default: "",
    },
    style: {
      type: String,
      default: "",
    },
  },
  computed: {
    trimTemplate() {
      return this.template ? this.template.replace(/^[\s\t\n]+/g, "") : "";
    },
  },
  methods: {
    copyCode(content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          alert("코드가 복사되었습니다!(Success)");
        })
        .catch((error) => {
          console.error("복사 실패(Fail): ", error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.sc-code-highlight {
  position:relative;
  .sc-button {
    position:absolute;
    top:10px;
    right:10px;
  }
}
</style>