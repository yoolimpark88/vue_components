<template>
  <div 
    class="sc-button-wrapper"
    :class="disabled ? 'disable': ''"
  >
    <slot 
      :onActiveClick="handleClick" 
      :activeIndex="disabled ? props.initialActiveIndex : activeIndex" 
      :activeIndexes="disabled ? props.initialActiveIndexes : activeIndexes" 
    />
  </div>
</template>

<script setup>
import { useRoleStore } from "@/store/roleStore";
import { storeToRefs } from "pinia";
import { ref, watch, defineProps, computed, onMounted } from 'vue'

const props = defineProps({
  initialActiveIndex: {
    type: Number,
    default: 0,
  },
  initialActiveIndexes: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "default",
    validator: (value) => ["default", "text", "icon"].includes(value),
  },
  color: {
    type: String,
    default: "",
    validator: (value) => ["", "primary", "indigo", "mint"].includes(value),
  },
  size: {
    type: String,
    default: "small",
    validator: (value) => ["small", "medium", "large"].includes(value),
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
  shape: {
    type: String,
    default: "",
    validator: (value) => ["", "circle", "round"].includes(value),
  },
  variants: {
    type: String,
    default: "",
    validator: (value) => ["", "background", "shadow"].includes(value),
  },
});
//선택된 그룹 버튼 index를 체크하고 반영
const activeIndex = ref(props.initialActiveIndex);
const activeIndexes = ref(props.initialActiveIndexes);
onMounted(() => {
  if (activeIndex.value === null) {
    activeIndex.value = 0; 
  }
  if (!activeIndexes.value.length) {
    activeIndexes.value = [];
  }
});
const handleClick = (index) => {
  if (!props.disabled) {
    activeIndex.value = activeIndex.value === index ? null : index;
    const idx = activeIndexes.value.indexOf(index);
    if (idx === -1) {
      activeIndexes.value.push(index);
    } else {
      activeIndexes.value.splice(idx, 1);
    }
  }
};
watch(
  () => [props.initialActiveIndex, props.initialActiveIndexes],
  ([newIndex, newIndexes]) => {
    if (props.isMultiple) {
      activeIndexes.value = newIndexes;
    } else {
      activeIndex.value = newIndex;
    }
  }
);


const roleStore = useRoleStore();
const { getCurrentRoles } = storeToRefs(roleStore);

//사이즈 prop반영
const customProps = computed(() => {
  const size = [];
  if (props.small) {
    size.push("small");
  }
  if (props.medium) {
    size.push("medium");
  }
  if (props.large) {
    size.push("large");
  }
  return size.join(" ");
});

defineExpose({
  activeIndex,
  activeIndexes,
  handleClick,
  customProps,
  getCurrentRoles: getCurrentRoles,
});
</script>

<style scoped lang="scss">
.sc-button-wrapper {
  display: flex;
  .sc-button {
    +.sc-button {
      margin-left:0;
    }
  }
  &.disable {
    opacity:50%;
  }
}
</style>
