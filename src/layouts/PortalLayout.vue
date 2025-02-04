<template>
  <div class="flex flex-col h-full">
    <!-- GNB -->
    <sc-gnb />
    <div class="flex flex-col flex-1 h-[calc(100%-80px)] bg-[#eee] overflow-auto">
      <div class="main-container">
        <h1>{{ fileName }}</h1>
        <div class="main-content-wrap flex mt-5">
          <div class="img-main">
            <img src="@/assets/img/img-main.webp" />
          </div>
          <div class="txt-main">
            <p class="tit">Vue File 명명 규칙</p>
            <p class="txt">
              - 파스칼 케이스(pascal case)로 생성<br />
              - 파일 내 컴포넌트 이름 지정시 확장자를 제외한 파일명과 동일하게 지정<br />
              - ex) PortalMain.vue
            </p>
            <p class="tit !mt-5">Vue File 내 변수 표기법</p>
            <p class="txt">
              - 카멜 케이스(Camel Case)로 지정<br />
              - ex) const menuId;
            </p>
            <p class="tit !mt-5">Vue File 내 Template 영역 표기법</p>
            <p class="txt">
              - 케밥 케이스(kebab Case)로 지정<br />
              - 컴포넌트 선언 영역에서 전달되는 props 명칭도 동일하게 적용<br />
              - ex) &lt;approval-modal value="" /&gt;
            </p>
            <p class="tit !mt-5">CSS는 tailwindcss를 사용하였습니다.</p>
          </div>
        </div>
        <div class="component-list-wrap">
          <h2>
            Components<span class="tit !mt-5 ml-5 text-sm !text-[red]"
              >* 표시는 작업중 & 예정입니다.</span
            >
          </h2>

          <div class="items-list">
            <ul>
              <li @click="goToSampleButton">Button</li>
              <li @click="goToSampleBadge">Badge</li>
              <li @click="goToSampleCheckbox">Checkbox</li>
              <li @click="goToSampleCheckboxWrapper">CheckboxWrapper</li>
              <li @click="goToSampleDropdown">Dropdown</li>
              <li @click="goToSampleMultiDropdown">MultiDropdown</li>
              <li @click="goToSampleIcon">Icon</li>
              <li @click="goToSampleInputChip">inputChip</li>
              <li @click="goToSampleRadio">Radio</li>
              <li @click="goToSampleTable">Table</li>
              <li @click="goToSampleTextArea">TextArea</li>
              <li @click="goToSampleTextField">TextField</li>
              <li @click="goToSampleToggleButton">ToggleButton</li>
            </ul>
          </div>
          <h2>Components.exp</h2>
          <div class="items-list">
            <ul>
              <li @click="goToSampleAccordion">Accordion</li>
              <li @click="goToSampleFileForm">File Form</li>
              <li @click="goToSampleColorPicker">ColorPicker</li>
              <li @click="goToSampleDatepicker">Datepicker</li>
              <li @click="goToSampleDateRangePicker">DateRangePicker</li>
              <li @click="goToSampleFormBox">FormBox</li>
              <li @click="goToSampleFormItem">FormItem</li>
              <li @click="goToSampleModal">Modal</li>
              <li @click="goToSamplePagination">Pagination</li>
              <li @click="goToSampleQueryInfo">QueryInfo</li>
              <li @click="goToSampleScrollSpy">ScrollSpy</li>
              <li @click="goToSampleSearchBox">SearchBox</li>
              <li @click="goToSampleTab">Tab</li>
              <li @click="goToSampleTag">Tag</li>
              <li><span>*</span>Tree</li>
              <li><span>*</span>Validator</li>
            </ul>
          </div>
          <h2>Util</h2>
          <div class="items-list">
            <ul>
              <li @click="goToSampleAlert">Alert</li>
              <li @click="goToSampleConfirm">Confirm</li>
              <li @click="goToSampleTooltip">Tooltip</li>
              <li @click="goToSampleClipboard">Clipboard</li>
              <li @click="goToSampleNumber">Number</li>
              <li @click="goToSampleLocale">Locale</li>
              <li @click="goToSampleI18n">i18n</li>
              <li @click="goToSampleColor">Color</li>
            </ul>
          </div>
          <h2>Template</h2>
          <div class="items-list">
            <ul>
              <li><span>*</span>Infobox</li>
              <li><span>*</span>Grid</li>
              <li><span>*</span>ModalTemplate</li>
              <li><span>*</span>Popup</li>
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
        fileName.value = 'Use in components with Vue.js 3.x (with TailWind CSS)'; // 예시: 루트 경로일 경우 "홈페이지"로 표시
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
    const goToSampleDropdown = () => {
      router.push({ name: 'sampleDropdown' });
    };
    const goToSampleMultiDropdown = () => {
      router.push({ name: 'sampleMultiDropdown' });
    };
    const goToSampleRadio = () => {
      router.push({ name: 'sampleRadio' });
    };
    const goToSampleToggleButton = () => {
      router.push({ name: 'sampleToggleButton' });
    };
    const goToSampleTab = () => {
      router.push({ name: 'sampleTab' });
    };
    const goToSampleBadge = () => {
      router.push({ name: 'sampleBadge' });
    };
    const goToSampleTag = () => {
      router.push({ name: 'sampleTag' });
    };
    const goToSampleInputChip = () => {
      router.push({ name: 'sampleInputChip' });
    };
    const goToSampleTable = () => {
      router.push({ name: 'sampleTable' });
    };
    const goToSampleAccordion = () => {
      router.push({ name: 'sampleAccordion' });
    };
    const goToSampleFileForm = () => {
      router.push({ name: 'sampleFileForm' });
    };
    const goToSampleTooltip = () => {
      router.push({ name: 'sampleTooltip' });
    };
    const goToSampleAlert = () => {
      router.push({ name: 'sampleAlert' });
    };
    const goToSampleConfirm = () => {
      router.push({ name: 'sampleConfirm' });
    };
    const goToSampleColorPicker = () => {
      router.push({ name: 'sampleColorPicker' });
    };
    const goToSampleDatepicker = () => {
      router.push({ name: 'sampleDatepicker' });
    };
    const goToSampleDateRangePicker = () => {
      router.push({ name: 'sampleDateRangePicker' });
    };
    const goToSampleClipboard = () => {
      router.push({ name: 'sampleClipboard' });
    };
    const goToSampleNumber = () => {
      router.push({ name: 'sampleNumber' });
    };
    const goToSampleLocale = () => {
      router.push({ name: 'sampleLocale' });
    };
    const goToSampleI18n = () => {
      router.push({ name: 'sampleI18n' });
    };
    const goToSampleColor = () => {
      router.push({ name: 'sampleColor' });
    };
    const goToSamplePagination = () => {
      router.push({ name: 'samplePagination' });
    };
    const goToSampleScrollSpy = () => {
      router.push({ name: 'sampleScrollSpy' });
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
      goToSampleDropdown,
      goToSampleMultiDropdown,
      goToSampleRadio,
      goToSampleToggleButton,
      goToSampleTab,
      goToSampleTag,
      goToSampleBadge,
      goToSampleInputChip,
      goToSampleTable,
      goToSampleAccordion,
      goToSampleFileForm,
      goToSampleTooltip,
      goToSampleAlert,
      goToSampleConfirm,
      goToSampleColorPicker,
      goToSampleDatepicker,
      goToSampleDateRangePicker,
      goToSampleClipboard,
      goToSampleNumber,
      goToSampleLocale,
      goToSampleI18n,
      goToSampleColor,
      goToSamplePagination,
      goToSampleScrollSpy,
    };
  },
};
</script>

<style scoped lang="scss">
.main-container {
  .main-content-wrap {
    display: flex;
    position: relative;
    width: 100%;
    .img-main {
      width: 500px;
    }
    .txt-main {
      width: auto;
    }
  }
}
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
        margin: 7px 15px;
        cursor: pointer;
        a {
          color: $SC-PRIMARY-COLOR-DEEP-GREEN;
        }
        span {
          color: red;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
