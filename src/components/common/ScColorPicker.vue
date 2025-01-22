<template>
  <div class="sc-color-picker">
    <div :class="['color-container', size]" @click="$refs.input.click()">
      <div ref="zone" class="color-zone">
        <sc-icon type="chevron-down" color="#fff" size="small" />
      </div>
    </div>
    <input type="color" ref="input" class="color-input" @input="onChange" v-model="color" />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScColorPicker',
  components: { ScIcon },
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
  setup(props, { emit }) {
    const color = ref(props.modelValue);
    const zone = ref(null);

    watch(color, (newColor) => {
      zone.value.style.backgroundColor = newColor;
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        color.value = newValue;
      },
    );

    const onChange = (e) => {
      color.value = e.target.value;
      emit('update:modelValue', color.value);
      emit('change', color.value);
    };
    onMounted(() => {
      // 최초 propps 색상으로 지정
      zone.value.style.backgroundColor = color.value;
    });

    return {
      color,
      zone,
      onChange,
    };
  },
};
</script>

<style scoped lang="scss">
.sc-color-picker {
  display: inline-block;
  position: relative;
}
.color-container {
  cursor: pointer;
  padding: 4px;
  border: 1px solid $SC-COLOR-GRAY-30;
  border-radius: 25%;

  &.small {
    width: 28px;
    height: 28px;
  }
  &.medium {
    width: 32px;
    height: 32px;
  }
  &.large {
    width: 36px;
    height: 36px;
  }
}
.color-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid $SC-COLOR-GRAY-30;
  border-radius: 10%;
}
.color-input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
.trans {
  background-image: linear-gradient(45deg, #b0b0b0 25%, transparent 25%),
    linear-gradient(-45deg, #b0b0b0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #b0b0b0 75%),
    linear-gradient(-45deg, transparent 75%, #b0b0b0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
}
</style>
