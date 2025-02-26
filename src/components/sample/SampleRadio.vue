<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <sc-radio v-model="value" :value="true">True</sc-radio>
                  <sc-radio v-model="value" :value="false">False</sc-radio>
                </div>
                <div class="mt-5">
                  <sc-radio v-model="value" :value="true" disabled>True</sc-radio>
                  <sc-radio v-model="value" :value="false" disabled>False</sc-radio>
                </div>
                <div class="mt-5">
                  <sc-radio v-model="value" :value="true" medium>True</sc-radio>
                  <sc-radio v-model="value" :value="false" size="medium">False</sc-radio>
                </div>
                <div class="mt-5">
                  <sc-radio v-model="value" :value="true" medium disabled>True</sc-radio>
                  <sc-radio v-model="value" :value="false" size="medium" disabled>False</sc-radio>
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
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div>
  <sc-radio v-model="value" :value="true">True</sc-radio>
  <sc-radio v-model="value" :value="false">False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" disabled>True</sc-radio>
  <sc-radio v-model="value" :value="false" disabled>False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" medium>True</sc-radio>
  <sc-radio v-model="value" :value="false" size="medium">False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" medium disabled>True</sc-radio>
  <sc-radio v-model="value" :value="false" size="medium" disabled>False</sc-radio>
</div>
<div class="text-sm mt-5">결과 : {{ value }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="data() {
  return {
    value: false,
  };
},"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Key값을 이용한 radio -->
        <sc-sample-box title="Key값을 이용한 radio">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-radio
                  v-for="item in items"
                  :key="item.value"
                  v-model="value2"
                  :value="item.value"
                  size="samll"
                >
                  {{ item.text }}
                </sc-radio>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div>
  <sc-radio
    v-for="item in items"
    :key="item.value"
    v-model="value2"
    :value="item.value"
    size="samll"
  >
    {{ item.text }}
  </sc-radio>
</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="data() {
  return {
    items: [
      { value: 'VUE1', text: 'value_01' },
      { value: 'VUE2', text: 'value_02' },
      { value: 'VUE3', text: 'value_03' },
      { value: 'VUE4', text: 'value_04' },
    ],
    value2: '',
  };
},"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Key값을 이용한 radio -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScRadio from '@/components/common/ScRadio.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleRadio',
  components: { ScCodeHighlight, ScRadio, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      value: false,
      items: [
        { value: 'VUE1', text: 'value_01' },
        { value: 'VUE2', text: 'value_02' },
        { value: 'VUE3', text: 'value_03' },
        { value: 'VUE4', text: 'value_04' },
      ],
      value2: '',
    };
  },
};
</script>
