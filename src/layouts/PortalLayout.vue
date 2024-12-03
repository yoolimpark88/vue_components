<template>
  <div class="hello p-2">
    <!-- GNB -->
    <sc-gnb />
    <h1>{{ fileName }}</h1>

    <h3>서브페이지로 이동</h3>
    <ul>
      <li>
        <button @click="goToSampleQueryInfo">SampleQueryInfo로 이동</button>
      </li>
      <li>
        <a href="">eslint</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // useRouter 추가
import ScGnb from "@/components/common/ScGnb.vue";

export default {
  components: { ScGnb },
  setup() {
    const router = useRouter(); // useRouter를 사용하여 router 객체 가져오기
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

    const goToSampleQueryInfo = () => {
      // useRouter로 가져온 router 객체 사용
      router.push({ name: "sampleQueryInfo" });
    };

    return {
      fileName,
      goToSampleQueryInfo,
    };
  },
};
</script>

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
