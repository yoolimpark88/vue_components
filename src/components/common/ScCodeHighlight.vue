<template>
  <div class="sc-code-highlight my-5">
    <h2 class="text-ls mb-2">&lt;template&gt;</h2>
    <highlightjs language="xml" :code="trimTemplate" />

    <div class="mt-5" v-if="script">
      <h2 class="text-lg mb-2">&lt;script&gt;</h2>
      <highlightjs language="javascript" :code="script" />
    </div>

    <div class="mt-5" v-if="style">
      <h2 class="text-lg mb-2">&lt;style&gt;</h2>
      <highlightjs language="css" :code="style" />
    </div>
  </div>
</template>

<script>
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  name: "ScCodeHighlight",
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  props: {
    template: {
      type: String,
      required: true,
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
      return this.template.replace(/^[\s\t\n]+/g, "");
    },
  },
};
</script>
