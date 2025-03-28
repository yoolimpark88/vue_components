<template>
  <label
    :class="[
      'sc-checkbox-container',
      disabled ? 'disabled' : '',
      size,
      customProps,
    ]">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="validCheck"
      @change="onChange"
      :disabled="disabled"
      class="sc-checkbox" />
    <span class="checkmark"></span>
    <slot></slot>
  </label>
</template>

<script>
import { computed, inject, ref } from "vue";

export default {
  name: "ScCheckbox",
  emits: ["update:modeValue", "change"],
  setup(props) {
    const defaultFunc = () => {};
    const checkValues = inject("checkValues", ref([])); // provide된 값을 직접 inject
    const updateCheckedValues = inject("updateCheckedValues", defaultFunc);

    const isChecked = computed(() => {
      if (typeof props.value === "object") {
        const uniqKey = props.objectUniqKey;
        return checkValues.value
          .map((v) => v[uniqKey])
          .includes(props.value[uniqKey]);
      }
      return checkValues.value.includes(props.value);
    });

    const handleChange = () => {
      if (updateCheckedValues !== defaultFunc) {
        const updateValues = isChecked.value
          ? checkValues.value.filter((val) => val !== props.value)
          : [...checkValues.value, props.value];
        updateCheckedValues(updateValues);
      }
    };
    return {
      isChecked,
      handleChange,
    };
  },
  props: {
    modelValue: {
      type: [Boolean, String, Number, Array],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Object],
    },
    objectUniqKey: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: "",
      validator: (value) => ["", "small", "medium", "large"].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    validCheck() {
      if (this.isChecked) {
        return true;
      }
      if (Array.isArray(this.modelValue)) {
        return typeof this.value === "string"
          ? this.modelValue.includes(this.value)
          : this.modelValue
              .map((v) => v[this.objectUniqKey])
              .includes(this.value[this.objectUniqKey]);
      }
      const trueArray = [true, "Y", "y"];
      return trueArray.includes(this.modelValue);
    },
    customProps() {
      const size = [];
      if (this.small) {
        size.push("small");
      } else if (this.medium) {
        size.push("medium");
      } else if (this.large) {
        size.push("large");
      }
      return size.join(" ");
    },
  },
  methods: {
    onChange() {
      let result = this.modelValue;
      if (typeof this.modelValue === "boolean") {
        result = !this.modelValue;
      } else if (typeof this.modelValue === "string") {
        switch (this.modelValue) {
          case "Y":
            result = "N";
            break;
          case "y":
            result = "n";
            break;
          case "N":
            result = "Y";
            break;
          case "n":
            result = "y";
            break;
          default:
            console.log("체크박스 에러: 정의가 필요함", this.modelValue);
            break;
        }
      } else if (Array.isArray(this.modelValue)) {
        const isObject = typeof this.value === "object";
        if (
          isObject &&
          this.modelValue
            .map((v) => v[this.objectUniqKey])
            .includes(this.value[this.objectUniqKey])
        ) {
          result = this.modelValue.filter(
            (item) =>
              item[this.objectUniqKey] !== this.value[this.objectUniqKey]
          );
        } else if (this.modelValue.includes(this.value)) {
          result = this.modelValue.filter((item) => item !== this.value);
        } else {
          result = [...this.modelValue, this.value];
        }
      }
      this.$emit("update:modelValue", result);
      this.$emit("change", result);
      this.handleChange();
    },
  },
  mounted() {
    if (typeof this.value === "object" && this.objectUniqKey === undefined) {
      console.log("Object의 모델에서는 ObjectUniqKey가 있어야 합니다");
    }
  },
};
</script>

<style scoped lang="scss">
.sc-checkbox-container {
  display: inline-block;
  position: relative;
  padding: 0 0 0 22px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  color: $SC-COLOR-GRAY-90;
  line-height: 16px;
  user-select: none;
  height: 15px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  &.disabled {
    color: $SC-COLOR-GRAY-50;
    cursor:no-drop;
  }
  &.medium {
    height: 20px;
    font-size: 15px;
    padding: 0 0 0 28px;
    line-height: 20px;
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background: $SC-COLOR-WHITE;
    }
    .checkmark:after {
      left: -1px;
      top: -1px;
      width: 20px;
      height: 20px;
    }
  }
  &.large {
    height: 22px;
    font-size: 18px;
    padding-left: 30px;
    line-height: 22px;
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 22px;
      width: 22px;
      background: $SC-COLOR-WHITE;
      border: 1px solid $SC-COLOR-GRAY-50;
    }
    .checkmark:after {
      left: -1px;
      top: -1px;
      width: 22px;
      height: 22px;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background: $SC-COLOR-WHITE;
    border: 1px solid $SC-COLOR-GRAY-50;
  }
  input:checked ~ .checkmark {
    background: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
  }
  &.disabled input:checked ~ .checkmark {
    background: $SC-COLOR-GRAY-60;
    border: 1px solid $SC-COLOR-GRAY-60;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    content: url("@/assets/img/svg/ico-checked.svg");
    left: -1px;
    top: -1px;
    width: 16px;
    height: 16px;
  }
}
</style>
