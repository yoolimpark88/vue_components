<template>
  <div :class="['sc-textfield-container', size, customProps, { invalid: !isValid }]">
    <input
      ref="scInput"
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
      :disabled="disabled"
      :readonly="readonly"
      @keyup.esc="clear"
      @keyup.enter="search"
      class="sc-textfield block w-full py-1.5 pl-2.5 pr-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0"
      v-shake="isValid"
      :class="[size, customProps, { rounded }]"
      :style="customRightPadding"
    />
    <div class="icon-button-container" v-if="!disabled">
      <button v-if="dateIcon" class="icon-button clear-button" @click="$emit('click-icon', 'date')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          stroke-width="1.5"
          stroke="#959595"
          class="w-[20px] h-[20px]"
          :class="[size, customProps]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </button>
      <button
        v-if="clearable && modelValue.length > 0"
        class="icon-button clear-button"
        @click="clear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#959595"
          class="w-[20px] h-[20px]"
          :class="[size, customProps]"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>
      <button v-if="searchable" class="icon-button clear-button" @click="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#959595"
          class="w-[20px] h-[20px]"
          :class="[size, customProps]"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div v-if="!isValid" class="error">
      <span class="message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useValidation } from '@/hooks/common/useValidation';

export default {
  name: 'ScTextField',
  emits: ['update:modelValue', 'search', 'click-icon'],
  inject: {
    addValidator: {
      default: () => () => {},
    },
  },
  setup(props) {
    // modelValue를 ref로 감싸서 반응형으로 만듬
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
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    dateIcon: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    escClear: {
      type: Boolean,
      default: true,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small', // '', 'small', 'medium'
      validator: (value) => ['', 'small', 'medium'].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
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
    mask: {
      type: String,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customRightPadding() {
      let rightPadding = 10;
      if (this.clearable && this.searchable) {
        rightPadding += 45;
      } else if (this.clearable || this.searchable) {
        rightPadding += 20;
      }

      return {
        'padding-right': `${rightPadding}px`,
      };
    },
    customProps() {
      const size = [];
      if (this.small) {
        size.push('small');
      }
      if (this.medium) {
        size.push('medium');
      }
      return size.join(' ');
    },
  },
  methods: {
    focus(preventScroll = false) {
      this.$refs.scInput.focus({ preventScroll });
    },
    applyMask(value) {
      if (value === '') return '';
      let regex = new RegExp('');
      // 정규식
      if (this.mask.startsWith('/') && this.mask.endsWith('/')) {
        const regParts = this.mask.match(/^\/(.*?)\/([gim]*)$/);
        if (regParts) {
          // the parsed pattern had delimiters and modifiers. handle them.
          regex = new RegExp(regParts[1], regParts[2]);
        } else {
          // we got pattern string without delimiters
          regex = new RegExp(this.mask);
        }
      } else {
        switch (this.mask) {
          // 프리셋
          case 'number':
            regex = /[0-9]+/;
            break;
          case 'english':
            regex = /[a-zA-Z0-9]+/;
            break;
          case 'korean':
            regex = /[ㄱ-ㅎ|가-힣|0-9]+/;
            break;
          default:
            // 기본 음절 하나하나
            return this.checkMask(value);
        }
      }

      const array = regex.exec(value);
      if (array !== null) {
        return array.join('');
      } else {
        return '';
      }
    },
    checkMask(value) {
      // 마스크 로직
      let maskedValue = '';
      let maskIndex = 0;
      let valueIndex = 0;

      while (maskIndex < this.mask.length && valueIndex < value.length) {
        const maskChar = this.mask[maskIndex];
        const valueChar = value[valueIndex];

        const result = this.isMaskChar(maskChar, valueChar);
        maskedValue += result;
        valueIndex++;
        maskIndex++;
      }

      return maskedValue;
    },
    isMaskChar(maskChar, valueChar) {
      let isValid = false;
      let result = valueChar;
      switch (maskChar) {
        case '#':
          // #(숫자)
          isValid = /\d/.test(valueChar);
          result = valueChar;
          break;
        case 'A':
          // A(대문자)
          isValid = /[a-zA-Z]/.test(valueChar);
          result = valueChar.toUpperCase();
          break;
        case 'a':
          // a(소문자)
          isValid = /[a-zA-Z]/.test(valueChar);
          result = valueChar.toLowerCase();
          break;
        case 'N':
          // N(숫자/대문자)
          isValid = /[a-zA-Z0-9]/.test(valueChar);
          result = valueChar.toUpperCase();
          break;
        case 'n':
          // n(숫자/소문자)
          isValid = /[a-zA-Z0-9]/.test(valueChar);
          result = valueChar.toLowerCase();
          break;
        default:
          // 특수문자 동일한값 ex) - .
          isValid = maskChar === valueChar;
          result = valueChar;
          break;
      }
      return isValid ? result : '';
    },
    setValue(val) {
      this.$emit('update:modelValue', val);
    },
    onInput(event) {
      if (this.mask !== null) {
        const maskedValue = this.applyMask(event.target.value);
        event.target.value = maskedValue;
        this.setValue(maskedValue);
        return;
      }
      this.setValue(event.target.value);
    },
    clear() {
      if (this.escClear && this.clearable) {
        this.setValue('');
      }
    },
    search() {
      this.$emit('search', this.modelValue);
    },
  },
  created() {
    if (this.value) {
      this.setValue(this.value);
    }
  },
};
</script>

<style scoped lang="scss">
.sc-textfield-container {
  position: relative;
  .icon-button-container {
    position: absolute;
    display: flex;
    align-items: center;
  }

  &.small .icon-button-container {
    height: 100%;
    top: 0;
    right: 12px;
    button + button {
      margin-left: 2px;
    }
  }

  &.medium .icon-button-container {
    height: 100%;
    top: 0;
    right: 6px;
    button + button {
      margin-left: 5px;
    }
  }
  .sc-textfield {
    border: 1px solid $SC-COLOR-GRAY-30;
    width: 100%;

    &.rounded {
      border-radius: 15px;
    }

    &.small {
      height: 26px;
      line-height: 24px;
      font-size: $SC-FONT-SIZE-BODY-1;
    }

    &.medium {
      height: 32px;
      line-height: 30px;
      font-size: 14px;
    }

    &:focus,
    &:hover {
      outline: none;
      border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
    // 비활성화
    &:disabled {
      border-color: $SC-COLOR-GRAY-20;
      background-color: $SC-COLOR-GRAY-10;
      color: $SC-COLOR-GRAY-40;
    }
    //read only 일때
    &[readonly] {
      background-color: #fafafa;
      border-color: $SC-COLOR-GRAY-20;
      color: $SC-COLOR-GRAY-80;
      font-weight: 300;
    }
  }
  .icon-button-container {
    button {
      svg {
        &.small {
          width: 15px;
          height: 15px;
        }
        &.medium {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

// invalid
.invalid {
  input,
  input:focus,
  input:hover {
    border-color: $COLOR-STATUS-ERROR;
  }

  input.shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  .error {
    background-color: $COLOR-STATUS-ERROR;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 4px;
    line-height: 16px;

    .message {
      font-size: $SC-FONT-SIZE-BODY-1;
      color: $SC-COLOR-WHITE;
      padding: 0 4px;
    }
  }
}
</style>
