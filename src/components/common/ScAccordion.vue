<template>
  <div class="sc-accordion-item" :class="[{ disabled: disabled }]">
    <!-- 타이틀 -->
    <div class="custom-title" v-if="slots.title">
      <slot name="title" :toggle="toggle" :isOpen="isOpen" :close="close" :open="open" />
    </div>
    <div class="title-wrapper" @click="toggle">
      <div class="title">{{ title }}</div>
      <div class="close cursor-pointer">
        <sc-icon :type="!isOpen ? 'plus' : 'minus'" color="dark-gray" size="medium" />
      </div>
    </div>
    <div :class="['content', { 'slide-show': isOpen, 'slide-hide': !isOpen }]">
      <slot :toggle="toggle" :isOpen="isOpen"></slot>
    </div>
  </div>
</template>

<script>
import { inject, useSlots } from 'vue';
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScAccordion',
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
.sc-accordion-item {
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 30px;
    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .close {
      height: 20px;
    }
  }
  .content {
    font-size: 14px;
    margin-top: 10px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    &.slide-show {
      max-height: 100vh;
      transition: max-height 0.5s ease-in-out;
    }
    &.slide-hide {
      max-height: 0;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
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
}
</style>
