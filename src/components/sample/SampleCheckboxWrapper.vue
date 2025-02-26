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
      items: [],
      selectedTabId: 1,
    };
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
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  },
};
</script>

<style scoped lang="scss"></style>
