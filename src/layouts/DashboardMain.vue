<template>
  <div class="flex flex-col h-full">
    <slot></slot>
    <router-view id="content" class="contents" />
  </div>
</template>

<script>
export default {
  name: "dashboardMain",
};
</script>