<template>
  <div :class="['sc-multi-dropdown-wrap', { invalid: !isValid, disabled, allCheck, borderless }]">
    <div
      :class="['sc-multi-dropdown sc-item', size, { disabled, allCheck }]"
      @click.stop="toggleDropdown"
      v-out-side-click="handleClickOutside"
    >
      <div class="flex items-center justify-between">
        <div class="selected-item" v-if="searchable">
          <input
            ref="search"
            type="text"
            class="search-input"
            :value="searchText"
            @input="(e) => (searchText = e.target.value)"
            @focus="onSearchFocus(true)"
            @blur="onSearchFocus(false)"
            @keyup="onSearchKeyup"
            @keydown="onSearchKeydown"
            @click="
              () => {
                if (showSearch) {
                  onSearchFocus(false);
                }
              }
            "
            v-show="showSearch"
            :placeholder="selectItemLabel"
          />
          <span v-show="!showSearch">{{ selectItemLabel }}</span>
        </div>
        <div class="selected-item" v-else>{{ selectItemLabel }}</div>

        <div class="icon" :class="{ 'rotate-180': isOpen }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#d2d6dc"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div v-if="isOpen" class="layer z-50" :style="{ maxHeight: `${this.height}px` }">
        <!-- allCheck start -->
        <div
          v-if="allCheck"
          :class="['sc-item', size, 'checkbox-wrap']"
          @click.stop="toggleAllCheck"
        >
          <sc-checkbox v-model="isAllChecked" />
          <span>{{ allCheckLabel }}</span>
        </div>
        <!-- allCheck end -->

        <div
          v-for="(obj, index) in filteredItems"
          :key="index"
          :class="['sc-item', size, 'checkbox-wrap', { hover: searchSelectedIdx === index }]"
          @click.stop="selectItem(obj)"
        >
          <sc-checkbox v-model="obj.checked" @change="selectItem(obj)" />
          <span v-if="searchText.trim() === '' && obj.item">{{ toText(obj.item) }}</span>
          <span v-if="searchText.trim() !== '' && obj.item" v-html="toTextSearch(obj.item)"></span>
        </div>
      </div>
    </div>
    <div v-if="!isValid" class="error">
      <span class="message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useValidation } from '@/hooks/common/useValidation';
import ScCheckbox from '@/components/common/ScCheckbox.vue';

export default {
  name: 'ScMultiDropdown',
  components: { ScCheckbox },
  emits: ['update:modelValue', 'change'],
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '선택',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '200',
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['', 'small', 'medium'].includes(value),
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    multiLabel: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    allCheckLabel: {
      type: String,
      default: '전체 선택',
    },
  },
  setup(props) {
    // modelValue를 ref로 감싸서 반응형으로 만듦
    const valueModel = ref(props.modelValue);
    const { isValid, validate, errorMessage, checkedValidate } = useValidation(
      props.rules,
      valueModel,
    );
    // 부모 컴포넌트로 부터 modelValue의 변화를 감지
    watch(
      () => props.modelValue,
      (newValue) => {
        valueModel.value = newValue;
        if (props.rules.length > 0 && checkedValidate.value && !props.lazy) {
          validate();
        }
      },
    );
    return {
      isValid,
      errorMessage,
      validate,
    };
  },

  methods: {
    toggleAllCheck(e) {
      if (Array.from(e.target.classList).includes('sc-checkbox')) return;
      if (!Array.from(e.target.classList).includes('checkmark')) {
        this.isAllChecked = !this.isAllChecked;
      }
      setTimeout(() => {
        this.checkedList = this.checkedList.map(() => this.isAllChecked);
        this.onChangeCheck();
      });
    },

    resetSearchIndex() {
      this.searchSelectedIdx = -1;
    },
    onSearchFocus(flag) {
      //console.info('onSearchFocus', flag);
      if (flag) {
        this.searchText = '';
        this.resetSearchIndex();
      }
      this.showSearch = flag;
    },
    onSearchEsc() {
      this.onSearchFocus(false);
      this.closeLayer();
    },
    onSearchEnter() {
      // 검색 결과가 하나인 상태
      if (this.filteredItems.length === 1) {
        // this.onClickItem(this.items.indexOf(this.filteredItems[0]));
        this.selectItem(this.filteredItems[0]);
        // this.onSearchFocus(false);
        // this.closeLayer();
      }
      // 키보드로 이동하여 준선택 단계
      else if (this.searchSelectedIdx !== -1) {
        // console.info('TODO onSearchEnter');
        this.selectItem(this.filteredItems[this.searchSelectedIdx]);
        // this.onSearchFocus(false);
      }
    },
    onSearchKeyup(event) {
      // console.info('onSearchKeyup', event);
      switch (event.keyCode) {
        case 13:
          this.onSearchEnter();
          break;
        case 27:
          this.onSearchEsc();
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          // keydown 이벤트에서 처리
          break;
        default:
          this.resetSearchIndex();
          break;
      }
    },
    onSearchKeydown(event) {
      // console.info('onSearchKeydown', event);
      switch (event.keyCode) {
        // 위버튼
        case 37:
        case 38:
          this.searchSelectedIdx = Math.max(this.searchSelectedIdx - 1, 0);
          break;
        // 아래버튼
        case 39:
        case 40:
          this.searchSelectedIdx = Math.min(
            this.searchSelectedIdx + 1,
            this.filteredItems.length - 1,
          );
          break;
        default:
          // this.searchSelectedIdx = -1;
          // setTimeout(() => this.resetSearchIndex, 200);
          break;
      }
    },
    toggleDropdown() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
        if (this.isOpen && this.searchable) {
          this.showSearch = true;
          this.$nextTick(() => {
            this.$refs.search.focus();
          });
        }
      }
    },
    handleClickOutside() {
      this.closeLayer();
    },
    selectItem(obj) {
      if (!obj || !obj.item) return;
      // console.info('selectItem', obj);
      const findVal = Object.hasOwn(obj.item, this.itemValue) ? obj.item[this.itemValue] : obj.item;
      const findIdx = this.items.findIndex((item) => {
        if (Object.hasOwn(item, this.itemValue)) {
          return item[this.itemValue] === findVal;
        }
        return item === findVal;
      });
      this.checkedList[findIdx] = !this.checkedList[findIdx];
      this.onChangeCheck();
    },
    onChangeCheck() {
      const selectedItems = this.items
        .filter((item, index) => this.checkedList[index])
        .map((item) => {
          if (Object.hasOwn(item, this.itemValue)) {
            return item[this.itemValue];
          }
          return item;
        });
      this.$emit('update:modelValue', selectedItems);
      this.$emit('change', selectedItems);
    },
    toText(item) {
      if (!item) return '';
      if (typeof item === 'string') return item;
      if (Object.hasOwn(item, this.itemText)) {
        return item[this.itemText];
      }
      return 'error textKey';
    },
    toTextSearch(item) {
      if (!item) return '';
      const label = this.toText(item);
      const sText = this.searchText.trim();
      const startIdx = label.toLowerCase().indexOf(sText.toLowerCase());
      const endIdx = startIdx + sText.length;

      const labels = label.split('');
      labels.splice(startIdx, 0, '<span class="highlight">');
      labels.splice(endIdx + 1, 0, '</span>');

      return labels.join('');
    },
    updateCheckbox() {
      this.checkedList = this.items.map((item) => {
        if (Object.hasOwn(item, this.itemValue)) {
          return this.modelValue.includes(item[this.itemValue]);
        }
        return this.modelValue.includes(item);
      });
    },
    closeLayer() {
      this.$nextTick(() => {
        this.isOpen = false;
      });
    },
  },

  data() {
    return {
      isOpen: false,
      checkedList: [],
      showSearch: false,
      searchText: '',
      searchSelectedIdx: -1,
      isAllChecked: false,
    };
  },
  computed: {
    filteredItems() {
      let items = this.items;
      return items
        .map((item, idx) => {
          return {
            item: item,
            checked: this.checkedList[idx] || false,
          };
        })
        .filter(({ item }) => {
          if (!item) return false;
          if (this.searchText.trim() !== '') {
            return this.toText(item).toLowerCase().includes(this.searchText.trim().toLowerCase());
          }
          return true;
        });
    },
    selectItemLabel() {
      const selectedItems = this.items.filter((item) => {
        if (Object.hasOwn(item, this.itemValue)) {
          return this.modelValue.includes(item[this.itemValue]);
        }
        return this.modelValue.includes(item);
      });
      if (selectedItems.length === 0) {
        return this.placeholder;
      }
      if (this.multiLabel && selectedItems.length > 1) {
        const item = selectedItems[0];
        const label = Object.hasOwn(item, this.itemText) ? item[this.itemText] : item;
        return `${label} 외 ${selectedItems.length - 1}건`;
      } else {
        return selectedItems
          .map((item) => {
            if (Object.hasOwn(item, this.itemText)) {
              return item[this.itemText];
            }
            return item;
          })
          .join(', ');
      }
    },
  },
  created() {
    this.updateCheckbox();
  },
  watch: {
    modelValue() {
      this.updateCheckbox();
    },
    checkedList: {
      deep: true,
      handler() {
        this.isAllChecked = this.checkedList.every(Boolean);
      },
    },
    items: {
      deep: true,
      handler() {
        this.updateCheckbox();
      },
    },
  },
};
</script>

<style scoped lang="scss">
.sc-multi-dropdown-wrap {
  position: relative;
}
.sc-item {
  padding: 0px 10px;
  color: $SC-COLOR-GRAY-80;
  &.checkbox-wrap {
    display: flex;
    align-items: center;
    line-height: 100% !important;
  }
  &.small {
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;
    min-height: 22px;
  }
  &.medium {
    font-size: 14px;
    line-height: 32px;
    min-height: 32px;
  }
  .search-input {
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  // 검색결과 하이라이트
  :deep(.highlight) {
    background-color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    color: #aee1ff;
  }
}

.sc-multi-dropdown {
  position: relative;
  border: 1px solid $SC-COLOR-GRAY-30;
  cursor: pointer;
  background: $SC-COLOR-WHITE;
  &.borderless,
  &:hover.borderless {
    border: 1px solid transparent;
    background: transparent;
  }
  &:hover {
    border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
  }
  &.disabled {
    cursor: default;
    border: 1px solid $SC-COLOR-GRAY-30 !important;
    border-color: $SC-COLOR-GRAY-30;
    color: $SC-COLOR-GRAY-50;
    background-color: $SC-COLOR-GRAY-10;
    &.borderless {
      border: 1px solid transparent !important;
    }
  }
}

.selected-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.layer {
  position: absolute;
  top: 100%;
  left: -1px;
  border: 1px solid $SC-PRIMARY-COLOR-LIGHT-BLUE;
  background-color: $SC-COLOR-WHITE;
  width: calc(100% + 2px);
  overflow-y: auto; // dropdown의 옵션값들이 모달창 밖에서 보여지지 않는 부분 보완.
  div {
    cursor: pointer;
    &.selected {
      background: $SC-PRIMARY-HOVER-COLOR-BLUE !important;
      color: $SC-COLOR-WHITE !important;
    }
  }
  div:hover,
  div.hover {
    background: #aee1ff;
    color: $SC-COLOR-BLACK;
  }
}

// invalid
.invalid {
  // 애니메이션이 들어가면 z-index가 최상위로 올라가서 아래 애니메이션 제거함.
  .sc-dropdown {
    border-color: $COLOR-STATUS-ERROR;
  }
  .shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .error {
    background-color: $COLOR-STATUS-ERROR;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 4px;
    line-height: 16px;
    .message {
      font-size: 12px;
      color: $SC-COLOR-WHITE;
      padding: 0 4px;
    }
  }
}
</style>
