<template>
  <div :class="['sc-input-chip', color, size, { removable, disabled }]">
    <span class="sd-input-chip-slot"><slot /></span>
    <i v-if="removable" @click="onClickDelete">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <rect
          x="13.5"
          y="0.5"
          width="3"
          height="27.93"
          transform="translate(-5.9 14.9) rotate(-45)"
        ></rect>
        <rect
          x="1"
          y="13"
          width="27.9"
          height="3"
          transform="translate(-5.9 14.9) rotate(-45)"
        ></rect>
      </svg>
    </i>
  </div>
</template>

<script>
export default {
  name: 'ScInputChip',
  emits: ['click-delete'],
  props: {
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'small', //  'small', 'medium'
      validator: (value) => ['small', 'medium'].includes(value),
    },
    removable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClickDelete() {
      this.$emit('click-delete', this.item);
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.sc-input-chip {
  display: inline-block;
  position: relative;
  line-height: 32px;
  font-size: $SC-FONT-SIZE-BODY-1;
  height: 32px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 16px;
  user-select: none;
  background-color: $SC-COLOR-GRAY-20;
  margin: 0 10px 0 0;

  /* 기본 배경 컬러 (default 컬러값 제외) */
  &.primary {
    background-color: $SC-PRIMARY-COLOR-BLUE;
  }
  &.point {
    background-color: $SC-POINT-COLOR-GREEN-1;
  }
  &.red {
    background-color: $COLOR-STATUS-ERROR;
  }
  &.orange {
    background-color: $COLOR-STATUS-WARNING;
  }
  &.green {
    background-color: $COLOR-STATUS-SUCCESS;
  }
  &.small {
    line-height: 23px;
    font-size: $SC-FONT-SIZE-BODY-1;
    height: 24px;
    padding-right: 5px;
    padding-left: 3px;
    border-radius: 12px;
    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 14px;
      width: 14px;
      border-radius: 8px;
      svg {
        font-size: 0.7em;
        width: 0.9em;
        height: 0.9em;
        overflow: visible;
        fill: $SC-COLOR-WHITE;
      }
    }
  }
  &.medium {
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
    height: 32px;
    padding-right: 8px;
    padding-left: 8px;
    border-radius: 16px;
    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
      border-radius: 8px;
      svg {
        font-size: 0.7em;
        width: 1em;
        height: 1em;
        overflow: visible;
        fill: $SC-COLOR-WHITE;
      }
    }
  }
  .sd-input-chip-slot {
    line-break: normal;
    margin: 0 8px 0 8px;
    color: $SC-COLOR-WHITE;
  }
  /* default text 컬러값 */
  &:not(.primary, .point, .red, .orange, .green) {
    .sd-input-chip-slot {
      color: $SC-COLOR-GRAY-80;
    }
  }
  &:hover {
    cursor: pointer;
    i {
      background-color: $SC-COLOR-GRAY-70;
    }
  }
  &:active {
    cursor: pointer;
    background-color: rgba($color: $SC-COLOR-BLACK, $alpha: 0.2);
    mix-blend-mode: multiply;
  }

  /* chip 마우스오버 시 X 아이콘 변경되는 컬러 */
  &.primary:hover {
    i {
      background-color: $SC-PRIMARY-COLOR-DEEP-BLUE;
    }
  }
  &.point:hover {
    i {
      background-color: $SC-SUB-COLOR-LIME-SHADE-01;
    }
  }
  &.red:hover {
    i {
      background-color: $SC-SUB-COLOR-RED-SHADE-01;
    }
  }
  &.orange:hover {
    i {
      background-color: $SC-SUB-COLOR-ORANGE-SHADE-01;
    }
  }
  &.green:hover {
    i {
      background-color: $SC-SUB-COLOR-GREEN-SHADE-01;
    }
  }

  /* chip 클릭 시 변경되는 컬러 */
  &.primary:active {
    background-color: $SC-PRIMARY-COLOR-DEEP-BLUE;
  }
  &.point:active {
    background-color: $SC-SUB-COLOR-LIME-SHADE-01;
  }
  &.red:active {
    background-color: $SC-SUB-COLOR-RED-SHADE-01;
  }
  &.orange:active {
    background-color: $SC-SUB-COLOR-ORANGE-SHADE-01;
  }
  &.green:active {
    background-color: $SC-SUB-COLOR-GREEN-SHADE-01;
  }

  /* disabled */
  &.disabled {
    background-color: $SC-COLOR-GRAY-20;
    pointer-events: none; // hover, active not working
    .sd-input-chip-slot {
      color: $SC-COLOR-GRAY-60;
    }
    i svg {
      fill: $SC-COLOR-GRAY-70;
    }
  }
  &:not(.removable, .disabled) {
    i {
      display: none;
    }
  }
}
</style>
