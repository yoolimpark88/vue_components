<template>
  <div class="h-full">
    <router-view key="refreshKey"></router-view>
    <teleport to="body"></teleport>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCommonStore } from '@/store/commonStore';

export default {
  name: 'App',

  computed: {
    ...mapState(useCommonStore, ['refreshKey']), // Pinia 스토어의 상태를 Vue의 computed로 가져옵니다.
  },
};
</script>

<style lang="scss">
@import 'style/global.scss';
@import 'style/scss/main.scss';

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
