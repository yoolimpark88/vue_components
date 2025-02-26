<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>버튼이나 아이콘에 알림 개수 또는 표시를 할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="mt-5 mb-3">size : small</div>
                <sc-button @click="onClick">일반 버튼</sc-button>
                <sc-button @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button @click="onClick" type="round">둥글둥글 버튼</sc-button>
                <sc-button @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>
                <div class="mt-5 mb-3">size : medium</div>
                <sc-button size="medium" @click="onClick">일반 버튼</sc-button>
                <sc-button size="medium" @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button size="medium" @click="onClick" type="round">둥글둥글 버튼</sc-button>
                <sc-button size="medium" @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button size="medium" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button size="medium" @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>
                <div class="mt-5 mb-3">size : large</div>
                <sc-button size="large" @click="onClick">일반 버튼</sc-button>
                <sc-button size="large" @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button size="large" @click="onClick" type="round">둥글둥글 버튼</sc-button>
                <sc-button size="large" @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button size="large" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button size="large" @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='
<div class="mt-5 mb-3">size : small</div>
<sc-button @click="onClick">일반 버튼</sc-button>
<sc-button @click="onClick" disabled>비활성화 버튼</sc-button>
<sc-button @click="onClick" type="round">둥글둥글 버튼</sc-button>
<sc-button @click="onClick" color="primary">일반 버튼</sc-button>
<sc-button @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
<sc-button @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>
<div class="mt-5 mb-3">size : medium</div>
<sc-button size="medium" @click="onClick">일반 버튼</sc-button>
<sc-button size="medium" @click="onClick" disabled>비활성화 버튼</sc-button>
<sc-button size="medium" @click="onClick" type="round">둥글둥글 버튼</sc-button>
<sc-button size="medium" @click="onClick" color="primary">일반 버튼</sc-button>
<sc-button size="medium" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
<sc-button size="medium" @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>
<div class="mt-5 mb-3">size : large</div>
<sc-button size="large" @click="onClick">일반 버튼</sc-button>
<sc-button size="large" @click="onClick" disabled>비활성화 버튼</sc-button>
<sc-button size="large" @click="onClick" type="round">둥글둥글 버튼</sc-button>
<sc-button size="large" @click="onClick" color="primary">일반 버튼</sc-button>
<sc-button size="large" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
<sc-button size="large" @click="onClick" type="round" color="primary">둥글둥글 버튼</sc-button>'
      />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="
    export default {
      methods: {
        onClick() {};
      }
    }" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScButton from "@/components/common/ScButton.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
import { useRoleStore } from "@/store/roleStore";

export default {
  name: "sampleButton",
  components: {
    ScButton,
    ScSampleBox,
    ScCodeHighlight,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion
  },
  setup() {
    const roleStore = useRoleStore();
    return {
      addRole: roleStore.addRole,
    };
  },
  data() {
    return {
      selectedTabId: 1,
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    }
  },
  mounted() {
    this.addRole("sample-component-button", [
      {
        BUTTON_COMP_ID: "copy",
      },
      {
        BUTTON_COMP_ID: "read",
      },
    ]);
  },
};
</script>

<style scoped lang="scss">
.sub-title {
  display: block;
  margin: 20px 0;
}
</style>
