<template>
  <div>
    <sc-sample-box>
      <sc-pagination v-model="page" @change="onPageChange" />
      <div class="w-[250px] inline-grid grid-cols-2 gap-2 mt-[50px]">
        <div>rowPerPage</div>
        <sc-text-field v-model.number="page.rowsPerPage" />
        <div>currentPage</div>
        <sc-text-field v-model.number="page.currentPage" />
        <div>totalItems</div>
        <sc-text-field v-model="page.totalItems" type="number" />
      </div>

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
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScPagination from '@/components/common/ScPagination.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScTextField from '../common/ScTextField.vue';

export default {
  name: 'SamplePagination',
  components: { ScCodeHighlight, ScSampleBox, ScPagination, ScTextField },
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
