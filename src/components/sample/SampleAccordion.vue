<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box title="Basig Usage">
          <template #description> init-show: 생성시 open 상태로 유지 </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-accordion-wrapper ref="accordion" class="/*w-[800px]*/" @change="onChange">
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
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Events</div>
                  <div class="box">
                    <sc-button @click="openAll">모두 펼치기</sc-button>
                    <sc-button @click="closeAll">모두 닫기</sc-button>
                  </div>
                </div>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">Opened idx list {{ status.opened }}</p>
                    <p class="list">Opened idx list {{ status.closed }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
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
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Single -->
        <sc-sample-box title="Single">
          <template #description> 펼쳐지는 항목이 최대 한개로 제한할 경우 single 속성을 넣어줍니다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-accordion-wrapper ref="accordion2" single>
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
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-accordion-wrapper ref="accordion2" single>
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Single -->
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Props" :idx="2">
        Props
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Slot" :idx="3">
        Slot
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Event" :idx="4">
        Event
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script setup>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
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
const selectedTabId = ref(1);

const openAll = () => {
  accordion.value.openAll();
};
const closeAll = () => {
  accordion.value.closeAll();
};
const onChange = (result) => {
  status.value = { ...result };
};
const onClick = (idx) => {
  selectedTabId.value = idx;
};
</script>