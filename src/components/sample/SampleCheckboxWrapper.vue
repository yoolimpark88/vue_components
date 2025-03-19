<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>ScCheckboxWrapper를 통해 각 ScCheckbox 컴포넌트에 데이터를 전달.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-checkbox-wrapper v-model="dummy1" @change="onChange">
                  <sc-checkbox value="1">---1---</sc-checkbox>
                  <sc-checkbox value="2">---2---</sc-checkbox>
                  <sc-checkbox value="3">---3---</sc-checkbox>
                  <sc-checkbox value="4">---4---</sc-checkbox>
                </sc-checkbox-wrapper>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ dummy1 }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-checkbox-wrapper v-model="dummy1" @change="onChange">
  <sc-checkbox value="1">---1---</sc-checkbox>
  <sc-checkbox value="2">---2---</sc-checkbox>
  <sc-checkbox value="3">---3---</sc-checkbox>
  <sc-checkbox value="4">---4---</sc-checkbox>
</sc-checkbox-wrapper>
<div>결과 : {{ dummy1 }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export defaut {
  data() {
    return {
      dummy1: ['1', '4'],
    };
  },
  methods: {
    onChange(val) {
      console.info('값이 변경됨', val);
    },
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- vertical -->
        <sc-sample-box title="Vertical">
          <template #description>체크박스의 방향을 정할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-checkbox-wrapper v-model="dummy1" @change="onChange" vertical>
                  <sc-checkbox value="1">---1---</sc-checkbox>
                  <sc-checkbox value="2">---2---</sc-checkbox>
                  <sc-checkbox value="3">---3---</sc-checkbox>
                  <sc-checkbox value="4">---4---</sc-checkbox>
                </sc-checkbox-wrapper>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ dummy1 }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-checkbox-wrapper v-model="dummy1" @change="onChange" vertical>
  <sc-checkbox value="1">---1---</sc-checkbox>
  <sc-checkbox value="2">---2---</sc-checkbox>
  <sc-checkbox value="3">---3---</sc-checkbox>
  <sc-checkbox value="4">---4---</sc-checkbox>
</sc-checkbox-wrapper>
<div>결과 : {{ dummy1 }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      dummy1: ['1', '4'],
    };
  },
  methods: {
    onChange(val) {
      console.info('값이 변경됨', val);
    },
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //vertical -->
        <!-- validation -->
        <sc-sample-box title="Validation">
          <template #description>체크박스의 방향을 정할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-validator ref="validator">
                  <sc-form-box>
                    <sc-form-item label="기본형">
                      <sc-checkbox-wrapper v-model="dummy2" :rules="[ruleNotEmpty]">
                        <sc-checkbox value="1">---1---</sc-checkbox>
                        <sc-checkbox value="2">---2---</sc-checkbox>
                        <sc-checkbox value="3">---3---</sc-checkbox>
                        <sc-checkbox value="4">---4---</sc-checkbox>
                      </sc-checkbox-wrapper>
                    </sc-form-item>
                    <sc-form-item label="세로형">
                      <sc-checkbox-wrapper
                        v-model="dummy2"
                        :rules="[ruleNotEmpty]"
                        vertical>
                        <sc-checkbox value="1">---1---</sc-checkbox>
                        <sc-checkbox value="2">---2---</sc-checkbox>
                        <sc-checkbox value="3">---3---</sc-checkbox>
                        <sc-checkbox value="4">---4---</sc-checkbox>
                      </sc-checkbox-wrapper>
                    </sc-form-item>
                  </sc-form-box>
                </sc-validator>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Events</div>
                  <div class="box">
                    <sc-button @click="check">Check</sc-button>
                    <sc-button @click="clear">Clear</sc-button>
                  </div>
                </div>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ dummy2 }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-validator ref="validator">
  <sc-form-box>
    <sc-form-item label="기본형">
      <sc-checkbox-wrapper v-model="dummy2" :rules="[ruleNotEmpty]">
        <sc-checkbox value="1">---1---</sc-checkbox>
        <sc-checkbox value="2">---2---</sc-checkbox>
        <sc-checkbox value="3">---3---</sc-checkbox>
        <sc-checkbox value="4">---4---</sc-checkbox>
      </sc-checkbox-wrapper>
    </sc-form-item>
    <sc-form-item label="세로형">
      <sc-checkbox-wrapper v-model="dummy2" :rules="[ruleNotEmpty]" vertical>
        <sc-checkbox value="1">---1---</sc-checkbox>
        <sc-checkbox value="2">---2---</sc-checkbox>
        <sc-checkbox value="3">---3---</sc-checkbox>
        <sc-checkbox value="4">---4---</sc-checkbox>
      </sc-checkbox-wrapper>
    </sc-form-item>
  </sc-form-box>
</sc-validator>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  setup() {
    const { ruleNotEmpty } = useRule();
    return {
      ruleNotEmpty,
    };
  },
  data() {
    return {
      dummy2: [],
    };
  },
  methods: {
    check() {
      const isValid = this.$refs.validator.validateAll();
      if (isValid) {
        // 모두 validation이 통과 되었을 경우 로직
      }
    },
    clear() {
      // 값을 지우는게 아니라 화면상의 validation 만 초기화 합니다.
      this.$refs.validator.clearAll();
    },
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //validation -->
        <!-- check/uncheck all -->
        <sc-sample-box title="Check/Uncheck All">
          <template #description>전체선택, 전체해제 기능을 제공합니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <div class="sc-ck-all">
                    <label for="sc-ck-all-checked">
                      <input
                        id="sc-ck-all-checked" 
                        type="checkbox"
                        name="allChecked"
                        :checked="isAllChecked" 
                        @change="toggleAll"
                      />
                      <div class="sc-ck-custom"></div>
                      전체선택
                    </label>
                  </div>
                  <sc-checkbox-wrapper v-model="dummy4">
                    <sc-checkbox
                      v-for="item in checkboxItems"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.label }}
                    </sc-checkbox>
                  </sc-checkbox-wrapper>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ dummy4 }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template=''
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //check/uncheck all -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScCheckbox from "@/components/common/ScCheckbox.vue";
import ScCheckboxWrapper from "@/components/common/ScCheckboxWrapper.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
import { useRules } from "@/hooks/common/useRules";
import ScValidator from "@/components/common/ScValidator.vue";
import ScButton from "../common/ScButton.vue";
import ScFormBox from "@/components/common/ScFormBox.vue";
import ScFormItem from "@/components/common/ScFormItem.vue";
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: "SampleCheckboxWrapper",
  components: {
    ScCheckbox,
    ScCheckboxWrapper,
    ScCodeHighlight,
    ScSampleBox,
    ScButton,
    ScValidator,
    ScFormBox,
    ScFormItem,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion
  },
  setup() {
    const { ruleRequired, ruleNotEmpty } = useRules();
    return {
      ruleRequired,
      ruleNotEmpty,
    };
  },
  data() {
    return {
      dummy1: ["1", "4"],
      dummy2: ["1", "2"],
      dummy3: [],
      dummy4: [],
      items: [],
      selectedTabId: 1,
      isAllChecked: false,
      checkboxItems: [
        { value: 'value1', label: '---1---' },
        { value: 'value2', label: '---2---' },
        { value: 'value3', label: '---3---' },
        { value: 'value4', label: '---4---' }
      ],
    };
  },  
  watch: {
    dummy4(newValue) {
      // dummy4가 전체 값과 일치하면 isAllChecked를 true로 설정
      this.isAllChecked = newValue.length === this.allValues.length;
      // 선택된 값이 없으면 전체 선택 상태를 false로 설정
      if (newValue.length === 0) {
        this.isAllChecked = false;
      }
    }
  },
  computed: {
    allValues() {
      // checkboxItems에서 value만 추출
      return this.checkboxItems.map(item => item.value);
    }
  },
  methods: {
    onChange(val) {
      console.info("값이 변경됨", val);
    },
    check() {
      const isValid = this.$refs.validator.validateAll();
      if (isValid) {
        // 모두 validation이 통과 되었을 경우 로직
      }
    },
    clear() {
      // 값을 지우는게 아니라 화면상의 validation만 초기화 합니다.
      this.$refs.validator.clearAll();
    },
    onClick(idx) {
      this.selectedTabId = idx;
    },
    toggleAll() {
      if (this.isAllChecked) {
        this.dummy4 = [];
      } else {
        this.dummy4 = [...this.allValues];
      }
    },
    toggleItem(value) {
      if (this.dummy4.includes(value)) {
        this.dummy4 = this.dummy4.filter(item => item !== value);
      } else {
        this.dummy4.push(value);
      }
      this.isAllChecked = this.dummy4.length === this.allValues.length;
    },
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  },
};
</script>

<style scoped lang="scss">
.sc-ck-all {
  input[type='checkbox'] {
    display: none;
  }
  .sc-ck-custom {
    position:relative;
    cursor:pointer;
    font-size:12px;
    font-weight: 300;
    color:#333;
    line-height:16px;
    width:16px;
    height:16px;
    background:#fff;
    border: 1px solid #a5a5a5;
    display:inline-flex;
  }
  input[id='sc-ck-all-checked']:checked + .sc-ck-custom {
    background: #00abd6;
    border: 1px solid #00abd6;
    &:after {
      content: url("@/assets/img/svg/ico-checked.svg");
      left: -1px;
      top: -1px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
