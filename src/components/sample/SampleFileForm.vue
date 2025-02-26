<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>
            <div>해당 Sample은 예제를 위해 작성되었으며 실제 업로드 되지는 않습니다.</div>
            <div class="text-sm">
              첨부가 가능한 파일 확장자: jpg, jpeg, png, xls, xlsx, xlsm, docx, eml, gif, html, mht,
              mhtml, msg, pdf, pptm, pptx, txt
            </div>
            <div class="mt-5 mb-10">
              <p>@added : 파일이 첨부되었을때 발생</p>
              <p>@removed : 파일이 삭제되었을때 발생</p>
              <p>@changed : 파일이 추가되거나 삭제되었을때 발생</p>
              <p>@download : 파일 다운로드 눌렀을때 발생</p>
              <p>:add-label : 추가하기 버튼 라벨</p>
              <p>:download-label : Download 버튼 라벨</p>
              <p>:sortable : 순서버튼 노출 여부 (기본값: true)</p>
              <p>
                :multiple : 기본값 true, false로 변경시 한건씩 밖에 선택할 수 없음 하지만 이벤트는 Array
                객체로 동일
              </p>
            </div>
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-file-uploader
                  :init-list="emptyList"
                  :only-download="false"
                  @added="onFileHandle('added', $event)"
                  @removed="onFileHandle('removed', $event)"
                  @changed="onFileHandle('changed', $event)"
                  @download="onFileHandle('download', $event)"
                  add-label="추가하기"
                  download-label="다운로드"
                />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-file-uploader
:init-list="emptyList"
:only-download="false"
@added="onFileHandle(&#039;added&#039;, $event)"
@removed="onFileHandle(&#039;removed&#039;, $event)"
@changed="onFileHandle(&#039;changed&#039;, $event)"
@download="onFileHandle(&#039;download&#039;, $event)"
add-label="추가하기"
download-label="다운로드"
/>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
methods: {
  onFileHandle(flag, event) {
    console.info(flag, event);
  },
},
data() {
  return {
    emptyList: [],
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Upload Usage -->
        <sc-sample-box title="Upload Usage">
          <template #description>해당 Sample은 예제를 위해 작성되었으며 실제 업로드 되지는 않습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-file-uploader
                  :init-list="emptyList"
                  :only-download="false"
                  :file-size-limit="10"
                  accepted-files=".png,.jpg"
                />
                <sc-file-uploader
                  class="mt-5"
                  :init-list="fakeFileList"
                  :only-download="false"
                  :file-size-limit="10"
                  accepted-files=".png,.jpg"
                />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-file-uploader
:init-list="fakeFileList"
:only-download="false"
:file-size-limit="10"
accepted-files=".png,.jpg"
/>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    fakeFileList: [
      { fileName: 'test1.txt', fileSize: 7451, fileId: 'test1' },
      { fileName: 'test2.jpg', fileSize: 555451, fileId: 'test2' },
      { fileName: 'test3.xlsx', fileSize: 2234451 },
      { fileName: 'test4.ppt', fileSize: 3451412 },
    ],
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Upload Usage -->
        <!-- validation -->
        <sc-sample-box title="첨부 버튼 눌렀을때 validation 후 처리가 필요한 경우">
          <template #description>:before-add-validation 첨부버튼 눌렀을때 검증이 필요한 경우 해당 속성을 이용하여 처리 가능<br />해당 Sample은 예제를 위해 작성되었으며 실제 업로드 되지는 않습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-file-uploader
                  :init-list="emptyList"
                  :only-download="false"
                  :file-size-limit="10"
                  :before-add-validation="beforeAddValidation"
                />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-file-uploader
:init-list="emptyList"
:only-download="false"
:file-size-limit="10"
:before-add-validation="beforeAddValidation"
/>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
methods: {
  beforeAddValidation() {
    // 첨부 추가전 필요한 로직 return true 를 주지 않으면 추가버튼을 눌러도 반응하지 않습니다.
    return false;
  },
},
data() {
  return {
    emptyList: [],
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //validation -->
        <!-- Button add -->
        <sc-sample-box title="버튼 영역 추가">
          <template #description>
            slot:leftButton - 첨부 버튼 기준 왼쪽으로 버튼 추가 영역<br />
            slot:rightButton - 첨부 버튼 기준 오른쪽으로 버튼 추가 영역<br />
            해당 Sample은 예제를 위해 작성되었으며 실제 업로드 되지는 않습니다.
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-file-uploader :init-list="emptyList" :only-download="false" :file-size-limit="10">
                  <template #leftButton>
                    <sc-button small>Custom Left 1</sc-button>
                    <sc-button small>Custom Left 2</sc-button>
                  </template>

                  <template #rightButton>
                    <sc-button small>Custom Right 1</sc-button>
                    <sc-button small>Custom Right 2</sc-button>
                  </template>
                </sc-file-uploader>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-file-uploader :init-list="emptyList" :only-download="false" :file-size-limit="10">
<template #leftButton>
  <sc-button small>Custom Left 1</sc-button>
  <sc-button small>Custom Left 2</sc-button>
</template>
<template #rightButton>
  <sc-button small>Custom Right 1</sc-button>
  <sc-button small>Custom Right 2</sc-button>
</template>
</sc-file-uploader>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
methods: {
  beforeAddValidation() {
    // 첨부 추가전 필요한 로직 return true 를 주지 않으면 추가버튼을 눌러도 반응하지 않습니다.
    return false;
  },
},
data() {
  return {
    emptyList: [],
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Button add -->
        <!-- Download Usage -->
        <sc-sample-box title="Download Usage">
          <template #description>해당 Sample은 예제를 위해 작성되었으며 실제 업로드 되지는 않습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-file-uploader
                  :init-list="fakeFileList"
                  :only-download="true"
                  :file-size-limit="30"
                  @download="onFileHandle('download', $event)"
                />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-file-uploader
:init-list="fakeFileList"
:only-download="true"
:file-size-limit="30"
@download="onFileHandle(&#039;download&#039;, $event)"
/>'
            />
        </ScDetailAccordion>
        <ScDetailAccordion title="Script" >
          <sc-code-highlight
          script="export default {
methods: {
  onFileHandle(flag, event) {
    console.info(flag, event);
  },
},
data() {
  return {
    fakeFileList: [
      { fileName: 'test1.txt', fileSize: 7451, fileId: 'test1' },
      { fileName: 'test2.jpg', fileSize: 555451, fileId: 'test2' },
      { fileName: 'test3.xlsx', fileSize: 2234451 },
      { fileName: 'test4.ppt', fileSize: 3451412 },
    ],
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Download Usage  -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScFileUploader from '@/components/common/ScFileUploader.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleFileForm',
  components: { ScButton, ScCodeHighlight, ScFileUploader, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  methods: {
    onFileHandle(flag, event) {
      console.info(flag, event);
    },
    beforeAddValidation() {
      // 첨부 추가전 필요한 로직 return true 를 주지 않으면 추가버튼을 눌러도 반응하지 않습니다.
      return false;
    },
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
  data() {
    return {
      emptyList: [],
      fakeFileList: [
        { fileName: 'test1.txt', fileSize: 7451, fileId: 'test1' },
        { fileName: 'test2.jpg', fileSize: 555451, fileId: 'test2' },
        { fileName: 'test3.xlsx', fileSize: 2234451 },
        { fileName: 'test4.ppt', fileSize: 3451412 },
      ],
      selectedTabId: 1,
    };
  },
};
</script>

<style scoped lang="scss"></style>
