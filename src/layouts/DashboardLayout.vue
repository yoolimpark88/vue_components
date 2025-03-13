<template>
  <div class="h-full overflow-hidden">
    <div class="flex flex-1 /*h-[calc(100%-80px)]*/">
      <ScLnbTree @navigate="handleNavigation" :showLnbToggleBtn="isLnbToggleBtnVisible" :showMenuSearch="isMenuSearchInput" />
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
  data() {
    return {
      isLnbToggleBtnVisible: true,
      isMenuSearchInput: true,
    };
  },
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
        //fileName.value = parts.pop(); // 마지막 부분이 파일명
        let rawFileName = parts.pop(); // 마지막 부분이 파일명

        // 'sample-' 접두사 제거 후 첫 글자 대문자로 변환
        fileName.value = rawFileName.replace(/^sample-/, "") // 'sample-' 제거
                                    .split("-") // '-' 기준으로 단어 분리
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 각 단어 첫 글자 대문자 변환
                                    .join(""); // CamelCase 변환
      } else {
        // fileName.value = "MainPage"; // 예시: 루트 경로일 경우 "홈페이지"로 표시
        fileName.value = "Overview"; 
      }
    };

    const getFileRedirect = () => {
      // 경로가 루트('/')일 때 sample-overview로 강제 이동
      if (route.path === '/') {
        router.replace('/sample-overview');
      };
    }

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
      getFileRedirect,
    };
  },
};
</script>