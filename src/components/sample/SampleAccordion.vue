<script setup>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScAccordion from '@/components/common/ScAccordion.vue';
import ScAccordionWrapper from '@/components/common/ScAccordionWrapper.vue';
import { ref } from 'vue';

const accordion = ref(null);
const status = ref({
  opened: [],
  closed: [],
});
const openAll = () => {
  accordion.value.openAll();
};
const closeAll = () => {
  accordion.value.closeAll();
};
const onChange = (result) => {
  status.value = { ...result };
};
</script>

<template>
  <div>
    <sc-sample-box>
      <template #description> init-show: 생성시 open 상태로 유지 </template>
      <sc-accordion-wrapper ref="accordion" class="w-[800px]" @change="onChange">
        <sc-accordion title="Item 1" init-show>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit!
        </sc-accordion>
        <sc-accordion title="Item 2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit!
        </sc-accordion>
        <sc-accordion title="Item 3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui
          incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem
          eaque facilis eveniet odit!
        </sc-accordion>
      </sc-accordion-wrapper>

      <div class="mt-5">
        <sc-button @click="openAll">모두 펼치기</sc-button>
        <sc-button @click="closeAll">모두 닫기</sc-button>
        <div class="mt-5 text-sm">Opened idx list {{ status.opened }}</div>
        <div class="mt-5 text-sm">Opened idx list {{ status.closed }}</div>
      </div>

      <sc-code-highlight
        template='<sc-accordion-wrapper ref="accordion" class="w-[800px]" @change="onChange">
  <sc-accordion title="Item 1" init-show>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
  <sc-accordion title="Item 2">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
  <sc-accordion title="Item 3">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
</sc-accordion-wrapper>

<div class="mt-5">
  <sc-button @click="openAll">모두 펼치기</sc-button>
  <sc-button @click="closeAll">모두 닫기</sc-button>
  <div class="mt-5 text-sm">Opened idx list {{ status.opened }}</div>
  <div class="mt-5 text-sm">Opened idx list {{ status.closed }}</div>
</div>'
        script="export default {
  data() {
    return {
      status: {
        opened: [],
        closed: [],
      },
    };
  },
  methods: {
    openAll() {
      this.$refs.accordion.openAll();
    },
    closeAll() {
      this.$refs.accordion.closeAll();
    },
    onChange(result) {
      this.status.value = { ...result };
    },
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="Single">
      <template #description>
        펼쳐지는 항목이 최대 한개로 제한할 경우 single 속성을 넣어줍니다.
      </template>
      <sc-accordion-wrapper ref="accordion2" class="w-[800px]" single>
        <sc-accordion title="Item 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit!
        </sc-accordion>
        <sc-accordion title="Item 2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit!
        </sc-accordion>
        <sc-accordion title="Item 3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos,
          quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus
          ipsum quod similique autem eaque facilis eveniet odit! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui
          incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem
          eaque facilis eveniet odit!
        </sc-accordion>
      </sc-accordion-wrapper>

      <sc-code-highlight
        template='<sc-accordion-wrapper ref="accordion2" class="w-[800px]" single>
  <sc-accordion title="Item 1">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
  <sc-accordion title="Item 2">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
  <sc-accordion title="Item 3">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus quos, quae porro nesciunt qui incidunt maiores, nostrum voluptates aperiam voluptatem, minus ipsum quod similique autem eaque facilis eveniet odit!
  </sc-accordion>
</sc-accordion-wrapper>'
      />
    </sc-sample-box>
  </div>
</template>
