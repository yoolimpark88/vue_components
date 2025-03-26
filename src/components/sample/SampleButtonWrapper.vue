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
                    <sc-button-wrapper 
                      :label-group="labelGroup"
                      :active-label="activeLabels[0]"
                      @update:activeLabel="(label) => updateActiveLabel(0, label)"
                    />
                    <div class="mt-5 mb-3">Basic Disabled(Opacity50%)</div>
                    <sc-button-wrapper 
                      :label-group="labelGroup"
                      :active-label="activeLabels[1]"
                      :initial-active-index="initialActiveIndex"
                      @update:activeLabel="(label) => updateActiveLabel(1, label)"
                      disabled
                    />
                  </div>
                  <div class="basis-1/2">
                    <div class="mb-3">Round+Color조합</div>
                    <sc-button-wrapper 
                      :label-group="labelGroup"
                      :active-label="activeLabels[2]"
                      @update:activeLabel="(label) => updateActiveLabel(2, label)"
                      shape="round"
                      :color-group="colorGroup"
                    />
                    <div class="mt-5 mb-3">Round+Color조합 Disabled(Opacity50%)</div>
                    <sc-button-wrapper 
                      :label-group="labelGroup"
                      :active-label="activeLabels[3]"
                      @update:activeLabel="(label) => updateActiveLabel(2, label)"
                      shape="round"
                      :color-group="colorGroup"
                      disabled
                    />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list mt-3">Basic</p>
                    <p class="list">결과 : {{ activeLabels[0] }}</p>
                    <p class="list mt-3">Basic Disabled</p>
                    <p class="list">결과 : {{ activeLabels[1] }}</p>
                    <p class="list mt-3">Round + Color 조합</p>
                    <p class="list">결과 : {{ activeLabels[2] }}</p>
                    <p class="list mt-3">Round + Color 조합 Disabled</p>
                    <p class="list">결과 : {{ activeLabels[3] }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="flex flex-row">
  <div class="basis-1/2">
    <div class="mb-3">Basic</div>
    <sc-button-wrapper 
      :label-group="labelGroup"
      :active-label="activeLabels[0]"
      @update:activeLabel="(label) => updateActiveLabel(0, label)"
    />
    <div class="mt-5 mb-3">Basic Disabled(Opacity50%)</div>
    <sc-button-wrapper 
      :label-group="labelGroup"
      :active-label="activeLabels[1]"
      :initial-active-index="initialActiveIndex"
      @update:activeLabel="(label) => updateActiveLabel(1, label)"
      disabled
    />
  </div>
  <div class="basis-1/2">
    <div class="mb-3">Round+Color조합</div>
    <sc-button-wrapper 
      :label-group="labelGroup"
      :active-label="activeLabels[2]"
      @update:activeLabel="(label) => updateActiveLabel(2, label)"
      shape="round"
      :color-group="colorGroup"
    />
    <div class="mt-5 mb-3">Round+Color조합 Disabled(Opacity50%)</div>
    <sc-button-wrapper 
      :label-group="labelGroup"
      :active-label="activeLabels[3]"
      @update:activeLabel="(label) => updateActiveLabel(2, label)"
      shape="round"
      :color-group="colorGroup"
      disabled
    />
  </div>
</div>
<p class="list mt-3">Basic</p>
<p class="list">결과 : {{ activeLabels[0] }}</p>
<p class="list mt-3">Basic Disabled</p>
<p class="list">결과 : {{ activeLabels[1] }}</p>
<p class="list mt-3">Round + Color 조합</p>
<p class="list">결과 : {{ activeLabels[2] }}</p>
<p class="list mt-3">Round + Color 조합 Disabled</p>
<p class="list">결과 : {{ activeLabels[3] }}</p>
              '/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="
export default defineComponent({
  props: {
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ScButtonWrapper,
  },
  setup() {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const activeLabels = ref(['Basic1', 'Basic1', 'Basic1', 'Basic3']);
    const colorGroup = ref(['primary', 'indigo', 'mint']);
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    return {
      labelGroup,
      activeLabels,
      colorGroup,
      updateActiveLabel,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Multiple -->
        <sc-sample-box title="Multiple">
          <template #description>여러 옵션을 제공하고 사용자가 다중 선택을 할 수 있는 기능을 제공한다. 다중 선택일 경우 v-model을 사용한다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo> 
                <div class="mb-3">다중선택</div>
                <sc-button-wrapper 
                  :label-group="labelGroup"
                  :active-label="multiActiveLabels"
                  :multi-select="true"
                  @update:activeLabels="updateMultiActiveLabels"
                />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box mb-3">
                    <p class="list">결과 : {{ multiActiveLabels }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="mb-3">다중선택</div>
<sc-button-wrapper 
  :label-group="labelGroup"
  :active-label="multiActiveLabels"
  :multi-select="true"
  @update:activeLabels="updateMultiActiveLabels"
/>'
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
  },
  setup() {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const multiActiveLabels = ref([]);
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    const updateMultiActiveLabels = (labels) => {
      multiActiveLabels.value = labels;
    };
    return {
      labelGroup,
      multiActiveLabels,
      updateActiveLabel,
      updateMultiActiveLabels,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Multiple -->
        <!-- Icon -->
        <sc-sample-box title="Icon">
          <template #description>버튼별 아이콘 타입과 위치를 설정할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-button-wrapper 
                  :label-group="labelGroup"
                  :active-label="activeLabels[4]"
                  @update:activeLabel="(label) => updateActiveLabel(4, label)"
                  :icon-group="iconGroup"
                  :icon-position-Group="iconPositionGroup"
                />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ activeLabels[4] }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<sc-button-wrapper 
  :label-group="labelGroup"
  :active-label="activeLabels[4]"
  @update:activeLabel="(label) => updateActiveLabel(4, label)"
  :icon-group="iconGroup"
  :icon-position-Group="iconPositionGroup"
/>
<p class="list">결과 : {{ activeLabels[4] }}</p>
              '/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="
export default defineComponent({
  components: {
    ScButtonWrapper,
  },
  setup() {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const activeLabels = ref(['Basic1', 'Basic1', 'Basic1', 'Basic3','']);
    const iconGroup = ref(['cog', 'home', 'hashtag']);
    const iconPositionGroup = ref(['left', 'right', 'left']);
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    return {
      labelGroup,
      activeLabels,
      iconGroup,
      iconPositionGroup,
      updateActiveLabel,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Icon -->
        <!-- Size -->
        <sc-sample-box title="Size">
          <template #description>버튼 그룹의 사이즈를 전달할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="mb-3">Size: small</div>
                <sc-button-wrapper 
                  :label-group="labelGroup"
                  :active-label="activeLabels[5]"
                  @update:activeLabel="(label) => updateActiveLabel(1, label)"
                  size="small"
                />
                <div class="mb-3 mt-5">Size: medium</div>
                <sc-button-wrapper 
                  :label-group="labelGroup"
                  :active-label="activeLabels[5]"
                  @update:activeLabel="(label) => updateActiveLabel(1, label)"
                  size="medium"
                />
                <div class="mb-3 mt-5">Size: Large</div>
                <sc-button-wrapper 
                  :label-group="labelGroup"
                  :active-label="activeLabels[5]"
                  @update:activeLabel="(label) => updateActiveLabel(1, label)"
                  size="large"
                />
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<div class="mb-3">Size: Large</div>
<sc-button-wrapper 
  :label-group="labelGroup"
  :active-label="activeLabels[5]"
  @update:activeLabel="(label) => updateActiveLabel(1, label)"
  size="large"
/>
<p class="list">결과 : {{ activeLabels[5] }}</p>
              '/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="
export default defineComponent({
  components: {
    ScButtonWrapper,
  },
  setup() {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const activeLabels = ref(['Basic1', 'Basic1', 'Basic1', 'Basic3','', 'Basic1']);
    const size = ref('');
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    return {
      labelGroup,
      activeLabels,
      size,
      updateActiveLabel,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Size -->
        <!-- Object Uniq Key -->
        <sc-sample-box title="Object Uniq Key">
          <template #description>object-uniq-key값을 이용하여 button을 사용할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-button-wrapper 
                  :label-group="labelGroupKey.map(item => item.name)"
                  :active-label="activeLabels[6]"
                  @update:activeLabel="(label) => updateActiveLabel(6, label)"
                  :object-uniq-key="getObjectUniqKey(activeLabels[6])"
                />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : Object Uniq Key [id : {{ getObjectUniqKey(activeLabels[6]) }}]</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
            template='<sc-button-wrapper 
  :label-group="labelGroupKey.map(item => item.name)"
  :active-label="activeLabels[6]"
  @update:activeLabel="(label) => updateActiveLabel(6, label)"
  :object-uniq-key="getObjectUniqKey(activeLabels[6])"
/>
<p class="list">결과 : Object Uniq Key [id : {{ getObjectUniqKey(activeLabels[6]) }}]</p>
              '/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
            script="
export default defineComponent({
  components: {
    ScButtonWrapper,
  },
  setup() {
    const activeLabels = ref(['Basic1', 'Basic1', 'Basic1', 'Basic3','', 'Basic1']);
    const labelGroupKey = [
      { id: 1, name: 'Basic1' },
      { id: 2, name: 'Basic2' },
      { id: 3, name: 'Basic3' },
    ];
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    const getObjectUniqKey = (label) => {
      const item = labelGroupKey.find(item => item.name === label);
      return item ? item.id : null;
    };
    return {
      activeLabels,
      updateActiveLabel,
      labelGroupKey,
      getObjectUniqKey,
    };
  },
})" />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Object Uniq Key -->
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
    ScSampleBox,
    ScCodeHighlight,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion,
    ScTable,
  },
  setup() {
    const labelGroup = ref(['Basic1', 'Basic2', 'Basic3']);
    const activeLabels = ref(['Basic1', 'Basic1', 'Basic1', 'Basic3', '', 'Basic1', 'Basic1']);
    const multiActiveLabels = ref([]);
    const colorGroup = ref(['primary', 'indigo', 'mint']);
    const iconGroup = ref(['cog', 'home', 'hashtag']);
    const iconPositionGroup = ref(['left', 'right', 'left']);
    const size = ref('');
    const labelGroupKey = [
      { id:1, name:"Basic1" },
      { id:2, name:"Basic2" },
      { id:3, name:"Basic3" },
    ];
    // 단일 선택된 라벨 입력
    const updateActiveLabel = (index, label) => {
      activeLabels.value[index] = label;
    };
    // 멀티 선택된 라벨 입력
    const updateMultiActiveLabels = (labels) => {
      multiActiveLabels.value = labels;
    };
    // 라벨에 해당하는 id 값 찾기
    const getObjectUniqKey = (label) => {
      const item = labelGroupKey.find(item => item.name === label);
      return item ? item.id : null;
      
    };
    const roleStore = useRoleStore();
    return {
      labelGroup,
      activeLabels,
      colorGroup,
      iconGroup,
      iconPositionGroup,
      multiActiveLabels,
      size,
      labelGroupKey,
      updateActiveLabel,
      updateMultiActiveLabels,
      getObjectUniqKey,
      addRole: roleStore.addRole,
    };
  },
  data() {
    return {
      selectedTabId: 1,
      propItems: [
        {
          name: 'labelGroup',
          type: 'Array',
          default: '',
          value: '',
          description: '버튼그룹 라벨들 저장',
        },
        {
          name: 'initialActiveIndex',
          type: 'Number',
          default: '0',
          value: '',
          description: '버튼그룹 선택된 라벨 고정시 사용',
        },
        {
          name: 'disabled',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: '버튼 비활성화 상태 표시여부',
        },
        {
          name: 'activeLabel',
          type: 'String',
          default: '',
          value: '',
          description: '선택된 라벨 값 받아오기',
        },
        {
          name: 'activeLabels',
          type: 'Array',
          default: '',
          value: '',
          description: '선택된 여러 라벨 값 받아오기',
        },
        {
          name: 'multiSelect',
          type: 'Boolean',
          default: 'false',
          value: '',
          description: 'Multiple 다중 선택 모드 실행',
        },
        {
          name: 'colorGroup',
          type: 'Array',
          default: '',
          value: 'primary, indigo, mint',
          description: '컬러저장',
        },
        {
          name: 'shape',
          type: 'String',
          default: 'null',
          value: ', round',
          description: '버튼의 모양 중 모서리 라운드 모양 추가 제공',
        },
        {
          name: 'size',
          type: 'String',
          default: '',
          value: 'small, medium, large',
          description: '버튼의 사이즈 지정',
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
          name: 'handleClick',
          description: '클릭한 버튼의 index값을 받아와 선택한다.',
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
