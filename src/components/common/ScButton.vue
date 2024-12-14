<template>
  <button
    :class="['sc-button', buttonType, color, size, customProps]"
    :disabled="disabled || roleDisabled"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import { useRoleStore } from "@/store/roleStore";
import { storeToRefs } from "pinia";

export default {
  name: "ScButton",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "round"].includes(value),
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
      return this.type === "round" ? "round-button" : "default-button";
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
  &.round-button {
    border-radius: 5px;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &.primary {
    background: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    color: $SC-COLOR-WHITE;
    border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
    &:hover {
      background: $SC-PRIMARY-HOVER-COLOR-LIGHT-BLUE;
    }
  }
  &.indigo {
    background: $SC-PRIMARY-COLOR-INDIGO;
    color: $SC-COLOR-WHITE;
    border: 1px solid $SC-PRIMARY-COLOR-INDIGO;
    &:hover {
      background: $SC-PRIMARY-HOVER-COLOR-INDIGO;
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
}
.sc-button + .sc-button {
  margin-left: 5px;
}
img + .sc-button {
  margin-left: 5px;
}
.dui-content + .sc-button {
  margin-left: 5px;
}
</style>
