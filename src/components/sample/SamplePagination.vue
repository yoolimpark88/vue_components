<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-pagination v-model="page" @change="onPageChange" />
                <div class="w-[250px] inline-grid grid-cols-2 gap-2 mt-[50px]">
                  <div>rowPerPage</div>
                  <sc-text-field v-model.number="page.rowsPerPage" />
                  <div>currentPage</div>
                  <sc-text-field v-model.number="page.currentPage" />
                  <div>totalItems</div>
                  <sc-text-field v-model="page.totalItems" type="number" />
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-pagination v-model="page" @change="onPageChange" />
<div class="w-[250px] inline-grid grid-cols-2 gap-2 mt-[50px]">
  <div>rowPerPage</div>
  <sc-text-field v-model.number="page.rowsPerPage" />
  <div>currentPage</div>
  <sc-text-field v-model.number="page.currentPage" />
  <div>totalItems</div>
  <sc-text-field v-model="page.totalItems" type="number" />
</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
  data() {
    return {
      page: {
        rowsPerPage: 10,
        currentPage: 1,
        totalItems: 12345,
      },
    };
  },
  methods: {
    onPageChange(page) {
      console.info('page 이동, page);
    },
  },
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScPagination from '@/components/common/ScPagination.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SamplePagination',
  components: { ScCodeHighlight, ScSampleBox, ScPagination, ScTextField, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      page: {
        rowPerPage: 10,
        currentPage: 1,
        totalItems: 12345,
      },
    };
  },
  methods: {
    onPageChange(page) {
      console.info('page 이동', page);
    },
  },
};
</script>

<style scoped lang="scss"></style>