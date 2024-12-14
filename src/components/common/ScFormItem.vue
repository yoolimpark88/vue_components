<template>
  <div class="sc-form-item" :class="{ required: required }" style="customStyle">
    <template v-if="slots.custom">
      <!-- grid-column: 1 / -1; -->
      <div class="custom w-full">
        <slot name="custom"></slot>
      </div>
    </template>
  </div>
</template>