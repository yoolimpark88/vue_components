<script setup>
import { provide, ref, defineExpose } from "vue";

const validators = ref([]);
const clearList = ref([]);

provide("addValidator", (validator, clear) => {
  validators.value.push(validator);
  clearList.value.push(clear);
});

const validateAll = () => {
  console.info("run validateAll", validators.value.length);
  const resultArray = validators.value.map((validator) => validator());
  console.info("validation result : ", resultArray);
  return !resultArray.includes(false);
};

const clearAll = () => {
  clearList.value.forEach((clear) => clear());
};

// 외부에서 이 함수를 사용할 수 있도록 expose
defineExpose({ validateAll, clearAll });
</script>

<template>
  <slot></slot>
</template>

<style scoped lang="scss"></style>
