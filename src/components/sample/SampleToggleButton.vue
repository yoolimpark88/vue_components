<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-switch v-model="value" @change="onChange($event)" />
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
              template='<sc-switch v-model="value" @change="onChange($event)" />
<div class="mt-5 text-sm">결과 : {{ value }}</div>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value: false,
    };
  },
  methods: {
    onChange(val) {
      console.info('changed', val)
    }
  }
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- size -->
        <sc-sample-box title="size">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex items-end gap-2">
                  <sc-switch v-model="value2" />
                  <sc-switch v-model="value2" medium />
                  <sc-switch v-model="value2" size="large" />
                </div>
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
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-switch v-model="value2" />
<sc-switch v-model="value2" medium />
<sc-switch v-model="value2" size="large" />'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value2: true,
    };
  },
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //size -->
        <!-- disabled -->
        <sc-sample-box title="disabled">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex items-end gap-2">
                  <sc-switch v-model="value3" small disabled />
                  <sc-switch v-model="value3" medium disabled />
                  <sc-switch v-model="value3" size="large" disabled />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value3 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-switch v-model="value3" small disabled />
<sc-switch v-model="value3" medium disabled />
<sc-switch v-model="value4" size="large" disabled />'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value3: false,
    };
  },
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //disabled -->
        <!-- labeled -->
        <sc-sample-box title="labeled">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex items-end gap-2">
                  <sc-switch v-model="value3" small labeled />
                  <sc-switch v-model="value3" medium labeled />
                  <sc-switch v-model="value3" size="large" labeled />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value3 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-switch v-model="value3" small labeled />
<sc-switch v-model="value3" medium labeled />
<sc-switch v-model="value4" size="large" labeled />'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value3: false,
    };
  },
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //labeled -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScSwitch from '@/components/common/ScSwitch.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleToggleButton',
  components: { ScSampleBox, ScSwitch, ScCodeHighlight, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      value: false,
      value2: true,
      value3: false,
    };
  },
  methods: {
    onChange(val) {
      console.info('changed', val);
    },
  },
};
</script>
