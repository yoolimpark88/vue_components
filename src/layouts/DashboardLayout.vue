<template>
  <div class="h-full">
    <div class="flex flex-1 /*h-[calc(100%-80px)]*/">
      <ScLnbTree @navigate="handleNavigation" />
      <div class="sc-main-container flex-grow">
        <h2 class="sc-breadcrumb">
          {{ fileName }}
        </h2>
        <div class="sc-body">
          <!-- 서브페이지 컨텐츠 -->
          <router-view id="content" class="contents" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import ScLnbTree from "@/components/layout/ScLnbTree.vue";

export default {
  components: { ScLnbTree },
  setup() {
    const fileName = ref(""); 
    const route = useRoute();
    const router = useRouter();
    const getFileName = () => {
    	const path = route.path; // 현재 라우터 경로
      //const path = window.location.pathname;
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
    watch(route, () => {
      getFileName(); // 라우터 변경 감지 시 파일명 업데이트
    });
    const handleNavigation = (routerUrl) => {
      //router.push(routerUrl); // 라우터 이동
      router.push({ name: routerUrl }); // 라우터 이름을 기준으로 이동
    };

    return {
      fileName,
      handleNavigation,
    };
  },
};
</script>