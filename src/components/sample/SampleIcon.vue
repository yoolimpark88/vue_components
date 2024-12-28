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

    <sc-sample-box title="Type">
      <template #description>아이콘 종류를 선택합니다.</template>
      <sc-search-box>
        <sc-search-item label="Search">
          <sc-text-field
            medium
            searchable
            clearable
            v-model="searchText"
            placeholder="Search icons..."
          />
        </sc-search-item>
        <sc-search-item label="Color" span="2">
          <div class="flex items-center">
            <sc-radio v-model="isPreset" :value="true">Preset</sc-radio>
            <sc-radio v-model="isPreset" :value="true">Code</sc-radio>
            <sc-dropdown
              :item="colors"
              v-model="color"
              medium
              class="ml-3 w-[200px]"
              :disabled="!isPreset"
            />
            <sc-text-field
              :disabled="isPreset"
              v-model="colorCode"
              class="ml-3 w-[200px]"
              placeholder="#000"
              medium
            />
          </div>
        </sc-search-item>
        <sc-search-item label="Size">
          <div class="flex items-center">
            <sc-radio v-model="size" value="small">small</sc-radio>
            <sc-radio v-model="size" value="medium">medium</sc-radio>
            <sc-radio v-model="size" value="large">large</sc-radio>
          </div>
        </sc-search-item>
      </sc-search-box>
      <div class="mb-5"></div>
      <div class="flex flex-wrap gap-5">
        <div
          class="sc-icon-sample cursor-pointer"
          v-for="icon in filteredIcons"
          :key="icon"
          @click="copyIcon(icon)"
          @mouseleave="resetCopyTooltip(icon)"
        >
          <sc-icon :type="icon" :size="size" :color="calcColor" />
          <span class="icon-name">{{ icon }}</span>
          <div class="copy">
            <div v-if="tooltip[icon]" class="text-amber-400">Copied!</div>
            <div v-else>Copy Icon</div>
          </div>
        </div>
      </div>
    </sc-sample-box>
  </div>
</template>

<script>
import ScIcon from '@/components/common/ScIcon.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScSearchBox from '@/components/common/ScSearchBox.vue';
import ScSearchItem from '@/components/common/ScSearchItem.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleIcon',
  components: {
    ScIcon,
    ScSearchBox,
    ScSearchItem,
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
