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
      <path
        v-if="type === 'x-circle'"
        fill-rule="evenodd"
        transform="scale(1)"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clip-rule="evenodd"
      />
      <path
        v-if="type === 'bell'"
        fill-rule="evenodd"
        transform="scale(1)"
        d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
        clip-rule="evenodd"
      />

      <g v-if="type === 'mx-btn'" transform="scale(.4)">
        <path
          d="M46.3,49H3.7c-1,0-1.9-0.8-1.9-1.9V2.8c0-1,0.8-1.9,1.9-1.9h42.6c1,0,1.9,0.8,1.9,1.9v44.4C48.2,48.2,47.3,49,46.3,49z
 M5.5,45.3h38.9V4.7H5.5V45.3z"
        />
      </g>
      <g v-if="type === 'rstr-btn'" transform="scale(.4)">
        <path
          d="M47.3,1H12.8c-1,0-1.9,0.8-1.9,1.9v8.1H2.7c-1,0-1.9,0.8-1.9,1.9v34.4c0,1,0.8,1.9,1.9,1.9h34.4c1,0,1.9-0.8,1.9-1.9v-8.1
h8.2c1,0,1.9-0.8,1.9-1.9V2.8C49.1,1.8,48.3,1,47.3,1z M35.3,45.3H4.6V14.6h8.2h22.4v22.6V45.3z M45.4,35.4H39V12.8
c0-1-0.8-1.9-1.9-1.9H14.7V4.7h30.7V35.4z"
        />
      </g>
      <g v-if="type === 'close_01'" transform="scale(.4)">
        <path
          d="M28.3,25L48.8,4.5c0.9-0.9,0.9-2.4,0-3.3c-0.9-0.9-2.4-0.9-3.3,0L25,21.7L4.5,1.2c-0.9-0.9-2.4-0.9-3.3,0
c-0.9,0.9-0.9,2.4,0,3.3L21.7,25L1.2,45.5c-0.9,0.9-0.9,2.4,0,3.3c0.5,0.5,1,0.7,1.6,0.7s1.2-0.2,1.6-0.7L25,28.3l20.5,20.5
c0.5,0.5,1,0.7,1.6,0.7s1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.4,0-3.3L28.3,25z"
        />
      </g>
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
