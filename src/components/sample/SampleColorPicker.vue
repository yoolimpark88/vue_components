<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description> init-show: 생성시 open 상태로 유지 </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Preview" init-show>
              <template #demo>
                <sc-color-picker v-model="color" @change="onChange" />
                <sc-color-picker v-model="color" @change="onChange" size="medium" />
                <sc-color-picker v-model="color" @change="onChange" size="large" />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ color }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-color-picker v-model="color" @change="onChange" />
<sc-color-picker v-model="color" @change="onChange" size="medium" />
<sc-color-picker v-model="color" @change="onChange" size="large" />
<p class="list">결과 : {{ color }}</p>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
return {
  color: '#2584da',
};
},
methods: {
onChange(colorCode) {
  console.info('onChange', colorCode);
},
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScColorPicker from '@/components/common/ScColorPicker.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleColorPicker',
  components: {
    ScCodeHighlight,
    ScColorPicker,
    ScSampleBox,
    ScDetailAccordionWrapper,
    ScDetailAccordion,
    ScDetailTabBox,
    ScDetailTabContent
  },
  data() {
    return {
      color: '#2584da',
      selectedTabId: 1,
    };
  },
  methods: {
    onChange(colorCode) {
      console.info('onChange', colorCode);
    },
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
};
</script>

<style scoped lang="scss">
.sc-color-picker + .sc-color-picker {
  margin-left: 10px;
}
</style>
