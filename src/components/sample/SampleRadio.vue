<template>
  <div class="">
    <sc-sample-box>
      <div>
        <sc-radio v-model="value" :value="true">True</sc-radio>
        <sc-radio v-model="value" :value="false">False</sc-radio>
      </div>
      <div class="mt-5">
        <sc-radio v-model="value" :value="true" disabled>True</sc-radio>
        <sc-radio v-model="value" :value="false" disabled>False</sc-radio>
      </div>
      <div class="mt-5">
        <sc-radio v-model="value" :value="true" medium>True</sc-radio>
        <sc-radio v-model="value" :value="false" size="medium">False</sc-radio>
      </div>
      <div class="mt-5">
        <sc-radio v-model="value" :value="true" medium disabled>True</sc-radio>
        <sc-radio v-model="value" :value="false" size="medium" disabled>False</sc-radio>
      </div>
      <div class="text-sm mt-5">결과 : {{ value }}</div>

      <sc-code-highlight
        template='<div>
  <sc-radio v-model="value" :value="true">True</sc-radio>
  <sc-radio v-model="value" :value="false">False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" disabled>True</sc-radio>
  <sc-radio v-model="value" :value="false" disabled>False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" medium>True</sc-radio>
  <sc-radio v-model="value" :value="false" size="medium">False</sc-radio>
</div>
<div class="mt-5">
  <sc-radio v-model="value" :value="true" medium disabled>True</sc-radio>
  <sc-radio v-model="value" :value="false" size="medium" disabled>False</sc-radio>
</div>
<div class="text-sm mt-5">결과 : {{ value }}</div>'
        script="data() {
  return {
    value: false,
  };
},"
      />
    </sc-sample-box>

    <sc-sample-box>
      <div>
        <sc-radio
          v-for="item in items"
          :key="item.value"
          v-model="value2"
          :value="item.value"
          size="samll"
        >
          {{ item.text }}
        </sc-radio>
      </div>
      <div class="text-sm mt-5">결과 : {{ value2 }}</div>
      <sc-code-highlight
        template='<div>
  <sc-radio
    v-for="item in items"
    :key="item.value"
    v-model="value2"
    :value="item.value"
    size="samll"
  >
    {{ item.text }}
  </sc-radio>
</div>'
        script="data() {
  return {
    items: [
      { value: 'VUE1', text: 'value_01' },
      { value: 'VUE2', text: 'value_02' },
      { value: 'VUE3', text: 'value_03' },
      { value: 'VUE4', text: 'value_04' },
    ],
    value2: '',
  };
},"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScRadio from '@/components/common/ScRadio.vue';

export default {
  name: 'SampleRadio',
  components: { ScCodeHighlight, ScRadio, ScSampleBox },
  data() {
    return {
      value: false,
      items: [
        { value: 'VUE1', text: 'value_01' },
        { value: 'VUE2', text: 'value_02' },
        { value: 'VUE3', text: 'value_03' },
        { value: 'VUE4', text: 'value_04' },
      ],
      value2: '',
    };
  },
};
</script>
