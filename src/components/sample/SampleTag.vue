<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-tag value="태그 1" />
                <sc-tag value="태그 2" />
                <sc-tag value="태그 3" />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-tag value="태그 1" />
<sc-tag value="태그 2" />
<sc-tag value="태그 3" />'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- close -->
        <sc-sample-box title="close">
          <template #description>close-btn : 버튼추가, @close : 닫기 버튼이 눌렸을때 이벤트</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-tag v-for="tag in tags" :key="tag" :value="tag" close-btn @close="onClose" />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ tags }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-tag v-for="tag in tags" :key="tag" :value="tag" close-btn @close="onClose" />
<div class="mt-5 text-sm">결과 : {{ tags }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    tags: [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Eleven',
      'Twelve',
      'Thirteen',
      'Fourteen',
      'Fifteen',
      'Sixteen',
      'Seventeen',
      'Eighteen',
      'Nineteen',
      'Twenty',
    ],
  };
},
methods: {
  onClose(deleteValue) {
    console.info('삭제된 아이템', deleteValue);
    this.tags = this.tags.filter((tag) => tag !== deleteValue);
  },
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //close -->
        <!-- color -->
        <sc-sample-box title="color">
          <template #description>미리 정해진 색상 또는 hex 컬러코드(#ffcc00) 를 입력하여 색상을 입힐 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <sc-tag value="One" color="black" />
                  <sc-tag value="Two" color="black" />
                  <sc-tag value="Three" color="black" />
                  <sc-tag value="Four" color="dark" />
                  <sc-tag value="Five" color="dark" />
                  <sc-tag value="Six" color="dark" />
                  <sc-tag value="Seven" color="blue" />
                  <sc-tag value="Eight" color="blue" />
                  <sc-tag value="Nine" color="blue" />
                  <sc-tag value="Ten" color="green" />
                  <sc-tag value="Eleven" color="green" />
                  <sc-tag value="Twelve" color="green" />
                  <sc-tag value="Thirteen" color="red" />
                  <sc-tag value="Fourteen" color="red" />
                  <sc-tag value="Fifteen" color="red" />
                  <sc-tag value="Sixteen" color="yellow" />
                  <sc-tag value="Seventeen" color="yellow" />
                  <sc-tag value="Eighteen" color="yellow" />
                  <sc-tag value="Nineteen" />
                  <sc-tag value="Twenty" />
                </div>
                <div class="mt-5">
                  <sc-tag close-btn value="One" color="black" />
                  <sc-tag close-btn value="Two" color="dark" />
                  <sc-tag close-btn value="Three" color="blue" />
                  <sc-tag close-btn value="Four" color="green" />
                  <sc-tag close-btn value="Five" color="red" />
                  <sc-tag close-btn value="Six" color="yellow" />
                  <sc-tag close-btn value="Seven" />
                  <sc-tag close-btn value="Eight" color="#ffcc00" />
                  <sc-tag close-btn value="Nine" color="#cccccc" />
                  <sc-tag close-btn value="Ten" color="#17B675" />
                  <sc-tag close-btn value="Eleven" color="#443084" />
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div>
<sc-tag value="One" color="black" />
<sc-tag value="Two" color="black" />
<sc-tag value="Three" color="black" />
<sc-tag value="Four" color="dark" />
<sc-tag value="Five" color="dark" />
<sc-tag value="Six" color="dark" />
<sc-tag value="Seven" color="blue" />
<sc-tag value="Eight" color="blue" />
<sc-tag value="Nine" color="blue" />
<sc-tag value="Ten" color="green" />
<sc-tag value="Eleven" color="green" />
<sc-tag value="Twelve" color="green" />
<sc-tag value="Thirteen" color="red" />
<sc-tag value="Fourteen" color="red" />
<sc-tag value="Fifteen" color="red" />
<sc-tag value="Sixteen" color="yellow" />
<sc-tag value="Seventeen" color="yellow" />
<sc-tag value="Eighteen" color="yellow" />
<sc-tag value="Nineteen" />
<sc-tag value="Twenty" />
</div>
<div class="mt-5">
<sc-tag close-btn value="One" color="black" />
<sc-tag close-btn value="Two" color="dark" />
<sc-tag close-btn value="Three" color="blue" />
<sc-tag close-btn value="Four" color="green" />
<sc-tag close-btn value="Five" color="red" />
<sc-tag close-btn value="Six" color="yellow" />
<sc-tag close-btn value="Seven" />
<sc-tag close-btn value="Eight" color="#ffcc00" />
<sc-tag close-btn value="Nine" color="#cccccc" />
<sc-tag close-btn value="Ten" color="#17B675" />
<sc-tag close-btn value="Eleven" color="#443084" />
</div>'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //color -->
        <!-- size -->
        <sc-sample-box title="size">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <h2 class="title">small</h2>
                <div>
                  <sc-tag value="One" size="small" />
                  <sc-tag value="Two" size="small" color="blue" />
                  <sc-tag value="Three" size="small" color="red" />
                  <sc-tag value="One" size="small" close-btn />
                  <sc-tag value="Two" size="small" color="blue" close-btn />
                  <sc-tag value="Three" size="small" color="red" close-btn />
                </div>
                <h2 class="title">medium</h2>
                <div>
                  <sc-tag value="One" size="medium" />
                  <sc-tag value="Two" size="medium" color="blue" />
                  <sc-tag value="Three" size="medium" color="red" />
                  <sc-tag value="One" size="medium" close-btn />
                  <sc-tag value="Two" size="medium" color="blue" close-btn />
                  <sc-tag value="Three" size="medium" color="red" close-btn />
                </div>
                <h2 class="title">large</h2>
                <div>
                  <sc-tag value="One" size="large" />
                  <sc-tag value="Two" size="large" color="blue" />
                  <sc-tag value="Three" size="large" color="red" />
                  <sc-tag value="One" size="large" close-btn />
                  <sc-tag value="Two" size="large" color="blue" close-btn />
                  <sc-tag value="Three" size="large" color="red" close-btn />
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<h2 class="title">small</h2>
<div>
<sc-tag value="One" size="small" />
<sc-tag value="Two" size="small" color="blue" />
<sc-tag value="Three" size="small" color="red" />
<sc-tag value="One" size="small" close-btn />
<sc-tag value="Two" size="small" color="blue" close-btn />
<sc-tag value="Three" size="small" color="red" close-btn />
</div>
<h2 class="title">medium</h2>
<div>
<sc-tag value="One" size="medium" />
<sc-tag value="Two" size="medium" color="blue" />
<sc-tag value="Three" size="medium" color="red" />
<sc-tag value="One" size="medium" close-btn />
<sc-tag value="Two" size="medium" color="blue" close-btn />
<sc-tag value="Three" size="medium" color="red" close-btn />
</div>
<h2 class="title">large</h2>
<div>
<sc-tag value="One" size="large" />
<sc-tag value="Two" size="large" color="blue" />
<sc-tag value="Three" size="large" color="red" />
<sc-tag value="One" size="large" close-btn />
<sc-tag value="Two" size="large" color="blue" close-btn />
<sc-tag value="Three" size="large" color="red" close-btn />
</div>'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //size -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTag from '@/components/common/ScTag.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleTag',
  components: { ScCodeHighlight, ScTag, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      tags: [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
        'Twenty',
      ],
    };
  },
  methods: {
    onClose(deleteValue) {
      console.info('삭제된 아이템', deleteValue);
      this.tags = this.tags.filter((tag) => tag !== deleteValue);
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 20px 0 10px 0;
  font-size: 15px;
}
</style>
