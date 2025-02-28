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
      <sc-detail-tab-content label="Props" :idx="2">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 130px">Name</th>
              <th style="width: 200px">Type</th>
              <th style="width: 150px">Default</th>
              <th style="width: 250px">Value</th>
              <th>Description</th>
            </tr>
          </template>
          <tr v-for="item in propsItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.default }}</td>            
            <td>{{ item.value }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </sc-table>
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
import ScTable from '@/components/common/ScTable.vue';
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
    ScDetailAccordion,
    ScTable
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
      propsItems: [
        {
          name: 'type',
          type: 'String',
          default: 'default',
          value: 'default, round',
          description: '버튼의 모양을 나타냄',
        },
        {
          name: 'color',
          type: 'String',
          default: '',
          value: 'primary, indigo, mint',
          description: '버튼의 컬러',
        },
        {
          name: 'disabled',
          type: 'Boolean',
          default: 'false',
          value: 'primary, indigo, mint',
          description: '버튼 비활성화 상태 표시여부',
        },
        {
          name: 'size',
          type: 'String',
          default: '',
          value: 'small, medium, large',
          description: '버튼 사이즈',
        },
        {
          name: 'width',
          type: 'String, Number',
          default: 'undefined',
          value: '',
          description: '버튼 넓이 정의',
        },
        {
          name: 'small',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: '',
        },
        {
          name: 'medium',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: '',
        },
        {
          name: 'large',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: '',
        },
        {
          name: 'role',
          type: 'String',
          default: 'undefined',
          value: '',
          description: '버튼 권한에 따른 활성화 여부',
        },
      ],
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
