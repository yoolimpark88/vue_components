<template>
  <div class="sc-accordion-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import { computed } from 'vue';

export default {
  name: 'ScAccordionWrapper',
  emits: ['change'],
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { single } = computed(() => props);
    const items = ref([]);
    const addAccordionItem = (item) => {
      items.value.push(item);
    };
    const onChange = () => {
      const arr = items.value;
      emit('change', {
        opened: arr.filter((item) => item.isOpen === true).map((item) => arr.indexOf(item)),
        closed: arr.filter((item) => item.isOpen !== true).map((item) => arr.indexOf(item)),
      });
    };
    const openItem = (accordionItem) => {
      if (single) {
        items.value.filter((item) => item !== accordionItem).forEach((item) => item.close());
      }
    };
    provide('accordionWrapper', {
      addAccordionItem,
      openItem,
      onChange,
    });
    return {
      items,
      onChange,
    };
  },
  methods: {
    openAll() {
      this.items.forEach((item) => item.open());
    },
    closeAll() {
      this.items.forEach((item) => item.close());
    },
  },
  mounted() {
    this.onChange();
  },
};
</script>

<style scoped lang="scss">
.sc-accordion-wrapper {
  :deep(> :nth-child(n + 2)) {
    margin-top: 10px;
  }
}
</style>
