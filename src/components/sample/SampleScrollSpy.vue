<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>
            스크롤 위치에 따라 뷰포트에서 현재 활성화된 섹션을 제공하여 class제어로 현재 위치 표시 가능
            <div class="mt-5">
              sc-scroll-spy로 감싸주고 sc-scroll-section 항목을 넣어줍니다.<br />sc-scroll-spy의 높이를
              지정합니다.(기본값 500)
            </div>
            <div class="mt-5">
              this.$refs.scrollSpy.scrollToSection('section에서 지정한 id');를 이용하여 해당 섹션으로
              이동합니다.
            </div>
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="section-nav">
                  <div
                    class="item"
                    :class="{ active: sectionId === sectionName }"
                    v-for="sectionName in sectionList"
                    :key="sectionName"
                    @click="$refs.scrollSpy.scrollToSection(sectionName)"
                  >
                    {{ sectionName }}
                  </div>
                </div>

                <sc-scroll-spy ref="scrollSpy" height="500" class="text-white" @change="onChange">
                  <sc-scroll-section id="section1">
                    <div class="h-[400px] bg-slate-900">섹션 1</div>
                  </sc-scroll-section>
                  <sc-scroll-section id="section2">
                    <div class="h-[500px] bg-slate-800">섹션 2</div>
                  </sc-scroll-section>
                  <sc-scroll-section id="section3">
                    <div class="h-[600px] bg-slate-700">섹션 3</div>
                  </sc-scroll-section>
                  <sc-scroll-section id="section4">
                    <div class="h-[700px] bg-slate-600">섹션 4</div>
                  </sc-scroll-section>
                  <sc-scroll-section id="section5">
                    <div class="h-[800px] bg-slate-500">섹션 5</div>
                  </sc-scroll-section>
                </sc-scroll-spy>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ sectionId }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='
<!-- nav 디자인과 클래스 마음대로 가능. 중요한건 현재 보여주고 있는 sectionId와 동일할 경우 active 처리 -->
<div class="section-nav">
  <div
    class="item"
    :class="{ active: sectionId === sectionName }"
    v-for="sectionName in sectionList"
    :key="sectionName"
    @click="$refs.scrollSpy.scrollToSection(sectionName)"
  >
    {{ sectionName }}
  </div>
</div>
<sc-scroll-spy ref="scrollSpy" height="500" class="text-white" @change="onChange">
  <sc-scroll-section id="section1">
    <div class="h-[400px] bg-slate-900">섹션 1</div>
  </sc-scroll-section>
  <sc-scroll-section id="section2">
    <div class="h-[400px] bg-slate-800">섹션 2</div>
  </sc-scroll-section>
  <sc-scroll-section id="section3">
    <div class="h-[400px] bg-slate-700">섹션 3</div>
  </sc-scroll-section>
  <sc-scroll-section id="section4">
    <div class="h-[400px] bg-slate-600">섹션 4</div>
  </sc-scroll-section>
  <sc-scroll-section id="section5">
    <div class="h-[400px] bg-slate-500">섹션 5</div>
  </sc-scroll-section>
</sc-scroll-spy>

<div class="mt-5 text-sm">결과 : {{ sectionId }}</div>
'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
  data() {
    return {
      sectionId: '',
      sectionList: ['section1', 'section2', 'section3', 'section4', 'section5'],
    };
  },
  methods: {
    onChange(id) {
      this.sectionId = id;
    },
  },
};"
        :style="`.section-nav {
  display: flex;
  font-size: $SC-FONT-SIZE-BODY-2;
  .item {
    margin-right: 10px;
    padding: 5px 15px;
    cursor: pointer;
    &.active {
      color: $SC-COLOR-WHITE;
      background: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
  }
}`"
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
import ScScrollSpy from '@/components/common/ScScrollSpy.vue';
import ScScrollSection from '@/components/common/ScScrollSection.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleScrollSpy',
  components: { ScSampleBox, ScCodeHighlight, ScScrollSection, ScScrollSpy, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      sectionId: '',
      sectionList: ['section1', 'section2', 'section3', 'section4', 'section5'],
    };
  },
  methods: {
    onChange(id) {
      this.sectionId = id;
    },
  },
};
</script>

<style scoped lang="scss">
.section-nav {
  display: flex;
  font-size: $SC-FONT-SIZE-BODY-2;
  .item {
    margin-right: 10px;
    padding: 5px 15px;
    cursor: pointer;
    &.active {
      color: $SC-COLOR-WHITE;
      background: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
  }
}
</style>
