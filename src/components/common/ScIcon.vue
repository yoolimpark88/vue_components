<template>
  <i class="sc-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      :class="[type, size, `fill-${color}`]"
      :style="[colorCode, sizeStyle]"
    >
      <path
        v-if="type === 'star'"
        fill-rule="evenodd"
        transform="scale(1)"
        d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
      />
      <path
        v-if="type === 'chevron-right'"
        fill-rule="evenodd"
        transform="scale(1)"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clip-rule="evenodd"
      />
      <path
        v-if="type === 'chevron-left'"
        fill-rule="evenodd"
        transform="scale(1)"
        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
        clip-rule="evenodd"
      />
    </svg>
  </i>
</template>

<script>
export default {
  name: 'ScIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    customSize: {
      type: [String, Number],
    },
    color: {
      type: String,
      default: 'dark-gray',
      validator: (value) =>
        ['', 'blue', 'light-blue', 'yellow', 'dark-gray', 'white', 'black'].includes(value) ||
        value.startsWith('#'),
    },
  },
  computed: {
    colorCode() {
      if (this.color.startsWith('#')) {
        return {
          fill: this.color,
        };
      }
      return {};
    },
    sizeStyle() {
      if (this.customSize) {
        return {
          width: `${this.customSize}px`,
          height: `${this.customSize}px`,
        };
      }
      return {};
    },
  },
};
</script>

<style scoped lang="scss">
.sc-icon {
  display: inline-block;
}

$colors: (
  'blue': $SC-PRIMARY-COLOR-BLUE,
  'yellow': $SC-PRIMARY-COLOR-YELLOW,
  'light-blue': $SC-PRIMARY-COLOR-LIGHT-BLUE,
  'dark-gray': $SC-PRIMARY-COLOR-DARK-GRAY,
);

svg {
  @each $name, $color in $colors {
    &.fill-#{$name} {
      fill: $color;
    }
  }
  &.small {
    width: 16px;
    height: 16px;
  }
  &.medium {
    width: 20px;
    height: 20px;
  }
  &.large {
    width: 32px;
    height: 32px;
  }
  path {
    &.scale90 {
      transform: scale(0.9);
    }
    &.scale65 {
      transform: scale(0.65);
    }
  }
}
.st0 {
  fill: $SC-COLOR-WHITE;
  stroke: $SC-COLOR-BLACK;
}
.st1 {
  fill: $SC-COLOR-BLACK;
}
.st2 {
  fill: none;
  stroke: $SC-COLOR-BLACK;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.cls-1 {
  fill: none;
  stroke: $SC-COLOR-BLACK;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}
</style>
