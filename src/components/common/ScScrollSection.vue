<template>
  <div :id="id" class="sc-scroll-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScScrollSection',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.sc-scroll-section {
}
</style>
