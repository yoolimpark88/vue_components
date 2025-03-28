<template>
  <button
    :class="['sc-button', buttonType, color, size, customProps, shape, variants]"
    :disabled="disabled || roleDisabled"
    @click="onClick">
    <!-- 왼쪽에 아이콘 표시 -->
    <sc-icon 
      v-if="icon && iconPosition === 'left'" 
      :type="icon" 
      :color="color ? 'white' : undfined "
      class="btn-icon-left" 
    />
    <slot></slot>
    <!-- 오른쪽에 아이콘 표시 -->
    <sc-icon 
      v-if="icon && iconPosition === 'right'" 
      :type="icon" 
      :color="color ? 'white' : undfined "
      class="btn-icon-right" 
    />
  </button>
</template>

<script>
import { useRoleStore } from "@/store/roleStore";
import { storeToRefs } from "pinia";
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: "ScButton",
  components: {ScIcon},
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "text", "icon"].includes(value),
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    },
    color: {
      type: String,
      default: "",
      validator: (value) => ["", "primary", "indigo", "mint"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    width: {
      type: [String, Number],
      default: undefined,
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
    role: {
      type: String,
      default: undefined,
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
    // hidden: {
    //   type: Boolean,
    //   default: false,
    // }
  },
  setup() {
    const roleStore = useRoleStore();
    const { getCurrentRoles } = storeToRefs(roleStore);
    return {
      getCurrentRoles: getCurrentRoles,
    };
  },
  computed: {
    buttonType() {
      // return this.type === "round" ? "round-button" : "default-button";
      switch(this.type) {
        case "text":
          return "text-button";
        case "icon":
          return "icon-button";
        default :
          return "default-button";

      }
    },
    customProps() {
      const size = [];
      if (this.small) {
        size.push("small");
      }
      if (this.medium) {
        size.push("medium");
      }
      if (this.large) {
        size.push("large");
      }
      if (this.width) {
        size.push(`w-[${this.width}]`);
      }
      return size.join(" ");
    },
    roleDisabled() {
      if (this.role) {
        const assignRoles = this.role.split(",").map((role) => role.trim());
        let isDisabled = true;
        for (let i = 0; i < assignRoles.length; i++) {
          const assignRole = assignRoles[i];
          if (this.currentRoles.includes(assignRole)) {
            isDisabled = false;
            break;
          }
        }
        return isDisabled;
      }
      return false;
    },
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sc-button {
  color: $SC-COLOR-GRAY-80;
  background: $SC-COLOR-WHITE;
  border: 1px solid $SC-COLOR-GRAY-50;
  min-width: 60px;
  max-width: fit-content;
  width: 100%;
  user-select: none;
  &.small {
    height: 26px;
    font-size: 12px;
    padding: 0 8px;
    line-height: 24px;
  }
  &.medium {
    height: 32px;
    font-size: 13px;
    padding: 0 16px;
  }
  &.large {
    height: 38px;
    font-size: 14px;
    padding: 0 24px;
  }
  &:hover {
    background: $SC-COLOR-GRAY-10;
  }
  &.active {
    background: $SC-PRIMARY-COLOR-TYPE2;
    color: $SC-COLOR-TYPE2-WHITE;
  }
  &.icon-button {
    padding: 0 0 0 3px;
    &.small {
      min-width: 26px;
    }
    &.medium {
      min-width: 32px;
    }
    &.large {
      min-width: 38px;
    }
  }
  &.circle {
    border-radius: 50%;
  }
  &.text-button {
    background: none;
    border:none;
    &.primary {
      background: none;
      border:none;
      color: $SC-PRIMARY-COLOR-TYPE2;
    }
    &.background {
      background: $SC-COLOR-TYPE2-GRAY-20;
    }
    &.shadow {
      background: $SC-COLOR-TYPE2-WHITE;
      border: 1px solid $SC-COLOR-GRAY-50;
      box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &.primary {
    background: $SC-PRIMARY-COLOR-TYPE2;
    color: $SC-COLOR-WHITE;
    border: 1px solid $SC-SECONDARY-COLOR-TYPE2-80;
    &:hover,
    &.active {
      color: $SC-COLOR-WHITE;
      background: $SC-SECONDARY-COLOR-TYPE2-80;
    }
  }
  &.indigo {
    background: $SC-PRIMARY-COLOR-INDIGO;
    color: $SC-COLOR-WHITE;
    border: 1px solid $SC-PRIMARY-COLOR-INDIGO;
    &:hover,
    &.active {
      background: $SC-PRIMARY-HOVER-COLOR-INDIGO;
    }
  }
  &.mint {
    background: $SC-PRIMARY-COLOR-MINT;
    color: $SC-COLOR-WHITE;
    border: 1px solid $SC-PRIMARY-COLOR-MINT;
    &:hover,
    &.active {
      background: $SC-SUB-COLOR-MINT-TINT-05;
    }
  }
  &:not(.active) {
    &:deep(.sc-icon) {
      top: 3px;
      position: relative;
      svg {
        margin: 0 3px 0 0;
      }
    }
  }
  &.toggle-favorite.active {
    border-color: $SC-PRIMARY-COLOR-YELLOW;
    background: $SC-SUB-COLOR-YELLOW-TINT-01;
    color: $SC-PRIMARY-COLOR-YELLOW;
    &:deep(.sc-icon) {
      top: 3px;
      position: relative;
      svg {
        margin: 0 3px 0 0;
        fill: $COLOR-STATUS-WARNING !important;
      }
    }
  }
  &.hiddenBtn {
    color:#fff;
    border:0;
    &:hover {
      background:#fff;
    }
  }
}
.sc-button + .sc-button {
  margin-left: 5px;
}
.sc-button-wrapper {
  .sc-button {
    +.sc-button {
      margin-left:0;
      border-left:0;
    }
  }
}
img + .sc-button {
  margin-left: 5px;
}
.dui-content + .sc-button {
  margin-left: 5px;
}
</style>
