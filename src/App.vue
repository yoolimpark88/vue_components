<template>
  <div class="h-full">
    <router-view key="refreshKey"></router-view>
    <teleport to="body"> 텔레포트 테스트 </teleport>
    <!-- <div class="button-container">
      <button @click="goToSampleQueryInfo">Query Info 페이지로 이동</button>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useCommonStore } from "@/store/commonStore";
//import { useRouter } from "vue-router";
// import ScQueryInfo from "@/components/common/ScQueryInfo.vue";

export default {
  name: "App",
  components: {
    //  ScQueryInfo
  },
  computed: {
    ...mapState(useCommonStore, ["refreshKey"]), // Pinia 스토어의 상태를 Vue의 computed로 가져옵니다.
  },
  methods: {
    goToSampleQueryInfo() {
      this.$router.push({ name: "SampleQueryInfo" });
    },
  },
};
</script>

<style lang="scss">
@use "style/global.scss";
@use "style/scss/main.scss";

.button-container {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
