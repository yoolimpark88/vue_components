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
  font-size: $SC-FONT-SIZE-BODY-1;
  font-weight: 400;
  color: $SC-COLOR-GRAY-80;
  border-top: 1px solid $SC-COLOR-GRAY-40;
  border-bottom: 1px solid $SC-COLOR-GRAY-40;
  min-width: 453px;
  th {
    text-align: center;
    font-weight: 400;
    padding: 0 10px;
    border-right: 1px solid $SC-COLOR-GRAY-30;
    line-height: initial;
    height: 30px; // table cell 최소높이
    background: $SC-GRID-HEADER-COLOR;
    white-space: nowrap;
    &:hover {
      background: $SC-GRID-HEADER-HOVER-COLOR;
    }
  }
  td {
    font-size: $SC-FONT-SIZE-BODY-1;
    font-weight: 300;
    color: $SC-COLOR-GRAY-90;
    padding: 0 10px;
    line-height: 18px;
    border-top: 1px solid $SC-COLOR-GRAY-30;
    border-right: 1px solid $SC-COLOR-GRAY-30;
    height: 25px; // table cell 최소높이
    a {
      color: $SC-PRIMARY-COLOR-BLUE;
      &:hover {
        color: $SC-PRIMARY-COLOR-DEEP-BLUE;
        text-decoration: underline;
      }
    }
  }
  th:last-child,
  td:last-child {
    border-right: 0 none;
  }
  .sc-table-thead {
    background-color: $SC-COLOR-GRAY-10;
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
