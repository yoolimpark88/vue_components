<template>
  <div>
    <sc-sample-box>
      <template #description> validator 사용법입니다. </template>
      <sc-validator ref="validator">
        <sc-form-box col="1">
          <sc-form-item label="회사" required>
            <sc-text-field v-model="company" :rules="validateRule" :lazy="false" />
          </sc-form-item>
          <sc-form-item label="이름 (최대 5자)" required>
            <sc-text-field v-model="name" :rules="[ruleRequired, ruleMaxLength(name, 5)]" />
          </sc-form-item>
          <sc-form-item label="나이" required>
            <sc-text-field
              v-model="age"
              :rules="[ruleRequired, ruleNumeric, ruleBetween(age, 0, 100)]"
            />
          </sc-form-item>
          <sc-form-item label="성별" required>
            <sc-dropdown :items="['남자', '여자']" v-model="gender" :rules="[ruleRequired]" />
          </sc-form-item>
          <sc-form-item label="이메일" required>
            <sc-text-field v-model="email" :rules="[ruleRequired, ruleEmail]" />
          </sc-form-item>
          <sc-form-item label="가능 지역" required>
            <sc-multi-dropdown
              :items="multiItems"
              v-model="multiItemValue"
              :rules="[ruleNotEmpty]"
            />
          </sc-form-item>
          <sc-form-item label="메모" required>
            <sc-text-area v-model="memo" :rules="[ruleNotEmpty]" maxlength="100" />
          </sc-form-item>
          <sc-form-item label="check" required>
            <sc-checkbox-wrapper v-model="checkValue" :rules="[ruleNotEmpty]">
              <sc-checkbox value="1">--- 1 ---</sc-checkbox>
              <sc-checkbox value="2">--- 2 ---</sc-checkbox>
              <sc-checkbox value="3">--- 3 ---</sc-checkbox>
              <sc-checkbox value="4">--- 4 ---</sc-checkbox>
              <sc-checkbox value="5">--- 5 ---</sc-checkbox>
            </sc-checkbox-wrapper>
          </sc-form-item>
          <sc-form-item>
            <template #custom>
              <sc-button @click="check">Check</sc-button>
              <sc-button
                @click="clear"
                v-tooltip="`값을 지우는게 아니라 화면상의 validation만 초기화 합니다.`"
                >Validation Reset</sc-button
              >
            </template>
          </sc-form-item>
        </sc-form-box>
      </sc-validator>

      <sc-code-highlight
        template='
<sc-validator ref="validator">
<sc-form-box col="1">
  <sc-form-item label="회사" required>
    <sc-text-field v-model="company" :rules="validateRule" :lazy="false" />
  </sc-form-item>
  <sc-form-item label="이름 (최대 5자)" required>
    <sc-text-field v-model="name" :rules="[ruleRequired, ruleMaxLength(name, 5)]" />
  </sc-form-item>
  <sc-form-item label="나이" required>
    <sc-text-field
      v-model="age"
      :rules="[ruleRequired, ruleNumeric, ruleBetween(AggregateError, 0, 100)]"
    />
  </sc-form-item>
  <sc-form-item label="성별" required>
    <sc-dropdown :items="[&#039;남자&#039;, &#039;여자&#039;]" v-model="gender" :rules="[ruleRequired]" />
  </sc-form-item>
  <sc-form-item label="이메일" required>
    <sc-text-field v-model="email" :rules="[ruleRequired, ruleEmail]" />
  </sc-form-item>
  <sc-form-item label="가능 지역" required>
    <sc-multi-dropdown
      :items="multiItems"
      v-model="multiItemValue"
      :rules="[ruleNotEmpty]"
    />
  </sc-form-item>
  <sc-form-item label="메모" required>
    <sc-text-area v-model="memo" :rules="[ruleNotEmpty]" maxlength="100" />
  </sc-form-item>
  <sc-form-item>
    <sc-checkbox-wrapper v-model="checkValue" :rules="[ruleNotEmpty]">
      <sc-checkbox value="1">--- 1 ---</sc-checkbox>
      <sc-checkbox value="2">--- 2 ---</sc-checkbox>
      <sc-checkbox value="3">--- 3 ---</sc-checkbox>
      <sc-checkbox value="4">--- 4 ---</sc-checkbox>
      <sc-checkbox value="5">--- 5 ---</sc-checkbox>
    </sc-checkbox-wrapper>
  </sc-form-item>
  <sc-form-item>
    <template #custom>
      <sc-button @click="check">CHECK</sc-button>
      <sc-button @click="clear" v-tooltip="`값을 지우는게 아니라 화면상의 validation만 초기화 합니다.`">Validation Reset</sc-button>
    </template>
  </sc-form-item>
</sc-form-box>
</sc-validator>'
        script="
import { useRules } from '@/hooks/common/useRules';

export default {
name: 'SampleValidator',
components: {
  ScTextArea,
  ScCheckboxWrapper,
  ScCheckbox,
  ScMultiDropdown,
  ScDropdown,
  ScCodeHighlight,
  ScButton,
  ScFormItem,
  ScFormBox,
  ScTextField,
  ScValidator,
  ScSampleBox,
},
// 공통으로 가장 많이 쓰이는 rule을 가져올 수 있습니다.
setup() {
  // 필요한 rule만 가져옵니다.
  const { ruleRequired, ruleNumeric, ruleBetween, ruleEmail, ruleMaxLength, ruleNotEmpty } =
    useRules();

  // 가져온 rule을 해당 component에서 접근할 수 있게 return에 넣어줍니다.
  return {
    ruleRequired,
    ruleNumeric,
    ruleBetween,
    ruleEmail,
    ruleMaxLength,
    ruleNotEmpty,
  };
},
data() {
  return {
    company: '',
    name: '',
    gender: '',
    age: '',
    email: '',
    memo: '',
    multiItems: [
      { value: 'A', text: 'A Zone' },
      { value: 'B', text: 'B Zone' },
      { value: 'C', text: 'C Zone' },
      { value: 'D', text: 'D Zone' },
    ],
    multiItemValue: [],
    checkValue: [],
    // 컴포넌트에서 따로 rule set을 정할 수 있습니다.
    validateRule: [
      (v) => !!v || '필수값입니다 (공통 rule이 아닌 수동)',
      (v) => v.length <= 10 || '최대 10자이상 입력하세요',
    ],
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
    this.$refs.validator.clearAll();
  },
},
};"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScValidator from '@/components/common/ScValidator.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScButton from '@/components/common/ScButton.vue';
import { useRules } from '@/hooks/common/useRules';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDropdown from '@/components/common/ScDropdown.vue';
import ScMultiDropdown from '@/components/common/ScMultiDropdown.vue';
import ScCheckbox from '@/components/common/ScCheckbox.vue';
import ScCheckboxWrapper from '@/components/common/ScCheckboxWrapper.vue';
import ScTextArea from '@/components/common/ScTextArea.vue';

export default {
  name: 'SampleValidator',
  components: {
    ScTextArea,
    ScCheckboxWrapper,
    ScCheckbox,
    ScMultiDropdown,
    ScDropdown,
    ScCodeHighlight,
    ScButton,
    ScFormItem,
    ScFormBox,
    ScTextField,
    ScValidator,
    ScSampleBox,
  },
  // 공통으로 가장 많이 쓰이는 rule을 가져올 수 있습니다.
  setup() {
    // 필요한 rule만 가져옵니다.
    const { ruleRequired, ruleNumeric, ruleBetween, ruleEmail, ruleMaxLength, ruleNotEmpty } =
      useRules();

    // 가져온 rule을 해당 component에서 접근할 수 있게 return에 넣어줍니다.
    return {
      ruleRequired,
      ruleNumeric,
      ruleBetween,
      ruleEmail,
      ruleMaxLength,
      ruleNotEmpty,
    };
  },
  data() {
    return {
      company: '',
      name: '',
      gender: '',
      age: '',
      email: '',
      memo: '',
      multiItems: [
        { value: 'A', text: 'A Zone' },
        { value: 'B', text: 'B Zone' },
        { value: 'C', text: 'C Zone' },
        { value: 'D', text: 'D Zone' },
      ],
      multiItemValue: [],
      checkValue: [],
      // 컴포넌트에서 따로 rule set을 정할 수 있습니다.
      validateRule: [
        (v) => !!v || '필수값입니다 (공통 rule이 아닌 수동)',
        (v) => v.length <= 10 || '최대 10자이상 입력하세요',
      ],
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
      this.$refs.validator.clearAll();
    },
  },
};
</script>

<style scoped lang="scss"></style>
