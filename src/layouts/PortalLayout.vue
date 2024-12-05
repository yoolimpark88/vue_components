<template>
  <div class="h-full">
    <!-- GNB -->
    <sc-gnb />
    <div class="flex flex-col flex-1 h-[calc(100%-80px)] bg-[#eee]">
      <div class="main-container">
        <h1 class="font-bold">{{ fileName }}</h1>
        <div class="flex mt-5">
          <img class="img-main" src="@/assets/img/img-main.webp" />
          <p>
            Vue was created by Evan You, while he was working at google on
            AngularJS 1.0 apps. He created Vue as a progressive JavaScript
            framework and an performant alternative to Angular. In nutshell, the
            term progressive JavaScript framework means, you can use Vue in your
            existing web application without any hassle and incrementally use
            the framework features as you need them. Alternatively, you can
            build an entire front-end using Vue and other supporting libraries.
          </p>
        </div>
        <div>Component</div>
        <ul>
          <li>
            <a @click="goToSampleModal">
              <button @click="goToSampleModal">Modal</button>
            </a>
          </li>
          <li>
            <a @click="goToSampleQueryInfo">
              <button @click="goToSampleQueryInfo">QueryInfo</button>
            </a>
          </li>
          <li>
            <a href="">eslint</a>
          </li>
        </ul>
      </div>
    </div>

    <footer>Vue.js components @2024</footer>
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
        fileName.value = "Thinking in components with Vue.js"; // 예시: 루트 경로일 경우 "홈페이지"로 표시
      }
    };

    onMounted(() => {
      getFileName(); // 컴포넌트가 마운트된 후 파일명 추출
    });

    const goToSampleModal = () => {
      // useRouter로 가져온 router 객체 사용
      router.push({ name: "sampleModal" });
    };

    const goToSampleQueryInfo = () => {
      // useRouter로 가져온 router 객체 사용
      router.push({ name: "sampleQueryInfo" });
    };

    return {
      fileName,
      goToSampleQueryInfo,
      goToSampleModal,
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
