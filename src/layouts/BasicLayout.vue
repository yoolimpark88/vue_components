<template>
  <div class="h-full">
    <!-- GNB -->
    <sc-gnb />
    <div class="flex flex-1 h-[calc(100%-80px)]">
      <sc-lnb />
      <div class="main-container flex-grow">
        <div class="sc-breadcrumb">
          <h1>{{ fileName }}</h1>
        </div>
        <div>
          <!-- 서브페이지 컨텐츠 -->
          <router-view id="content" class="contents" />
        </div>
      </div>
    </div>
    <footer><div class="footer_inner">Vue.js components @2024</div></footer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ScGnb from "@/components/common/ScGnb.vue";
import ScLnb from "@/components/common/ScLnb.vue";

export default {
  components: { ScGnb, ScLnb },
  setup() {
    const fileName = ref("");

    const getFileName = () => {
      const path = window.location.pathname;
      console.log("path :", path);
      const parts = path.split("/").filter((part) => part !== "");

      if (parts.length > 0) {
        fileName.value = parts.pop(); // 마지막 부분이 파일명
      } else {
        fileName.value = "MainPage"; // 예시: 루트 경로일 경우 "홈페이지"로 표시
      }
    };

    onMounted(() => {
      getFileName(); // 컴포넌트가 마운트된 후 파일명 추출
    });

    return {
      fileName,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
