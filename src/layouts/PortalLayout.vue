<template>
  <div class="hello p-2">
    <!-- GNB -->
    <sc-gnb />
    <h1>{{ fileName }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a href="">SampleQueryInfo</a>
      </li>
      <li>
        <a href="">eslint</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ScGnb from "@/components/common/ScGnb.vue";

export default {
  components: { ScGnb },
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
