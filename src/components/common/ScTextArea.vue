<template>
  <div :class="['sc-textarea-wrap', size, customProps, { invalid: !invalid }]">
    <textarea
      ref="sc-textarea"
      v-bind="$attrs"
      :value="modelValue"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
      class="sc-textarea w-full"
      :class="[{ small }, customProps]"
      v-shake="inValid"
      :style="customRightPadding"
    ></textarea>

    <div v-if="!isValid" class="error">
      <span class="message">{{ errorMessage }}</span>
    </div>
    <div v-if="maxlength" class="counter flex justify-end">
      <span class="cnt">{{ this.modelValue?.length ?? 0 }}</span
      >{{ maxlength }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useValidation } from '@/hooks/common/useValidation';

export default {
  name: 'ScTextArea',
  emits: ['update:modelValue', 'change'],
  setup(props) {
    // modelValue를 ref로 감싸서 반응형으로 만듦
    const valueModel = ref(props.modelValue);
    const { isValid, validate, errorMessage, checkedValidate } = useValidation(
      props.rules,
      valueModel,
    );
    // 부모 컴포넌트로 부터 modelValue의 변화를 감지
    watch(
      () => props.modelValue,
      (newValue) => {
        valueModel.value = newValue;
        if (props.rules.length > 0 && checkedValidate.value && !props.lazy) {
          validate();
        }
      },
    );
    return {
      isValid,
      errorMessage,
      validate,
    };
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: [Number, String],
      default: 3,
    },
    maxlength: {
      type: [Number, String],
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'small'].includes(value),
    },
    small: {
      type: Boolean,
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
  },
  computed: {
    customProps() {
      const css = [];
      if (this.small) {
        css.push('small');
      }
      if (this.maxlength) {
        css.push('has-counter');
      }
      return css.join(' ');
    },
  },
  methods: {
    onInput(event) {
      if (this.maxlength) {
        this.$emit('update:modelValue', event.target.value.substr(0, this.maxlength));
        this.$emit('change', event.target.value.substr(0, this.maxlength));
      } else {
        this.$emit('update:modelValue', event.target.value);
        this.$emit('change', event.target.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sc-textarea-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  .sc-textarea {
    font-size: 12px;
    line-height: 180%;
    border: 1px solid $SC-COLOR-GRAY-30;
    padding: 3px 10px;
    resize: none;
    &.has-counter {
      padding-right: 70px;
    }
    &.small {
      font-size: 12px;
      line-height: 24px;
    }
    &:focus {
      outline: none;
      border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
    &:disabled {
      border-color: $SC-COLOR-GRAY-20;
      color: $SC-COLOR-GRAY-50;
    }
  }

  // readonly일때
  .sc-textarea[readonly] {
    border-color: transparent;
    color: $SC-COLOR-GRAY-50;
    font-weight: 600;
  }
  .counter {
    position: absolute;
    right: 15px;
    bottom: 5px;
    font-size: 12px;
    .cnt {
      color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
  }
}

.invalid {
  textarea,
  textarea:focus,
  textarea:hover {
    border-color: $COLOR-STATUS-ERROR;
  }
  textarea.shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .error {
    background-color: $COLOR-STATUS-ERROR;
    z-index: 1;
    padding: 0 4px;
    line-height: 16px;
    .message {
      font-size: 12px;
      color: $SC-COLOR-WHITE;
      padding: 0 4px;
    }
  }
  .counter {
    bottom: 21px;
  }
}
</style>
