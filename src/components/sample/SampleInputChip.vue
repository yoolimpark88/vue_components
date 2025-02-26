<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>기본</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary">primary chip</sc-input-chip>
                <sc-input-chip color="point">point chip</sc-input-chip>
                <sc-input-chip>default chip</sc-input-chip>
                <sc-input-chip color="red">red chip</sc-input-chip>
                <sc-input-chip color="orange">orange chip</sc-input-chip>
                <sc-input-chip color="green">green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip color="primary">primary chip</sc-input-chip>
<sc-input-chip color="point">point chip</sc-input-chip>
<sc-input-chip>default chip</sc-input-chip>
<sc-input-chip color="red">red chip</sc-input-chip>
<sc-input-chip color="orange">orange chip</sc-input-chip>
<sc-input-chip color="green">green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Size -->
        <sc-sample-box title="Size">
          <template #description>small, medium (기본값은 small)</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary">primary chip</sc-input-chip>
                <sc-input-chip color="point">point chip</sc-input-chip>
                <sc-input-chip>default chip</sc-input-chip>
                <sc-input-chip color="red">red chip</sc-input-chip>
                <sc-input-chip color="orange">orange chip</sc-input-chip>
                <sc-input-chip color="green">green chip</sc-input-chip>
                <sc-input-chip color="primary" size="medium">primary chip</sc-input-chip>
                <sc-input-chip color="point" size="medium">point chip</sc-input-chip>
                <sc-input-chip size="medium">default chip</sc-input-chip>
                <sc-input-chip color="red" size="medium">red chip</sc-input-chip>
                <sc-input-chip color="orange" size="medium">orange chip</sc-input-chip>
                <sc-input-chip color="green" size="medium">green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='
[ small ]
<sc-input-chip color="primary">primary chip</sc-input-chip>
<sc-input-chip color="point">point chip</sc-input-chip>
<sc-input-chip>default chip</sc-input-chip>
<sc-input-chip color="red">red chip</sc-input-chip>
<sc-input-chip color="orange">orange chip</sc-input-chip>
<sc-input-chip color="green">green chip</sc-input-chip>
[ medium ]
<sc-input-chip color="primary" size="medium">primary chip</sc-input-chip>
<sc-input-chip color="point" size="medium">point chip</sc-input-chip>
<sc-input-chip size="medium">default chip</sc-input-chip>
<sc-input-chip color="red" size="medium">red chip</sc-input-chip>
<sc-input-chip color="orange" size="medium">orange chip</sc-input-chip>
<sc-input-chip color="green" size="medium">green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Size -->
        <!-- disabled -->
        <sc-sample-box title="Disabled">
          <template #description>비활성화</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
                <sc-input-chip color="point" disabled>point chip</sc-input-chip>
                <sc-input-chip disabled>default chip</sc-input-chip>
                <sc-input-chip color="red" disabled>red chip</sc-input-chip>
                <sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
                <sc-input-chip color="green" disabled>green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
<sc-input-chip color="point" disabled>point chip</sc-input-chip>
<sc-input-chip disabled>default chip</sc-input-chip>
<sc-input-chip color="red" disabled>red chip</sc-input-chip>
<sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
<sc-input-chip color="green" disabled>green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //disabled -->
        <!-- removable -->
        <sc-sample-box title="Removable">
          <template #description>삭제버튼 @click-delete</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip
                  removable
                  v-for="(item, idx) in chips"
                  :key="idx"
                  :color="item.color"
                  :item="item"
                  @click-delete="onDeleteClick"
                >
                  {{ item.value }}
                </sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip
    removable
    v-for="(item, idx) in chips"
    :key="idx"
    :color="item.color"
    :item="item"
    @click-delete="onDeleteClick"
    >
    {{ item.value }}
    </sc-input-chip>'
            />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
    data() {
      return {
        chips: [
          { color: 'primary', value: 'primary chip' },
          { color: 'point', value: 'point chip' },
          { color: '', value: 'default chip' },
          { color: 'red', value: 'red chip' },
          { color: 'orange', value: 'orange chip' },
          { color: 'green', value: 'green chip' },
        ],
      };
    },
    methods: {
      onDeleteClick(item) {
        this.chips = this.chips.filter((chip) => item !== chip);
      },
    },
    };"
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //removable -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScInputChip from '@/components/common/ScInputChip.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleInputChip',
  components: { ScCodeHighlight, ScInputChip, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      chips: [
        { color: 'primary', value: 'primary chip' },
        { color: 'point', value: 'point chip' },
        { color: '', value: 'default chip' },
        { color: 'red', value: 'red chip' },
        { color: 'orange', value: 'orange chip' },
        { color: 'green', value: 'green chip' },
      ],
    };
  },
  methods: {
    onDeleteClick(item) {
      this.chips = this.chips.filter((chip) => item !== chip);
    },
  },
};
</script>

<style scoped lang="scss"></style>
