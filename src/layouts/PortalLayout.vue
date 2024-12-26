<template>
  <div class="flex flex-col h-full">
    <!-- GNB -->
    <sc-gnb />
    <div class="flex flex-col flex-1 h-[calc(100%-80px)] bg-[#eee] overflow-auto">
      <div class="main-container">
        <h1>{{ fileName }}</h1>
        <div class="main-content-wrap flex mt-5">
          <div>
            <img class="img-main" src="@/assets/img/img-main.webp" />
          </div>
          <div class="txt-main">
            <p class="tit">Vite</p>
            <p class="txt">
              비트(Vite)는 자바스크립트 네이티브 모듈 (opens new window)을 기반으로 한 데브
              서버입니다. 이미 현대 프런트엔드 개발 생태계는 웹팩을 중심으로 개발 환경과 배포
              시스템이 구축되어 있습니다. 그런데 왜 비트와 같은 도구들이 나왔을까요? 그 이유는
              웹팩을 사용할 때보다 훨씬 더 빠르게 개발하고 배포할 수 있기 때문입니다. 왜 빠른지
              이해하기 위해서는 먼저 번들링과 자바스크립트 네이티브 모듈을 이해해야 합니다.
            </p>
            <p class="tit !mt-5">번들러</p>
            <p class="txt">
              웹팩(Webpack) (opens new window), 롤업(Rollup) (opens new window), 파셀(Parcel) (opens
              new window)과 같은 모듈 번들러가 나왔던 이유는 자바스크립트의 모듈화와 깊은 관계가
              있습니다. 위에서 자바스크립트 네이티브 모듈이라고 언급했던 ESM(ECMAScript Modules)이
              등장하기 전까지는 자바스크립트 언어 레벨에서의 모듈화 방식은 없었습니다. require.js
              (opens new window)와 같은 모듈 로더나 IIFE(Immediately Invoked Function Expression)
              (opens new window)를 사용하지 않으면 모듈화가 불가능했죠. 이렇게 모듈화를 위한
              커뮤니티 레벨의 라이브러리를 사용하다가 마침내 자바스크립트 언어에 모듈화 문법(import,
              export)이 들어오게 됩니다. 이 모듈화 문법을 이용하여 여러 개의 파일을 하나로
              합쳐주거나 의미 있는 단위로 묶어 주는 것을 번들링이라고 하는데 현재 프런트엔드 개발
              생태계에서는 모듈 번들러로 대부분 웹팩을 사용하고 있습니다.
            </p>
          </div>
        </div>
        <div class="component-list-wrap">
          <h2>Components</h2>
          <div class="items-list">
            <ul>
              <li @click="goToSampleModal">Modal</li>
              <li @click="goToSampleButton">Button</li>
              <li @click="goToSampleCheckbox">Checkbox</li>
              <li @click="goToSampleCheckboxWrapper">CheckboxWrapper</li>
              <li @click="goToSampleFormBox">FromBox</li>
              <li @click="goToSampleFormItem">FromItem</li>
              <li @click="goToSampleTextField">TextField</li>
              <li @click="goToSampleTextArea">TextArea</li>
              <li @click="goToSampleSearchBox">SearchBox</li>
              <li @click="goToSampleIcon">Icon</li>
              <li @click="goToSampleQueryInfo">QueryInfo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer_inner">Vue.js components @2024</div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // useRouter 추가
import ScGnb from '@/components/common/ScGnb.vue';

export default {
  components: { ScGnb },
  setup() {
    const router = useRouter(); // useRouter를 사용하여 router 객체 가져오기
    const fileName = ref('');

    const getFileName = () => {
      const path = window.location.pathname;
      console.log('path :', path);
      const parts = path.split('/').filter((part) => part !== '');

      if (parts.length > 0) {
        fileName.value = parts.pop(); // 마지막 부분이 파일명
      } else {
        fileName.value = 'Thinking in components with Vue.js'; // 예시: 루트 경로일 경우 "홈페이지"로 표시
      }
    };

    onMounted(() => {
      getFileName(); // 컴포넌트가 마운트된 후 파일명 추출
    });

    const goToSampleModal = () => {
      // useRouter로 가져온 router 객체 사용
      router.push({ name: 'sampleModal' });
    };
    const goToSampleButton = () => {
      router.push({ name: 'sampleButton' });
    };
    const goToSampleCheckbox = () => {
      router.push({ name: 'sampleCheckbox' });
    };
    const goToSampleCheckboxWrapper = () => {
      router.push({ name: 'sampleCheckboxWrapper' });
    };
    const goToSampleQueryInfo = () => {
      router.push({ name: 'sampleQueryInfo' });
    };
    const goToSampleFormBox = () => {
      router.push({ name: 'sampleFormBox' });
    };
    const goToSampleFormItem = () => {
      router.push({ name: 'sampleFormItem' });
    };
    const goToSampleTextField = () => {
      router.push({ name: 'sampleTextField' });
    };
    const goToSampleTextArea = () => {
      router.push({ name: 'sampleTextArea' });
    };
    const goToSampleSearchBox = () => {
      router.push({ name: 'sampleSearchBox' });
    };
    const goToSampleIcon = () => {
      router.push({ name: 'sampleIcon' });
    };
    return {
      fileName,
      goToSampleQueryInfo,
      goToSampleButton,
      goToSampleModal,
      goToSampleCheckbox,
      goToSampleCheckboxWrapper,
      goToSampleFormBox,
      goToSampleFormItem,
      goToSampleTextField,
      goToSampleTextArea,
      goToSampleSearchBox,
      goToSampleIcon,
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.component-list-wrap {
  .items-list {
    ul {
      list-style-type: none;
      padding: 0;
      li {
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
        a {
          color: $SC-PRIMARY-COLOR-DEEP-GREEN;
        }
      }
    }
  }
}
</style>
