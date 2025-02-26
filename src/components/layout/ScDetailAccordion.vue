<template>
  <div class="sc-detail-accordion-item" :class="[{ disabled: disabled }]">
    <!-- 타이틀 -->
    <div class="custom-title" v-if="slots.title">
      <slot name="title" :toggle="toggle" :isOpen="isOpen" :close="close" :open="open" />
    </div>
    <div class="title-wrapper" @click="toggle">
      <div class="title" :class="[{'active': isOpen}]">{{ title }}</div>
      <div class="close cursor-pointer">
        <sc-icon :type="!isOpen ? 'chevron-down' : 'chevron-up'" color="dark-gray" size="medium" />
      </div>
    </div>
    <div :class="['content', { 'slide-show': isOpen, 'slide-hide': !isOpen }]">
      <slot :toggle="toggle" :isOpen="isOpen">
        <div v-if="slots.demodescription" class="demo-description-box">
          <div class="demo-area">
            <div class="demo-preview">
              <slot name="demo"></slot>
            </div>
          </div>
          <div class="demo-description">
            <slot name="demodescription"></slot>
          </div>
        </div>
        <div v-if="!slots.demodescription && slots.demo" class="demo-description-box">
          <div class="demo-area once">
            <div class="demo-preview">
              <slot name="demo"></slot>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { inject, useSlots } from 'vue';
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScDetailAccordion',
  components: { ScIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    initShow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: {
    addAccordionItem: {
      default: () => {},
    },
  },
  setup() {
    const slots = useSlots();
    const { addAccordionItem, openItem, onChange } = inject('accordionWrapper');
    return {
      slots,
      addAccordionItem,
      openItem,
      onChange,
    };
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    // 아코디언 열기/닫기 토글
    toggle() {
      if (!this.isOpen) {
        this.openItem(this);
      }
      setTimeout(() => {
        this.isOpen = !this.isOpen;
        this.onChange();
      }, 50);
    },
    // 아코디언 열기
    open() {
      this.openItem(this);
      this.isOpen = true;
      this.onChange();
    },
    // 아코디언 닫기
    close() {
      this.isOpen = false;
      this.onChange();
    },
    // content div 내부에 table 태그가 있는지 확인
    checkForTable() {
      // 변경된 부분 시작
      const contentDiv = this.$el.querySelector('.sc-accordion-item > .content.slide-hide');
      console.log(contentDiv);
      setTimeout(() => {
        if (contentDiv && contentDiv.querySelector('.sc-table')) {
          this.isOpen = true;
        }
      }, 500);
    }, // 변경된 부분 끝
  },
  // 컴포넌트 생성 시 initShow 값으로 초기화
  created() {
    this.isOpen = this.initShow;
  },
  // 컴포넌트가 DOM에 마운트된 후 아코디언 아이템 추가 및 table 태그 확인
  mounted() {
    this.addAccordionItem(this);
    this.checkForTable();
  },
};
</script>

<style scoped lang="scss">
.sc-detail-accordion-item {  
  border-width: 1px 1px 0;
  border-style: solid;
  border-color: $SC-COLOR-TYPE2-GRAY-50;
  .title-wrapper {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 46px;
    justify-content: space-between;
    padding:16px;
    .title {
      font-size: 16px;
      font-weight: 400;
      color: $SC-COLOR-TYPE2-GRAY-80;
      &.active {
        color: $SC-PRIMARY-COLOR-TYPE2;
        font-weight: 700;
      }
    }
    .close {
      height: 20px;
    }
  }
  .content {
    border-top: 1px solid $SC-COLOR-TYPE2-GRAY-50;
    font-size: 14px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    &.slide-show {
      // max-height: 100vh;
      max-height: 100%;
      text-align: left;
      transition: max-height 0.5s ease-in-out;
    }
    &.slide-hide {
      max-height: 0;
      transition: max-height 0.1s cubic-bezier(0, 1, 0, 1);
      border-top:0;
    }
    .demo-description-box {
      display: flex;
      .demo-area {
        width: 70%;
        background: #FAFBFD;
        text-align: center;
        border-bottom-left-radius: 8px;
        .demo-preview {
          width: calc(100% - 68px);
          height: calc(100% - 68px);
          background: $SC-COLOR-TYPE2-WHITE;
          border-radius: 8px;
          box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
          margin: 34px;
          padding: 50px;
          text-align: left;
        }
        &.once {
          width: 100%;
        }
      }
      .demo-description {
        width: 30%;
        padding:30px;
        border-left: 1px solid $SC-COLOR-TYPE2-GRAY-50;
      }
    }
  }
  &.disabled {
    background: $SC-COLOR-GRAY-10;
    opacity: 0.6;
    cursor: not-allowed;
    .title-wrapper {
      cursor: not-allowed;
      pointer-events: none;
      .sc-icon {
        display: none;
      }
    }
    .content.slide-hide {
      cursor: not-allowed;
    }
  }
  &:last-child {
    border-bottom-width: 1px;
  }
}
</style>
