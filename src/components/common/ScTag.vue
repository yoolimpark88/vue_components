<template>
  <div :class="['sc-tag', size, color]" ref="tag" :style="customStyle">
    {{ value }}
    <div class="close" v-if="closeBtn" @click="onClose">
      <sc-icon type="x-circle" :color="buttonColor" :custom-size="iconSize" />
    </div>
  </div>
</template>

<script>
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScTag',
  components: { ScIcon },
  emits: ['click', 'close'],
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'light',
    },
    closeBtn: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
  data() {
    return {
      buttonColor: 'cool-gray',
    };
  },
  computed: {
    backgroundColor() {
      return window.getComputedStyle(this.$refs.tag).backgroundColor;
    },
    iconSize() {
      if (this.size === 'medium') {
        return 20;
      } else if (this.size === 'large') {
        return 24;
      }
      return 17;
    },
    customStyle() {
      const css = {};
      if (this.color.startsWith('#')) {
        css.backgroundColor = this.color;
        css.color = this.getFontCode(this.color) ? 'hsl(0deg, 0%, 29%)' : 'white';
      }
      return css;
    },
  },
  methods: {
    onClose() {
      this.$emit('close', this.value);
    },
    getFontCode(hex) {
      const hexCode = hex.charAt(0) === '#' ? hex.slice(1, 7) : hex;
      const hexR = parseInt(hexCode.slice(0, 2), 16);
      const hexG = parseInt(hexCode.slice(2, 4), 16);
      const hexB = parseInt(hexCode.slice(4, 6), 16);
      const contrastRatio = (hexR + hexG + hexB) / (255 * 3);
      return contrastRatio >= 0.5;
    },
    /**
     * 색상코드 더하거나 빼기
     * @param hexColor
     * @param magnitude 가중치 +면 밝아짐, -면 어두워짐
     * @returns {*|string}
     */
    newShade(hexColor, magnitude) {
      hexColor = hexColor.replace(`#`, ``);
      if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
      } else {
        return hexColor;
      }
    },
    toColorToHex(color) {
      const hexadecimal = color.toString(16);
      return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
    },
    convertRGBtoHex(rgb) {
      const [r, g, b] = rgb.replace('rgb(', '').replace(')', '').split(',').map(Number);
      return '#' + this.toColorToHex(r) + this.toColorToHex(g) + this.toColorToHex(b);
    },
  },
  mounted() {
    if (this.closeBtn) {
      this.buttonColor = this.newShade(this.convertRGBtoHex(this.backgroundColor), -80);
    }
  },
};
</script>

<style scoped lang="scss">
.sc-tag {
  align-items: center;
  background-color: hsl(0deg, 0%, 93%);
  border-radius: 0.375em;
  color: hsl(0deg, 0%, 29%);
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding: 0 0.75rem;
  white-space: nowrap;
  margin: 0 8px 8px 0;
  user-select: none;
  // size 속성
  &.medium {
    border-radius: 0.375em;
    font-size: 0.9rem;
    height: 2.1em;
    line-height: 1.8;
    padding: 0 0.7em;
  }
  &.large {
    border-radius: 0.5em;
    font-size: 1.1rem;
    height: 2.2em;
    line-height: 2.2;
    padding: 0 1em;
  }
  // color 속성
  &.black {
    background-color: $SC-COLOR-BLACK;
    color: $SC-COLOR-WHITE;
  }
  &.dark {
    background-color: $SC-COLOR-GRAY-90;
    color: $SC-COLOR-WHITE;
  }
  &.green {
    background-color: $SC-PRIMARY-COLOR-GREEN;
    color: $SC-COLOR-WHITE;
  }
  &.red {
    background-color: $SC-PRIMARY-COLOR-RED;
    color: $SC-COLOR-WHITE;
  }
  &.yellow {
    background-color: $SC-PRIMARY-COLOR-YELLOW;
    color: $SC-COLOR-WHITE;
  }
  &.blue {
    background-color: $SC-PRIMARY-COLOR-BLUE;
    color: $SC-COLOR-WHITE;
  }
}
.close {
  display: flex;
  cursor: pointer;
  margin: 0 0 0 10px;
  &:hover {
    opacity: 0.8;
  }
}
</style>
