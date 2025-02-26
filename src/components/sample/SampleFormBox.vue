<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>Form Item을 사용하기 위한 Wrap 컴포넌트. form-box의 col의 속성은 그리드 시스템으로 1~12컬럼의 크기를 미리 지정할 수 있습니다.(기본값 : 2)</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-form-box col="2">
                  <sc-form-item label="Hello">안녕하세요</sc-form-item>
                  <sc-form-item label="World">월드!</sc-form-item>
                  <sc-form-item required span="2">
                    <template v-slot:label>
                      <sc-checkbox>사용자 정의 라벨</sc-checkbox>
                    </template>
                    <sc-text-field small />
                  </sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-form-box col="2">
  <sc-form-item label="Hello">안녕하세요</sc-form-item>
  <sc-form-item label="World">월드!</sc-form-item>
  <sc-form-item required span="2">
    <template v-slot:label>
      <sc-checkbox>사용자 정의 라벨</sc-checkbox>
    </template>
  </sc-form-item>
</sc-form-box>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- 여러 형태의 row 구성 -->
        <sc-sample-box title="여러 형태의 row 구성">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-form-box col="6">
                  <!-- 2 + 4 = 6 -->
                  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
                  <sc-form-item label="Span 4" span="4"><sc-text-field small /></sc-form-item>
                  <!-- 3 + 3 = 6 -->
                  <sc-form-item lable="Span 3" span="3"><sc-text-field small /></sc-form-item>
                  <sc-form-item label="Span 3" span="3"><sc-text-field small /></sc-form-item>
                  <!-- 4 + 2 = 6 -->
                  <sc-form-item label="Span 4" span="4"><sc-text-field small /></sc-form-item>
                  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
                  <!-- 2 + 2 + 2 = 6 -->
                  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
                  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
                  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-form-box col="6">
  <!-- 2 + 4 = 6 -->
  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
  <sc-form-item label="Span 4" span="4"><sc-text-field small /></sc-form-item>
  <!-- 3 + 3 = 6 -->
  <sc-form-item lable="Span 3" span="3"><sc-text-field small /></sc-form-item>
  <sc-form-item label="Span 3" span="3"><sc-text-field small /></sc-form-item>
  <!-- 4 + 2 = 6 -->
  <sc-form-item label="Span 4" span="4"><sc-text-field small /></sc-form-item>
  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
  <!-- 2 + 2 + 2 = 6 -->
  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
  <sc-form-item label="Span 2" span="2"><sc-text-field small /></sc-form-item>
</sc-form-box>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //여러 형태의 row 구성 -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScTextField from '@/components/common/ScTextField.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScCheckbox from '@/components/common/ScCheckbox.vue';
//import ScCheckboxWrapper from '@/components/common/ScCheckboxWrapper.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleFormBox',
  components: {
    ScTextField,
    ScFormBox,
    ScFormItem,
    ScCheckbox,
    //ScCheckboxWrapper,
    ScSampleBox,
    ScCodeHighlight,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion
  },
  data() {
    return {
      selectedTabId: 1,
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
};
</script>

<style lang="sass" scoped></style>
