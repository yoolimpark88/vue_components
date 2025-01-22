<template>
  <div>
    <sc-sample-box>
      <template #description>type과 color를 지정합니다</template>
      <sc-icon type="star" color="yellow" />
      <sc-icon type="star" color="yellow" />
      <sc-icon type="star" color="yellow" />

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
            <sc-radio v-model="isPreset" :value="false">Code</sc-radio>
            <sc-dropdown
              :items="colors"
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
            <div v-if="tooltips[icon]" class="text-amber-400">Copied!</div>
            <div v-else>Copy Icon</div>
          </div>
        </div>
      </div>
    </sc-sample-box>
  </div>
</template>

<script>
import ScIcon from '@/components/common/ScIcon.vue';
import ScRadio from '@/components/common/ScRadio.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScSearchBox from '@/components/common/ScSearchBox.vue';
import ScSearchItem from '@/components/common/ScSearchItem.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDropdown from '@/components/common/ScDropdown.vue';

export default {
  name: 'SampleIcon',
  components: {
    ScIcon,
    ScRadio,
    ScTextField,
    ScSearchBox,
    ScSearchItem,
    ScSampleBox,
    ScCodeHighlight,
    ScDropdown,
  },
  methods: {
    copyIcon(icon) {
      const text = `<sc-icon type="${icon}" color="${this.calcColor}" size="${this.size}" />`;
      this.$util.copyToClipboard(text);
      this.tooltips[icon] = true;
    },
    resetCopyTooltip(icon) {
      this.tooltips[icon] = false;
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
      tooltips: {},
      icons: [
        'sign_in',
        'sign_out',
        'exclamation-triangle',
        'hand-thumb-up',
        'hand-thumb-down',
        'language',
        'link',
        'cog',
        'lock-closed',
        'lock-open',
        'bookmark',
        'bars-3',
        'bars-4',
        'at-symbol',
        'arrow-up-tray',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down-tray',
        'star',
        'star-line',
        'new-window',
        'x-mark',
        'home',
        'heart',
        'calendar',
        'search',
        'cpu-chip',
        'chevron-up-down',
        'chevron-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-double-up',
        'chevron-double-down',
        'chevron-double-left',
        'chevron-double-right',
        'paper-clip',
        'photo',
        'phone',
        'tag',
        'bell',
        'bell-alert',
        'bell-slash',
        'check',
        'code-bracket',
        'hashtag',
        'information-circle',
        'information-line',
        'x-circle',
        'user',
        'users',
        'trash',
        'radio',
        'radio_select',
        'user_setting',
        'search2',
        'user_add',
        'user_search',
        'tip',
        'plus',
        'minus',
        'new_file',
        'file',
        'zip_file',
        'external',
        'adjustments-h',
        'adjustments-v',
        'fire',
        'share',
        'main_rule',
        'main_rule_01',
        'main_request',
        'main_request_01',
        'main_pccb',
        'main_pccb_01',
        'main_voc',
        'main_voc_01',
        'main_voc_color',
        'main_sr',
        'main_sr_01',
        'main_manual',
        'main_manual_01',
        'detail_view',
        'user_list',
        'search_portal',
        'logout',
        'sitemap',
        'clock',
        'layer_01',
        'warn_01',
        'espec',
        'url_01',
        'url_02',
        'close_01',
        'close_02',
        'mx-btn',
        'rstr-btn',
        'exit',
        'login',
      ],
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
    display: none;
    background: $SC-PRIMARY-COLOR-COOL-GRAY;
    font-size: 12px;
    color: $SC-COLOR-WHITE;
    opacity: 80%;
  }
}
</style>
