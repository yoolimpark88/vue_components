<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[150px] mt-5 border">
                  <sc-text-field placeholder="입력해주세요" v-model="value" />
                </div>
                <div class="w-[150px] mt-5">
                  <sc-text-field placeholder="입력해주세요" v-model="value" rounded />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='
  <sc-text-field placeholder="입력해주세요" v-model="value" />
  <sc-text-field placeholder="입력해주세요" v-model="value" rounded />'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value: '',
    };
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- icon -->
        <sc-sample-box title="icon">
          <template #description>x아이콘을 누르거나 esc키를 누르면 clear이벤트가 전달됩니다.<br />검색 아이콘을 누르거나 enter키를 누르면 @search 이벤트가 발생합니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[150px] mt-5">
                  <sc-text-field
                    placeholder="입력해주세요"
                    v-model="text"
                    clearable
                    searchable
                    @search="onSearch"
                  />
                </div>
                <div class="w-[150px] mt-5">
                  <sc-text-field
                    placeholder="입력해주세요"
                    v-model="text"
                    clearable
                    searchable
                    small
                    rounded
                    @search="onSearch"
                  />
                </div>
                <div class="w-[150px] mt-5">
                  <sc-text-field
                    placeholder="입력해주세요"
                    v-model="text"
                    clearable
                    searchable
                    medium
                    @search="onSearch"
                  />
                </div>
                <div class="w-[150px] mt-5">
                  <sc-text-field
                    placeholder="입력해주세요"
                    v-model="text"
                    clearable
                    searchable
                    medium
                    rounded
                    @search="onSearch"
                  />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ text }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='
<sc-text-field
  placeholder="입력해주세요"
  v-model="text"
  clearable
  searchable
  @search="onSearch"
/>
<sc-text-field
  placeholder="입력해주세요"
  v-model="text"
  clearable
  searchable
  small
  rounded
  @search="onSearch"
/>
<sc-text-field
  placeholder="입력해주세요"
  v-model="text"
  clearable
  searchable
  medium
  @search="onSearch"
/>
<sc-text-field
  placeholder="입력해주세요"
  v-model="text"
  clearable
  searchable
  medium
  rounded
  @search="onSearch"
/>
'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      text: '안녕하세요',
    };
  },
  methods: {
    onSearch() {
      console.log('검색어 입력 =>', this.text);
    },
  },
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //icon -->
        <!-- disabled 비활성화 -->
        <sc-sample-box title="disabled 비활성화">
          <template #description>x아이콘을 누르거나 esc키를 누르면 clear이벤트가 전달됩니다.<br />검색 아이콘을 누르거나 enter키를 누르면 @search 이벤트가 발생합니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[150px] mt-5">
                  <sc-text-field placeholder="입력해주세요" v-model="text" disabled />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ text }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-text-field placeholder="입력해주세요" v-model="text" disabled />'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //disabled 비활성화 -->
        <!-- readonly 읽기전용 -->
        <sc-sample-box title="readonly 읽기전용">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[150px] mt-5">
                  <sc-text-field placeholder="입력해주세요" v-model="text" readonly />
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-text-field placeholder="입력해주세요" v-model="text" readonly />'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //readonly 읽기전용 -->
        <!-- mask -->
        <sc-sample-box title="mask">          
          <template #description>Mask 표현식입니다. #(숫자), A(대문자), a(소문자), N(숫자/대문자), n(숫자/소문자)와 특수기호의 조합으로 표현합니다.<br />표현식의 preset으로 number, english, korean 그리고 /로 시작 / 끝나는 정규식을 사용할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-form-box col="1">
                  <sc-form-item label="숫자만 mask='number'">
                    <div class="flex items-center gap-5">
                      <sc-text-field placeholder="숫자" v-model="mask.number" mask="number" />
                      <div class="text-sm">결과 : {{ mask.number }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="영어/숫자만 mask='english'">
                    <div class="flex items-center gap-5">
                      <sc-text-field placeholder="알파벳, 숫자" v-model="mask.english" mask="english" />
                      <div class="text-sm">결과 : {{ mask.english }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="한글/숫자만 mask='korean'">
                    <div class="flex items-center gap-5">
                      <sc-text-field placeholder="한글, 숫자" v-model="mask.korean" mask="korean" />
                      <div class="text-sm">결과 : {{ mask.korean }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="정규식<br/>mask='/[0-9]+/'">
                    <div class="flex items-center gap-5">
                      <sc-text-field
                        placeholder="정규식 숫자만 /[0-9]+/"
                        v-model="mask.value1"
                        mask="/[0-9]+/"
                      />
                      <div class="결과">결과 : {{ mask.value1 }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="표현식<br/>mask='####'">
                    <div class="flex items-center gap-5">
                      <sc-text-field placeholder="숫자 최대 4개" v-model="mask.value2" mask="####" />
                      <div class="text-sm">결과 : {{ mask.value2 }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="표현식<br/>mask='aAaAaA'">
                    <div class="flex items-center gap-5">
                      <sc-text-field
                        placeholder="소문자, 대문자, 소문자, 대문자, 소문자, 대문자"
                        v-model="mask.value3"
                        mask="aAaAaA"
                      />
                      <div class="결과">결과 : {{ mask.value3 }}</div>
                    </div>
                  </sc-form-item>
                  <sc-form-item label="표현식<br/>mask=###aaa">
                    <div class="flex items-center gap-5">
                      <sc-text-field placeholder="숫자3개,소문자3개" v-model="mask.value4" mask="###aaa" />
                      <div class="text-sm">결과 : {{ mask.value4 }}</div>
                    </div>
                  </sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='
<sc-text-field placeholder="숫자" v-model="mask.number" mask="number" />
<sc-text-field placeholder="알파벳, 숫자" v-model="mask.english" mask="english" />
<sc-text-field placeholder="한글, 숫자" v-model="mask.korean" mask="korean" />
<sc-text-field placeholder="정규식 숫자만 /[0-9]+/" v-model="mask.value1" mask="/[0-9]+/" />
<sc-text-field placeholder="숫자 최대 4개" v-model="mask.value2" mask="####" />
<sc-text-field placeholder="소문자, 대문자, 소문자, 대문자, 소문자, 대문자" v-model="mask.value3" mask="aAaAaA" />
<sc-text-field placeholder="숫자3개,소문자3개" v-model="mask.value4" mask="###aaa" />
'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
  data() {
    return {
      mask: {
        number: '',
        english: '',
        korean: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
      },
    };
  },
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //mask -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScTextField from '@/components/common/ScTextField.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleTextField',
  components: { ScTextField, ScFormBox, ScFormItem, ScSampleBox, ScCodeHighlight, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      mask: {
        number: '',
        english: '',
        korean: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
      },
      value: '',
      text: '안녕하세요',
    };
  },
  methods: {
    onSearch() {
      console.info('검색어 입력 =>', this.text);
    },
  },
};
</script>

<style scoped lang="scss"></style>
