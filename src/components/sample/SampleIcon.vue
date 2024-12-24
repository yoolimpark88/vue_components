<template>
  <div>
    <sc-sample-box>
      <template #description>type과 color를 지정합니다</template>
      <sc-icon type="star_01" color="yellow" />
      <sc-icon type="star_01" color="yellow" />
      <sc-icon type="star_01" color="yellow" />

      <sc-code-highlight
        template='<sc-icon type="star" color="yellow" />
<sc-icon type="star" color="yellow" />
<sc-icon type="star" color="yellow" />'
      />
    </sc-sample-box>

    <!--<sc-sample-box title="Type">
      <template #description>아이콘 종류를 선택합니다.</template>
      <sc-search-box></sc-search-box>
    </sc-sample-box>-->
  </div>
</template>

<script>
import ScIcon from '@/components/common/ScIcon.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleIcon',
  components: {
    ScIcon,
    ScSampleBox,
    ScCodeHighlight,
  },
  methods: {
    copyIcon(icon) {
      const text = `<sc-icon type="${icon}" color="${this.calcColor}" size="${this.size}" />`;
      this.$util.copyToClipboard(text);
      this.tooltip[icon] = true;
    },
    resetCopyTooltip(icon) {
      this.tooltip[icon] = false;
    },
  },
  computed: {
    calcColor() {
      return this.isPreset ? this.color : this.colorCode;
    },
    filteredIcons() {
      return this.icons
        .filter((icon) => icon.includes(this.searchText.trim()))
        .sort((a, b) => a.localeCompare(b));
    },
  },
  data() {
    return {
      searchText: '',
      isPreset: true,
      size: 'medium',
      colors: ['blue', 'light-blue', 'dark-gray'],
      color: 'dark-gray',
      colorCode: '#17B675',
      tooltip: {},
      icons: ['star_01'],
    };
  },
};
</script>

<style scoped lang="scss">
.sc-icon-sample {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 130px;
  height: 130px;
  border-radius: 5px;
  border: 1px solid $SC-COLOR-GRAY-20;
  span.icon-name {
    font-size: 12px;
    padding: 0 5px;
    word-break: break-all;
  }
  &:hover .copy {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copy {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: $SC-PRIMARY-COLOR-COOL-GRAY;
    font-size: 12px;
    color: $SC-COLOR-WHITE;
    opacity: 80%;
  }
}
</style>
