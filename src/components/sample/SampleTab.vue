<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box title="Basig Usage">
          <template #description> init-show: 생성시 open 상태로 유지 </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-tab-box @click="onClick">
                  <sc-tab-content label="TAB 1" :idx="1">탭 1 내용</sc-tab-content>
                  <sc-tab-content label="TAB 2" :idx="2">탭 2 내용</sc-tab-content>
                  <sc-tab-content label="TAB 3" :idx="3">탭 3 내용</sc-tab-content>
                  <sc-tab-content label="TAB 라벨명이 굉장히 길 경우 Tooltip 발생" :idx="4"
                    >탭 4 내용</sc-tab-content
                  >
                  <!-- Tab label 메뉴 사용자 Custom -->
                  <sc-tab-label :idx="5">
                    <span style="color: yellowgreen; font-weight: bold">Custom 탭 메뉴</span>
                  </sc-tab-label>
                  <sc-tab-content label="TAB 5" :idx="5">탭 5 내용</sc-tab-content>
                </sc-tab-box>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">선택중인 Tab Idx : {{ selectedTabId }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-tab-box @click="onClick">
  <sc-tab-content label="TAB 1" :idx="1">탭 1 내용</sc-tab-content>
  <sc-tab-content label="TAB 2" :idx="2">탭 2 내용</sc-tab-content>
  <sc-tab-content label="TAB 3" :idx="3">탭 3 내용</sc-tab-content>
  <sc-tab-content label="TAB 라벨명이 굉장히 길 경우 Tooltip 발생" :idx="4">탭 4 내용</sc-tab-content>
  <!-- Tab label 메뉴 사용자 Custom -->
  <sc-tab-label :idx="5">
    <span style="color: yellowgreen; font-weight: bold">Custom 탭 메뉴</span>
  </sc-tab-label>
  <sc-tab-content label="TAB 5" :idx="5">탭 5 내용</sc-tab-content>
</sc-tab-box>

<div class="mt-5 text-sm">선택중인 Tab Idx : {{ selectedTabId }}</div>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- init-idx 최초로 보여주는 탭 -->
        <sc-sample-box title="init-idx 최초로 보여주는 탭">
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-tab-box init-idx="2">
                  <sc-tab-content label="TAB 1" :idx="1">탭 1 내용</sc-tab-content>
                  <sc-tab-content label="TAB 2" :idx="2">탭 2 내용</sc-tab-content>
                  <sc-tab-content label="TAB 3" :idx="3">탭 3 내용</sc-tab-content>
                </sc-tab-box>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">선택중인 Tab Idx : {{ selectedTabId }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-tab-box init-idx="2">
  <sc-tab-content label="TAB 1" :idx="1">탭 1 내용</sc-tab-content>
  <sc-tab-content label="TAB 2" :idx="2">탭 2 내용</sc-tab-content>
  <sc-tab-content label="TAB 3" :idx="3">탭 3 내용</sc-tab-content>
</sc-tab-box>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //init-idx 최초로 보여주는 탭 -->
        <!-- navigation -->
        <sc-sample-box title="navigation">
          <template #description>탭영역이 길어질 경우(동적 탭 변경, 리사이즈에 의한) 자동으로 우측에 네비게이션이 생성됩니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-tab-box>
                  <sc-tab-content
                    v-for="(item, idx) in tabSize"
                    :key="idx"
                    :label="`TAB Navigation ${idx + 1}`"
                    :idx="idx"
                    >탭 {{ idx + 1 }} 내용
                  </sc-tab-content>
                </sc-tab-box>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Events</div>
                  <div class="box">
                    <sc-button @click="() => tabSize++">탭 추가</sc-button>
                    <sc-button @click="() => (tabSize = Math.max(0, --tabSize))">탭 빼기</sc-button>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="mb-5">
  <sc-button @click="() => tabSize++">탭 추가</sc-button>
  <sc-button @click="() => (tabSize = Math.max(0, --tabSize))">탭 빼기</sc-button>
</div>
<sc-tab-box>
  <sc-tab-content
    v-for="(item, idx) in tabSize"
    :key="idx"
    :label="`TAB Navigation ${idx + 1}`"
    :idx="idx"
  >
    탭 {{ idx + 1 }}
  </sc-tab-content>
</sc-tab-box>'
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //navigation -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTabBox from '@/components/common/ScTabBox.vue';
import ScTabContent from '@/components/common/ScTabContent.vue';
import ScTabLabel from '@/components/common/ScTabLabel.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleTab',
  components: { ScSampleBox, ScTabBox, ScTabContent, ScTabLabel, ScCodeHighlight, ScButton, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      selectedTabId: 1,
      tabSize: 10,
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
};
</script>

<style scoped lang="scss"></style>
