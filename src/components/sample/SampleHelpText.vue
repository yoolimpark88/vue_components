<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>도움말 텍스트는 사용자 입력에 대한 정보를 제공 또는 오류 방지를 위한 가이드를 제공한다. 일반적으로 주요 Input, Select컴포넌트와 함께 쓰인다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <table class="demoTable">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Default</th>
                        <th>Info Primary</th>
                        <th>Info Guide</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Large</th>
                        <td><ScHelpText size="large">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="large" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="large" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                      <tr>
                        <th>Medium</th>
                        <td><ScHelpText size="medium">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="medium" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="medium" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                      <tr>
                        <th>Small</th>
                        <td><ScHelpText size="small">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="small" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="small" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<table class="demoTable">
  <thead>
    <tr>
      <th></th>
      <th>Default</th>
      <th>Info Primary</th>
      <th>Info Guide</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Large</th>
      <td><ScHelpText size="large">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="large" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="large" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
    <tr>
      <th>Medium</th>
      <td><ScHelpText size="medium">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="medium" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="medium" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
    <tr>
      <th>Small</th>
      <td><ScHelpText size="small">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="small" type="info">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="small" type="caution">도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
  </tbody>
</table>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Icon+Help Text -->
        <sc-sample-box title="Icon+Help Text">
          <template #description>도움말 텍스트를 아이콘을 활용하여 적용할 수 있다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <table class="demoTable">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Default</th>
                        <th>Info Primary</th>
                        <th>Info Guide</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Large</th>
                        <td><ScHelpText size="large" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="large" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="large" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                      <tr>
                        <th>Medium</th>
                        <td><ScHelpText size="medium" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="medium" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="medium" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                      <tr>
                        <th>Small</th>
                        <td><ScHelpText size="small" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="small" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                        <td><ScHelpText size="small" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<table class="demoTable">
  <thead>
    <tr>
      <th></th>
      <th>Default</th>
      <th>Info Primary</th>
      <th>Info Guide</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Large</th>
      <td><ScHelpText size="large" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="large" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="large" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
    <tr>
      <th>Medium</th>
      <td><ScHelpText size="medium" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="medium" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="medium" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
    <tr>
      <th>Small</th>
      <td><ScHelpText size="small" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="small" type="info" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
      <td><ScHelpText size="small" type="caution" icon>도움말 텍스트는 설명이나 특정 가이드를 제공한다.</ScHelpText></td>
    </tr>
  </tbody>
</table>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Icon+Help Text -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScHelpText from '@/components/common/ScHelpText.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleHelpText',
  components: { ScSampleBox, ScHelpText, ScCodeHighlight, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
  data() {
    return {      
    };
  },
};
</script>

<style scoped lang="scss">
.demoTable {
  width:100%;
  th,
  td {
    padding: 5px 10px;
  }
  thead {
    th {
      font-weight: bold;
      color: $SC-COLOR-TYPE2-GRAY-100;
    }
  }
  tbody {
    th {
      font-weight: 400;
      color: $SC-COLOR-TYPE2-GRAY-90;
    }
  }
}
</style>
