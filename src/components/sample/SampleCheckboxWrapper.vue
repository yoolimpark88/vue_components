<template>
  <div class="">
    <sc-sample-box>
      <template v-slot:description>
        ScCheckboxWrapper를 통해 각 ScCheckbox 컴포넌트에 데이터를 전달.
      </template>
      <div>
        <sc-checkbox-wrapper v-model="dummy1" @change="onChange">
          <sc-checkbox value="1">---1---</sc-checkbox>
          <sc-checkbox value="2">---2---</sc-checkbox>
          <sc-checkbox value="3">---3---</sc-checkbox>
          <sc-checkbox value="4">---4---</sc-checkbox>
        </sc-checkbox-wrapper>
        <div class="mt-5 text-sm">결과 : {{ dummy1 }}</div>
        <sc-code-highlight
          template='<sc-checkbox-wrapper v-model="dummy1" @change="onChange">
  <sc-checkbox value="1">---1---</sc-checkbox>
  <sc-checkbox value="2">---2---</sc-checkbox>
  <sc-checkbox value="3">---3---</sc-checkbox>
  <sc-checkbox value="4">---4---</sc-checkbox>
</sc-checkbox-wrapper>
<div class="mt-5 text-sm">결과 : {{ dummy1 }}</div>'
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
};" />
      </div>
    </sc-sample-box>

    <sc-sample-box title="vertical">
      <template #description>체크박스의 방향을 정할 수 있습니다.</template>
      <sc-checkbox-wrapper v-model="dummy1" @change="onChange" vertical>
        <sc-checkbox value="1">---1---</sc-checkbox>
        <sc-checkbox value="2">---2---</sc-checkbox>
        <sc-checkbox value="3">---3---</sc-checkbox>
        <sc-checkbox value="4">---4---</sc-checkbox>
      </sc-checkbox-wrapper>
      <div class="mt-5 text-sm">결과 : {{ dummy1 }}</div>
      <sc-code-highlight
        template='<sc-checkbox-wrapper v-model="dummy1" @change="onChange" vertical>
  <sc-checkbox value="1">---1---</sc-checkbox>
  <sc-checkbox value="2">---2---</sc-checkbox>
  <sc-checkbox value="3">---3---</sc-checkbox>
  <sc-checkbox value="4">---4---</sc-checkbox>
</sc-checkbox-wrapper>
<div class="mt-5 text-sm">결과 : {{ dummy1 }}</div>'
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
};" />
    </sc-sample-box>

    <sc-sample-box title="validation">
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
      <div class="mt-5">
        <sc-button @click="check">Check</sc-button>
        <sc-button @click="clear">Clear</sc-button>
      </div>
      <div class="mt-5 text-sm">결과 : {{ dummy2 }}</div>

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
};" />
    </sc-sample-box>
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
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  },
};
</script>

<style scoped lang="scss"></style>
