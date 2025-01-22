<template>
  <Teleport :to="`.label-${idx}`" v-if="ready">
    <div class="label"><slot></slot></div>
  </Teleport>
</template>

<script>
export default {
  name: 'ScTabLabel',
  props: {
    idx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ready: false,
    };
  },
  computed: {
    tabId() {
      return this.$parent.id;
    },
  },
  created() {
    this.$parent.addLabel(this.idx);
  },
  mounted() {
    this.$nextTick(() => {
      this.ready = true;
    });
  },
  unmounted() {
    this.$parent.removeLabel(this.idx);
  },
  watch: {
    tabId(newVal) {
      if (newVal) {
        this.ready = true;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
