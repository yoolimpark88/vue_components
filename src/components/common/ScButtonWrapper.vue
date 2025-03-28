<template>
  <div 
    class="sc-button-wrapper"
    :class="[{ disabled }, shape]"
  >
    <sc-button 
      v-for="(label, index) in labelGroup" 
      :key="index" 
      :class="{ active: isActive(label) }"
      :color="colorGroup[index]"
      :icon="iconGroup[index]"
      :iconPosition="iconPositionGroup[index]"
      :size="size"
      @click="handleClick(index, label)"
      class="sc-button"
    >
      {{ label }}
    </sc-button>
  </div>
</template>

<script setup>
import ScButton from "@/components/common/ScButton.vue";
import { useRoleStore } from "@/store/roleStore";
import { storeToRefs } from "pinia";
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  labelGroup: {
    type: Array,
    required: true,
  },
  initialActiveIndex: {
    type: Number,
    default: 0,
  },
  activeLabel: {
    type: String,
    default: '',
  },
  activeLabels: {
    type: Array,
    default: () => []
  },
  multiSelect: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  colorGroup: {
    type: Array,
    default: () => []
  },  
  iconGroup: {
    type: Array,
    default: () => []
  }, 
  iconPositionGroup: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "small",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  shape: {
    type: String,
    default: "",
    validator: (value) => ["", "round"].includes(value),
  },
});
const emit = defineEmits(['update:activeLabel', 'update:activeLabels']);
const selectedLabels = ref(props.multiSelect ? [...props.activeLabels] : props.activeLabel);
const handleClick = (index, label) => {
  if (props.multiSelect) {
    // 다중 선택 모드
    if (selectedLabels.value.includes(label)) {
      selectedLabels.value = selectedLabels.value.filter((item) => item !== label);
    } else {
      selectedLabels.value.push(label);
    }
    emit('update:activeLabels', selectedLabels.value);
  } else {
    // 단일 선택 모드
    selectedLabels.value = label;
    emit('update:activeLabel', label);
  }
};

const isActive = (label) => {
  if (props.multiSelect) {
    return selectedLabels.value.includes(label);
  }
  return selectedLabels.value === label;
};

watch(() => props.activeLabels, (newLabels) => {
  if (props.multiSelect) {
    selectedLabels.value = newLabels;
  }
});

watch(() => props.activeLabel, (newLabel) => {
  if (!props.multiSelect) {
    selectedLabels.value = newLabel;
  }
});

const roleStore = useRoleStore();
const { getCurrentRoles } = storeToRefs(roleStore);

defineExpose({
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
  &.disabled {
    opacity:50%;
  }
  &.round {
    .sc-button {
      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
}
</style>
