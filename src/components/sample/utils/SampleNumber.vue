<template>
  <div>
    <sc-sample-box>
      <template #description>숫자에 천단위 마다 콤마(,) 추가</template>
      <sc-text-field type="number" v-model="addComma.num1" class="w-[150px]" />
      <div class="text-sm mb-5">결과 : {{ $util.addComma(addComma.num1) }}</div>

      <sc-text-field type="number" v-model="addComma.num2" class="w-[150px]" />
      <div class="text-sm mb-5">결과 : {{ $util.addComma(addComma.num2) }}</div>

      <sc-code-highlight
        template='<sc-text-field type="number" v-model="addComma.num1" class="w-[150px]" />
      <div class="text-sm mb-5">결과 : {{ $util.addComma(addComma.num1) }}</div>

      <sc-text-field type="number" v-model="addComma.num2" class="w-[150px]" />
      <div class="text-sm mb-5">결과 : {{ $util.addComma(addComma.num2) }}</div>'
        script="export default {
          data() {
            return {
              addComma: {
                num1: 1000, // Number,
                num2: '1234567890', // String type Number
              },
            };
          },
        };"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleNumber',
  components: { ScCodeHighlight, ScSampleBox, ScTextField },
  data() {
    return {
      addComma: {
        num1: 1000,
        num2: '1234567890',
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
