<template>
  <div
    v-bind="$attrs"
    :class="[
      'sc-checkbox-wrapper',
      { vertical, invalid: !isValid, 'mb-5': !isValid && !vertical },
    ]"
    v-shake="isValid">
    <slot />
    <div v-if="!isValid" class="error">
      <span class="message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { computed, provide, ref, watch } from "vue";
import { useValidation } from "@/hooks/common/useValidation.js";

export default {
  name: "ScCheckboxWrapper",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: {
      type: [Boolean, String, Array],
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const updateValue = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
    };
    provide(
      "checkValues",
      computed(() => props.modelValue)
    );
    provide("updateCheckedValues", updateValue);

    // modelValue를 ref로 감싸서 반응형으로 만듦.
    const valueModel = ref(props.modelValue);
    const { isValid, validate, errorMessage, checkedValidate } = useValidation(
      props.rules,
      valueModel
    );
    // 부모 컴포넌트로부터 modelValue의 변화를 감지
    watch(
      () => props.modelValue,
      (newValue) => {
        valueModel.value = newValue;
        if (props.rules.length > 0 && checkedValidate.value && !props.lazy) {
          validate();
        }
      }
    );
    return {
      isValid,
      errorMessage,
      validate,
    };
  },
  created() {},
};
</script>

<style scoped lang="scss">
.sc-checkbox-wrapper {
  position: relative;
  &.vertical {
    display: flex;
    flex-direction: column;
    .error {
      position: unset;
      left: unset;
      right: unset;
    }
    :deep(.sc-checkbox-container) {
      margin-bottom: 5px;
      margin-top: 5px;
    }
    :deep(.sc-checkbox-container + .sc-checkbox-container) {
      margin-left: 0;
    }
  }
}
.invalid {
  &.shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  :deep(label) {
    color: $COLOR-STATUS-ERROR;
  }
  :deep(.checkmark) {
    border-color: $COLOR-STATUS-ERROR;
  }
  .error {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    line-height: 16px;
    .message {
      font-size: 12px;
      color: $COLOR-STATUS-ERROR;
    }
  }
}
</style>
