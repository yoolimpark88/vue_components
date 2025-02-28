<template>
  <table :class="['sc-table', 'w-full']">
    <colgroup class="sc-table-colgroup" v-if="slots.colgroup">
      <slot name="colgroup" />
    </colgroup>
    <thead class="sc-table-thead" v-if="slots.thead">
      <slot name="thead" />
    </thead>
    <tbody class="sc-table-tbody">
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
import { useSlots } from 'vue';

export default {
  name: 'ScTable',
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
};
</script>

<style lang="scss">
.sc-table {
  position: relative;
  background: $SC-COLOR-WHITE;
  margin: 4px 0 0 0;
  outline: none;
  font-size: $SC-FONT-SIZE-TYPE2-BODY-2;
  font-weight: $SC-FONT-WEIGHT-TYPE2-BODY-2;
  color: $SC-COLOR-TYPE2-GRAY-100;
  border: 1px solid $SC-COLOR-GRAY-30;
  border-radius: 8px;
  min-width: 453px;
  th {
    color:#575F6E;
    text-align: left;
    font-weight: 400;
    padding: 0 12px;
    height: 42px; // table cell 최소높이
    white-space: nowrap;
    &:hover {
      background: $SC-COLOR-TYPE2-GRAY-50;
    }
  }
  td {
    padding: 6px 12px;
    line-height: 22px;
    border-top: 1px solid $SC-COLOR-GRAY-30;
    height: 42px; // table cell 최소높이
    a {
      color: $SC-PRIMARY-COLOR-TYPE2;
      &:hover {
        color: $SC-SECONDARY-COLOR-TYPE2;
        text-decoration: underline;
      }
    }
  }
  th:first-child,
  td:first-child {
    padding-left:20px;
  }
  th:last-child,
  td:last-child {
    padding-right:20px;
  }
  .sc-table-thead {
    background-color: #F7F7F8;
  }
  .sc-table-tbody {
    background-color: $SC-COLOR-WHITE;
    .tb-empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $SC-COLOR-GRAY-50;
      height: 50px;
      border: none;
    }
  }
}
</style>
