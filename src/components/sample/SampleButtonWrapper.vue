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
                <div class="flex flex-row">
                  <div class="basis-1/2">
                    <div class="mb-3">Basic</div>
                    <sc-button-wrapper>
                      <template #default="{ onActiveClick, activeIndex }">
                        <sc-button 
                          v-for="(label, index) in labelGroup" 
                          :key="index" 
                          :class="{ active: activeIndex === index }" 
                          @click="
                            onActiveClick(index);
                            activeLabel = label;
                          "
                          class="sc-button"
                        >
                          {{ label }}
                        </sc-button>
                      </template>
                    </sc-button-wrapper>
                    <div class="mt-5 mb-3">Basic Disabled(Opacity50%)</div>
                    <sc-button-wrapper :initialActiveIndex="0" disabled>
                      <template #default="{  activeIndex }">
                        <sc-button 
                          v-for="(label, index) in labelGroup" 
                          :key="index" 
                          :class="{ active: activeIndex === index }"
                          class="sc-button"
                        >
                          {{ label }}
                        </sc-button>
                      </template>
                    </sc-button-wrapper>
                  </div>
                  <div class="basis-1/2">
                    <div class="mb-3">Round+Color조합</div>
                    <sc-button-wrapper>
                      <template #default="{ onActiveClick, activeIndex }">
                        <sc-button 
                          v-for="(label, index) in labelGroup" 
                          :key="index" 
                          :class="{ active: activeIndex === index }"
                          :color="colorGroup[index]" 
                          @click="
                            onActiveClick(index);
                            activeLabel3 = label;
                          "
                          class="sc-button"
                        >
                          {{ label }}
                        </sc-button>
                      </template>
                    </sc-button-wrapper>
                    <div class="mt-5 mb-3">Round+Color조합 Disabled(Opacity50%)</div>
                    <sc-button-wrapper :initialActiveIndex="2" disabled>
                      <template #default="{ activeIndex }">
                        <sc-button 
                          v-for="(label, index) in labelGroup" 
                          :key="index" 
                          :class="{ active: activeIndex === index }"
                          :color="colorGroup[index]" 
                          class="sc-button"
                        >
                          {{ label }}
                        </sc-button>
                      </template>
                    </sc-button-wrapper>
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list mt-3">Basic</p>
                    <p class="list">결과 : {{ activeLabel }}</p>
                    <p class="list mt-3">Basic Disabled</p>
                    <p class="list">결과 : {{ activeLabel2 }}</p>
                    <p class="list mt-3">Round + Color 조합</p>
                    <p class="list">결과 : {{ activeLabel3 }}</p>
                    <p class="list mt-3">Round + Color 조합 Disabled</p>
                    <p class="list">결과 : {{ activeLabel4 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="flex flex-row">
  <div class="basis-1/2">
    <div class="mb-3">Basic</div>
    <sc-button-wrapper>
      <template #default="{ onActiveClick, activeIndex }">
        <sc-button 
          v-for="(label, index) in labelGroup" 
          :key="index" 
          :class="{ active: activeIndex === index }" 
          @click="
            onActiveClick(index);
            activeLabel = label;
          "
          class="sc-button"
        >
          {{ label }}
        </sc-button>
      </template>
    </sc-button-wrapper>
    <div class="mt-5 mb-3">Basic Disabled(Opacity50%)</div>
    <sc-button-wrapper :initialActiveIndex="0" disabled>
      <template #default="{  activeIndex }">
        <sc-button 
          v-for="(label, index) in labelGroup" 
          :key="index" 
          :class="{ active: activeIndex === index }"
          class="sc-button"
        >
          {{ label }}
        </sc-button>
      </template>
    </sc-button-wrapper>
  </div>
  <div class="basis-1/2">
    <div class="mb-3">Round+Color조합</div>
    <sc-button-wrapper>
      <template #default="{ onActiveClick, activeIndex }">
        <sc-button 
          v-for="(label, index) in labelGroup" 
          :key="index" 
          :class="{ active: activeIndex === index }"
          :color="colorGroup[index]" 
          @click="
            onActiveClick(index);
            activeLabel3 = label;
          "
          class="sc-button"
        >
          {{ label }}
        </sc-button>
      </template>
    </sc-button-wrapper>
    <div class="mt-5 mb-3">Round+Color조합 Disabled(Opacity50%)</div>
    <sc-button-wrapper :initialActiveIndex="2" disabled>
      <template #default="{ activeIndex }">
        <sc-button 
          v-for="(label, index) in labelGroup" 
          :key="index" 
          :class="{ active: activeIndex === index }"
          :color="colorGroup[index]" 
          class="sc-button"
        >
          {{ label }}
        </sc-button>
      </template>
    </sc-button-wrapper>
  </div>
</div> 
<div class="description-wrap">
  <div class="title">Basic</div>
  <div class="box mb-3">
    <p class="list">결과 : {{ activeLabel }}</p>
  </div>
  <div class="title">Basic Disabled</div>
  <div class="box mb-3">
    <p class="list">결과 : {{ activeLabel2 }}</p>
  </div>
  <div class="title">Round + Color 조합</div>
  <div class="box mb-3">
    <p class="list">결과 : {{ activeLabel3 }}</p>
  </div>
  <div class="title">Round + Color 조합 Disabled</div>
  <div class="box mb-3">
    <p class="list">결과 : {{ activeLabel4 }}</p>
  </div>
</div>'
      />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="export default defineComponent({
  props: {
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ScButtonWrapper,
    ScButton,
  },
  setup(props) {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const colorGroup = ref(['primary', 'indigo', 'mint']);
    const activeIndex = ref(null);
    const activeLabel = ref('Basic1');
    const activeLabel2 = ref(labelGroup.value[props.initialActiveIndex]);
    const activeLabel3 = ref('Basic1');
    const activeLabel4 = ref('Basic3');
    const onActiveClick = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index
    };
    return {
      labelGroup,
      colorGroup,
      activeIndex,
      activeLabel,
      activeLabel2,
      activeLabel3,
      activeLabel4,
      onActiveClick,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Multiple -->
        <sc-sample-box title="Multiple">
          <template #description>여러 옵션을 제공하고 사용자가 다중 선택을 할 수 있는 기능르 제공한다. 다중 선택일 경우 v-model을 사용한다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo> 
                <div class="mb-3">다중선택</div>
                <sc-button-wrapper>
                  <template #default="{ onActiveClick, activeIndexes }">
                    <sc-button 
                      v-for="(label, index) in labelGroup" 
                      :key="index" 
                      :class="{ active: activeIndexes.includes(index) }"
                      @click="
                        onActiveClick(index);
                        toggleLabel(label);
                      "
                      class="sc-button"
                    >
                      {{ label }}
                    </sc-button>
                  </template>
                </sc-button-wrapper>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box mb-3">
                    <p class="list">결과 : {{ activeLabel5 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="mb-3">다중선택</div>
<sc-button-wrapper>
  <template #default="{ onActiveClick, activeIndexes }">
    <sc-button 
      v-for="(label, index) in labelGroup" 
      :key="index" 
      :class="{ active: activeIndexes.includes(index) }"
      @click="
        onActiveClick(index);
        toggleLabel(label);
      "
      class="sc-button"
    >
      {{ label }}
    </sc-button>
  </template>
</sc-button-wrapper>'
      />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="export default defineComponent({
  props: {
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ScButtonWrapper,
    ScButton,
  },
  setup(props) {  
  const activeIndexes = ref([]);
  const activeLabel5 = ref([]);	const onActiveClick = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
    const idx = activeIndexes.value.indexOf(index);
    if (idx === -1) {
      activeIndexes.value.push(index);
    } else {
      activeIndexes.value.splice(idx, 1);
    }
  };
  const toggleLabel = (label) => {
    const index = activeLabel5.value.indexOf(label);
    if (index === -1) {
      activeLabel5.value.push(label);
    } else {
      activeLabel5.value.splice(index, 1);
    }
  };
  return {
    labelGroup,
    activeIndex,
    activeLabel5,
    onActiveClick,
    toggleLabel,
  };
  }
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Multiple -->
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
import ScButtonWrapper from "@/components/common/ScButtonWrapper.vue";
import ScButton from "@/components/common/ScButton.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
import ScTable from '@/components/common/ScTable.vue';
import { useRoleStore } from "@/store/roleStore";
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: "sampleButtonWrapper",
  props: {
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ScButtonWrapper,
    ScButton,
    ScSampleBox,
    ScCodeHighlight,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion,
    ScTable,
  },
  setup(props) {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const colorGroup = ref(['primary', 'indigo', 'mint']);
    const activeIndex = ref(null);
    const activeIndexes = ref([]);
    const activeLabel = ref('Basic1');
    const activeLabel2 = ref(labelGroup.value[props.initialActiveIndex]);
    const activeLabel3 = ref('Basic1');
    const activeLabel4 = ref('Basic3');
    const activeLabel5 = ref([]);
    const onActiveClick = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index
      const idx = activeIndexes.value.indexOf(index);
      if (idx === -1) {
        activeIndexes.value.push(index);
      } else {
        activeIndexes.value.splice(idx, 1);
      }
    };
    const toggleLabel = (label) => {
      const index = activeLabel5.value.indexOf(label);
      if (index === -1) {
        activeLabel5.value.push(label);
      } else {
        activeLabel5.value.splice(index, 1);
      }
    };
    const roleStore = useRoleStore();
    return {
      labelGroup,
      colorGroup,
      activeIndex,
      activeLabel,
      activeLabel2,
      activeLabel3,
      activeLabel4,
      activeLabel5,
      onActiveClick,
      toggleLabel,
      addRole: roleStore.addRole,
    };
  },
  data() {
    return {
      selectedTabId: 1,
      // labelGroup: ['Basic1', 'Basic2', 'Basic3'],
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
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
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
});
</script>

<style scoped lang="scss">
.sub-title {
  display: block;
  margin: 20px 0;
}
</style>
