<template>
  <div class="sc-scroll-spy-wrap" ref="spyContainer" :style="calcHeight">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from 'vue';

export default {
  name: 'ScScrollSpy',
  emits: ['change'],
  props: {
    height: {
      type: [Number, String],
      default: 500,
    },
  },
  computed: {
    calcHeight() {
      return {
        height: `${this.height}px`,
      };
    },
  },
  setup(props, { emit }) {
    const spyContainer = ref(null);
    const activeSection = ref(null);

    watch(activeSection, (newId) => {
      emit('change', newId);
    });

    const onScroll = () => {
      const sections = spyContainer.value.querySelectorAll('.sc-scroll-section');
      // 스크롤 현재 위치
      const scrollPosition = spyContainer.value.scrollTop;

      // 섹션별 높이
      const sectionHeightList = [];
      // 스크롤 위치 임계선
      const sectionAccHeightList = [];
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const offsetHeight = section.offsetHeight;
        sectionHeightList.push(offsetHeight);
        if (i === 0) {
          sectionAccHeightList.push(offsetHeight / 2);
        } else {
          const sum = sectionHeightList.slice(0, i).reduce((a, b) => a + b, 0);
          sectionAccHeightList.push(sum + offsetHeight / 2);
        }
      }
      const idx = sectionAccHeightList.findIndex((item) => scrollPosition < item);
      if (idx !== -1) {
        activeSection.value = sections[idx].id;
      }
    };
    onMounted(() => {
      if (spyContainer.value) {
        spyContainer.value.addEventListener('scroll', onScroll);
        // 최초 한번 세팅
        onScroll();
      }
    });
    onUnmounted(() => {
      if (spyContainer.value) {
        spyContainer.value.removeEventListener('scroll', onScroll);
      }
    });
    return {
      spyContainer,
      activeSection,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const sections = this.$refs.spyContainer.querySelectorAll('.sc-scroll-section');
      let position = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.id === sectionId) {
          position = [...sections].slice(0, i).reduce((a, b) => a + b.offsetHeight, 0);
          break;
        }
      }
      this.$refs.spyContainer.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.sc-scroll-spy-wrap {
  overflow-y: auto;
}
</style>
