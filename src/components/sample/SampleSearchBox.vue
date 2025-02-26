<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-search-box>
                  <sc-search-item label="기간">
                    <sc-checkbox value="week">1주</sc-checkbox>
                    <sc-checkbox value="month" class="mr-5">한달</sc-checkbox>
                    <br />
                    <sc-datepicker samll init="today" v-model="now" />
                    <span>~</span>
                    <sc-datepicker samll init="today" v-model="now" />
                  </sc-search-item>

                  <sc-search-item label="그룹" required>
                    <sc-dropdown small />
                  </sc-search-item>

                  <sc-search-item label="이름" required>
                    <sc-text-field small disabled v-model="text" />
                  </sc-search-item>

                  <sc-search-item label="라벨의 글자수가 많을 경우에는 이렇게 사용합니다" required>
                    <sc-text-field small disabled v-model="text" />
                  </sc-search-item>

                  <sc-search-item label="제목" reqired>
                    <sc-text-field small disabled />
                  </sc-search-item>

                  <sc-search-item label="기간">
                    <sc-checkbox disabled value="week">1주</sc-checkbox>
                    <sc-checkbox disabled value="month" class="mr-5">한달</sc-checkbox>
                    <br />
                    <sc-datepicker disabled small init="today" v-model="now" />
                    <span>~</span>
                    <sc-datepicker disabled small init="today" v-model="now" />
                  </sc-search-item>

                  <!-- 하단 actionBar -->
                  <template v-slot:action-bar="{ toggleFold, isFold, isFoldButtonDisable }">
                    <sc-button small>초기화</sc-button>
                    <sc-button small @click="toggleFold" :disabled="isFoldButtonDisable">
                      {{ isFold ? `접기` : `펼치기` }}
                    </sc-button>
                    <sc-button small color="primary">검색</sc-button>
                  </template>
                </sc-search-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-search-box>
  <sc-search-item label="기간">
    <sc-checkbox disabled value="week">1주</sc-checkbox>
    <sc-checkbox disabled value="month" class="mr-5">한달</sc-checkbox>
    <br />
    <sc-datepicker disabled small init="today" v-model="now" />
    <span>~</span>
    <sc-datepicker disabled small init="today" v-model="now" />
  </sc-search-item>

  <!-- 하단 actionBar -->
  <template>
    <sc-button small>초기화</sc-button>
    <sc-button small @click="toggleFold" :disabled="isFoldButtonDisable">
      {{ isFold ? `접기` : `펼치기` }}
    </sc-button>
    <sc-button small color="primary">검색</sc-button>
  </template>
</sc-search-box>    
'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- 여러 형태의 row 구성 -->
        <sc-sample-box title="여러 형태의 row 구성">
          <template #description>fold-line : 접기를 눌렀을때 노출시킬 라인 수(기본값 1)</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-search-box col="12" fold-line="3">
                <!-- 3 + 3 + 3 + 3 = 12 -->
                <sc-search-item label="Span 3" span="3" required><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>

                <!-- 4 + 4 + 4 = 12 -->
                <sc-search-item label="Span 4" span="4" required><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 4" span="4"><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 4" span="4"><sc-text-field small /></sc-search-item>

                <!-- 6 + 6 = 12 -->
                <sc-search-item label="Span 6" span="6" required><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 6" span="6"><sc-text-field small /></sc-search-item>

                <!-- 6 + 6(no-label) = 12 -->
                <sc-search-item label="Span 6" span="6" required><sc-text-field small /></sc-search-item>
                <sc-search-item label="Span 6" span="6"></sc-search-item>

                <!-- 12 = 12 -->
                <sc-search-item label="Span 12" span="12"><sc-text-field small /></sc-search-item>

                <!-- 하단 action-bar -->
                <template v-slot:action-bar="{ toggleFold, isFold, isFoldButtonDisabled }">
                  <sc-button small>초기화</sc-button>
                  <sc-button small @click="toggleFold" :disabled="isFoldButtonDisabled">
                    {{ isFold ? `접기` : `펼치기` }}
                  </sc-button>
                  <sc-button small color="primary">검색</sc-button>
                </template>
              </sc-search-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-search-box col="12" fold-line="3">
  <!-- 3 + 3 + 3 + 3 = 12 -->
  <sc-search-item label="Span 3" span="3" required><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 3" span="3"><sc-text-field small /></sc-search-item>

  <!-- 4 + 4 + 4 = 12 -->
  <sc-search-item label="Span 4" span="4" required><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 4" span="4"><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 4" span="4"><sc-text-field small /></sc-search-item>

  <!-- 6 + 6 = 12 -->
  <sc-search-item label="Span 6" span="6" required><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 6" span="6"><sc-text-field small /></sc-search-item>

  <!-- 6 + 6(no-label) = 12 -->
  <sc-search-item label="Span 6" span="6" required><sc-text-field small /></sc-search-item>
  <sc-search-item label="Span 6" span="6"></sc-search-item>

  <!-- 12 = 12 -->
  <sc-search-item label="Span 12" span="12"><sc-text-field small /></sc-search-item>

  <!-- 하단 action-bar -->
  <template v-slot:action-bar="{ toggleFold, isFold, isFoldButtonDisabled }">
    <sc-button small>초기화</sc-button>
    <sc-button small @click="toggleFold" :disabled="isFoldButtonDisabled">
      {{ isFold ? `접기` : `펼치기` }}
    </sc-button>
    <sc-button small color="primary">검색</sc-button>
  </template>
</sc-search-box>'
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
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScSearchBox from '@/components/common/ScSearchBox.vue';
import ScSearchItem from '@/components/common/ScSearchItem.vue';
//import ScDropDown from '@/components/common/ScDropdown.vue';
import ScCheckbox from '@/components/common/ScCheckbox.vue';
import ScDatepicker from '@/components/common/ScDatePicker.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleSearchBox',
  components: {
    ScSampleBox,
    ScCodeHighlight,
    ScSearchBox,
    ScSearchItem,
    ScCheckbox,
    ScDatepicker,
    ScTextField,
    ScButton,
    ScDetailTabBox, 
    ScDetailTabContent, 
    ScDetailAccordionWrapper, 
    ScDetailAccordion
  },
  data() {
    return {
      text: '안녕하세요',
      params: {
        group: '',
        name: '',
      },
      now: '',
    };
  },
  methods: {
    initParams() {
      // 파라미터 초기화 로직
    },
    search() {
      // 검색 버튼 로직
    },
  },
};
</script>

<style scoped lang="scss"></style>
