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
                <div class="mb-3">size : small</div>
                <sc-button @click="onClick">일반 버튼</sc-button>
                <sc-button @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button @click="onClick" shape="round">둥글둥글 버튼</sc-button>
                <sc-button @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button @click="onClick" shape="round" color="primary">둥글둥글 버튼</sc-button>
                <div class="mt-5 mb-3">size : medium</div>
                <sc-button size="medium" @click="onClick">일반 버튼</sc-button>
                <sc-button size="medium" @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button size="medium" @click="onClick" shape="round">둥글둥글 버튼</sc-button>
                <sc-button size="medium" @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button size="medium" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button size="medium" @click="onClick" shape="round" color="primary">둥글둥글 버튼</sc-button>
                <div class="mt-5 mb-3">size : large</div>
                <sc-button size="large" @click="onClick">일반 버튼</sc-button>
                <sc-button size="large" @click="onClick" disabled>비활성화 버튼</sc-button>
                <sc-button size="large" @click="onClick" shape="round">둥글둥글 버튼</sc-button>
                <sc-button size="large" @click="onClick" color="primary">일반 버튼</sc-button>
                <sc-button size="large" @click="onClick" disabled color="primary">비활성화 버튼</sc-button>
                <sc-button size="large" @click="onClick" shape="round" color="primary">둥글둥글 버튼</sc-button>
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
        <!-- Icon -->
        <sc-sample-box title="Icon">
          <template #description>아이콘 단독 유형(디폴트, 원)으로 사용하거나 텍스트와 함께 사용할 수 있다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex flex-row">
                  <div class="basis-1/3">
                    <div class="mb-3">Default</div>
                    <div class="mt-5 mb-3 text-xs">Small</div>
                    <sc-button @click="onClick" type="icon" icon="check" />
                    <sc-button @click="onClick" type="icon" icon="cog" color="primary" />
                    <div class="mt-5 mb-3 text-xs">Medium</div>
                    <sc-button size="medium" @click="onClick" type="icon" icon="check" />
                    <sc-button size="medium" @click="onClick" type="icon" icon="cog" color="primary" />
                    <div class="mt-5 mb-3 text-xs">Large</div>
                    <sc-button size="large" @click="onClick" type="icon" icon="check" />
                    <sc-button size="large" @click="onClick" type="icon" icon="cog" color="primary" />
                  </div>
                  <div class="basis-1/3">
                    <div class="mb-3">Circle</div>
                    <div class="mt-5 mb-3 text-xs">Small</div>
                    <sc-button @click="onClick" type="icon" shape="circle" icon="check" />
                    <sc-button @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
                    <div class="mt-5 mb-3 text-xs">Medium</div>
                    <sc-button size="medium" @click="onClick" type="icon" shape="circle" icon="check" />
                    <sc-button size="medium" @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
                    <div class="mt-5 mb-3 text-xs">Large</div>
                    <sc-button size="large" @click="onClick" type="icon" shape="circle" icon="check" />
                    <sc-button size="large" @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
                  </div>
                  <div class="basis-1/3">
                    <div class="mb-3">Icon+Text</div>
                    <div class="mt-5 mb-3 text-xs">Small</div>
                    <sc-button @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
                    <sc-button @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
                    <div class="mt-5 mb-3 text-xs">Medium</div>
                    <sc-button size="medium" @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
                    <sc-button size="medium" @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
                    <div class="mt-5 mb-3 text-xs">Large</div>
                    <sc-button size="large" @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
                    <sc-button size="large" @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="flex flex-row">
  <div class="basis-1/3">
    <div class="mb-3">Default</div>
    <div class="mt-5 mb-3 text-xs">Small</div>
    <sc-button @click="onClick" type="icon" icon="check" />
    <sc-button @click="onClick" type="icon" icon="cog" color="primary" />
    <div class="mt-5 mb-3 text-xs">Medium</div>
    <sc-button size="medium" @click="onClick" type="icon" icon="check" />
    <sc-button size="medium" @click="onClick" type="icon" icon="cog" color="primary" />
    <div class="mt-5 mb-3 text-xs">Large</div>
    <sc-button size="large" @click="onClick" type="icon" icon="check" />
    <sc-button size="large" @click="onClick" type="icon" icon="cog" color="primary" />
  </div>
  <div class="basis-1/3">
    <div class="mb-3">Circle</div>
    <div class="mt-5 mb-3 text-xs">Small</div>
    <sc-button @click="onClick" type="icon" shape="circle" icon="check" />
    <sc-button @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
    <div class="mt-5 mb-3 text-xs">Medium</div>
    <sc-button size="medium" @click="onClick" type="icon" shape="circle" icon="check" />
    <sc-button size="medium" @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
    <div class="mt-5 mb-3 text-xs">Large</div>
    <sc-button size="large" @click="onClick" type="icon" shape="circle" icon="check" />
    <sc-button size="large" @click="onClick" type="icon" shape="circle" icon="cog" color="primary" />
  </div>
  <div class="basis-1/3">
    <div class="mb-3">Icon+Text</div>
    <div class="mt-5 mb-3 text-xs">Small</div>
    <sc-button @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
    <sc-button @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
    <div class="mt-5 mb-3 text-xs">Medium</div>
    <sc-button size="medium" @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
    <sc-button size="medium" @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
    <div class="mt-5 mb-3 text-xs">Large</div>
    <sc-button size="large" @click="onClick" icon="check" iconPosition="left">L-Icon Text</sc-button>
    <sc-button size="large" @click="onClick" icon="check" iconPosition="right">R-Icon Text</sc-button>
  </div>
</div>'
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
        <!-- //Icon -->
        <!-- Variants Button -->
        <sc-sample-box title="Variants Button">
          <template #description>텍스트 버튼, 백그라운드 버튼, 그림자 버튼 등 다양한 버튼 스타일을 적용할 수 있다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex flex-row">
                  <div class="basis-1/3">
                    <div class="mb-3">Text Button</div>
                    <sc-button @click="onClick" type="text">Text Default</sc-button>
                    <sc-button @click="onClick" type="text" disabled>Disabled Text</sc-button>
                    <sc-button @click="onClick" type="text" color="primary">Primary Text</sc-button>
                  </div>
                  <div class="basis-1/3">
                    <div class="mb-3">Background</div>
                    <sc-button @click="onClick" type="text" variants="background">Text Default</sc-button>
                    <sc-button @click="onClick" type="text" variants="background" disabled>Disabled Text</sc-button>
                    <sc-button @click="onClick" type="text" variants="background" color="primary">Primary Text</sc-button>
                  </div>
                  <div class="basis-1/3">
                    <div class="mb-3">Shadow</div>
                    <sc-button @click="onClick" type="text" variants="shadow">Text Default</sc-button>
                    <sc-button @click="onClick" type="text" variants="shadow" disabled>Disabled Text</sc-button>
                    <sc-button @click="onClick" type="text" variants="shadow" color="primary">Primary Text</sc-button>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="flex flex-row">
  <div class="basis-1/3">
    <div class="mb-3">Text Button</div>
    <sc-button @click="onClick" type="text">Text Default</sc-button>
    <sc-button @click="onClick" type="text" disabled>Disabled Text</sc-button>
    <sc-button @click="onClick" type="text" color="primary">Primary Text</sc-button>
  </div>
  <div class="basis-1/3">
    <div class="mb-3">Background</div>
    <sc-button @click="onClick" type="text" variants="background">Text Default</sc-button>
    <sc-button @click="onClick" type="text" variants="background" disabled>Disabled Text</sc-button>
    <sc-button @click="onClick" type="text" variants="background" color="primary">Primary Text</sc-button>
  </div>
  <div class="basis-1/3">
    <div class="mb-3">Shadow</div>
    <sc-button @click="onClick" type="text" variants="shadow">Text Default</sc-button>
    <sc-button @click="onClick" type="text" variants="shadow" disabled>Disabled Text</sc-button>
    <sc-button @click="onClick" type="text" variants="shadow" color="primary">Primary Text</sc-button>
  </div>
</div>'
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
        <!-- //Variants Button -->
         <!-- Hidden Button -->
        <sc-sample-box title="Hidden Button">
          <template #description>버튼 숨김 처리를 적용한다. 단, 숨김처리를 해도 버튼의 영역은 차지하므로 화면 디자인 시, 고려해서 적용해야 한다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex flex-row">
                  <sc-checkbox v-model="isChecked">체크박스</sc-checkbox>
                  <sc-button :class="isChecked === 'y'? 'hiddenBtn' : ''">hidden button</sc-button>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            :template="codeTemplate"
      />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="export default {
  data() {
    return {
      isChecked: 'n',
    }
  }" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Variants Button -->
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Prop" :idx="2">
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
          <tr v-for="item in propItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.default }}</td>            
            <td>{{ item.value }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </sc-table>
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Slot" :idx="3">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 200px">Name</th>
              <th>Description</th>
              <th style="width: 250px">Directive</th>
            </tr>
          </template>
          <tr v-for="item in slotItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.directive }}</td>
          </tr>
        </sc-table>
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Method" :idx="4">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 130px">Name</th>
              <th>Description</th>
              <th style="width: 250px">Return</th>
              <th style="width: 250px">Arguments</th>
            </tr>
          </template>
          <tr v-for="item in methodItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.return }}</td>
            <td>{{ item.arguments }}</td>
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
import ScCheckbox from "@/components/common/ScCheckbox.vue";
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
    ScTable,
    ScCheckbox,
  },
  setup() {
    const roleStore = useRoleStore();
    return {
      addRole: roleStore.addRole,
    };
  },
  data() {
    return {
      isChecked: 'n',
      selectedTabId: 1,
      propItems: [
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
          value: '',
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
        {
          name: 'icon',
          type: 'String',
          default: 'null',
          value: '',
          description: '아이콘 타입 값을 받아와 적용한다.예)arrow, close, setting',
        },
        {
          name: 'iconPosition',
          type: 'String',
          default: 'left',
          value: 'left, right',
          description: '아이콘의 위치를 지정한다.',
        },
        {
          name: 'type',
          type: 'String',
          default: 'default',
          value: 'default, text, icon',
          description: '버튼의 타입(일반, 텍스트, 아이콘)을 정의. *기존의 모양은 shape으로 이동.',
        },
        {
          name: 'Variants',
          type: 'String',
          default: 'default',
          value: 'default, background, shadow',
          description: '텍스트 버튼, 백그라운드 버튼, 그림자 버튼 등 다양한 버튼 유형을 적용할 수 있다.',
        },
        {
          name: 'Hidden',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: '버튼 숨김처리 적용, 단 버튼 영역은 차지한다.',
        },
        {
          name: 'shape',
          type: 'String',
          default: 'null',
          value: 'circle, round',
          description: '버튼의 모양을 지정. *기존 type에서 정의하던 round를 shape으로 이동하고 type을 재정의',
        },
      ],
      slotItems: [
        {
          name: 'default',
          description: '버튼 내부에 위치하는 영역입니다. 일반적으로는 버튼 텍스트가 사용된다.',
          directive: 'v-scope',
        },
      ],
      methodItems: [
        {
          name: 'onChange',
          description: '버튼의 상태가 변경될때 호출 되며, 변경 상태에 따라 modelvalue를 업데이트 한다. ',
          return: 'string, boolean, number, array, object',
          arguments: '',
        },
      ],
      codeTemplate: `<sc-checkbox v-model="isChecked">체크박스</sc-checkbox>
<sc-button :class="isChecked === 'y'? 'hiddenBtn' : ''">hidden button</sc-button>`,
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
    // toggleButton() {
    //   this.isChecked = this.isChecked ? y : n;
    // }
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
