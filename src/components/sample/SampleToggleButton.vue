<template>
  <div>
    <sc-sample-box>
      <sc-switch v-model="value" @change="onChange($event)" />
      <div class="mt-5 text-sm">결과 : {{ value }}</div>
      <sc-code-highlight
        template='<sc-switch v-model="value" @change="onChange($event)" />
<div class="mt-5 text-sm">결과 : {{ value }}</div>'
        script="export default {
          data() {
            return {
              value: false,
            };
          },
          methods: {
            onChange(val) {
              console.info('changed', val)
            }
          }
        }"
      />
    </sc-sample-box>

    <sc-sample-box title="size">
      <div class="flex items-end gap-2">
        <sc-switch v-model="value2" />
        <sc-switch v-model="value2" medium />
        <sc-switch v-model="value2" size="large" />
      </div>
      <div class="mt-5 text-sm">결과 : {{ value2 }}</div>
      <sc-code-highlight
        template='<sc-switch v-model="value2" />
<sc-switch v-model="value2" medium />
<sc-switch v-model="value2" size="large" />'
        script="export default {
          data() {
            return {
              value2: true,
            };
          },
        }"
      />
    </sc-sample-box>

    <sc-sample-box title="disabled">
      <div class="flex items-end gap-2">
        <sc-switch v-model="value3" small disabled />
        <sc-switch v-model="value3" medium disabled />
        <sc-switch v-model="value3" size="large" disabled />
      </div>
      <div class="mt-5 text-sm">결과 : {{ value3 }}</div>
      <sc-code-highlight
        template='<sc-switch v-model="value3" small disabled />
<sc-switch v-model="value3" medium disabled />
<sc-switch v-model="value4" size="large" disabled />'
        script="export default {
          data() {
            return {
              value3: false,
            };
          },
        }"
      />
    </sc-sample-box>

    <sc-sample-box title="labeled">
      <div class="flex items-end gap-2">
        <sc-switch v-model="value3" small labeled />
        <sc-switch v-model="value3" medium labeled />
        <sc-switch v-model="value3" size="large" labeled />
      </div>
      <div class="mt-5 text-sm">결과 : {{ value3 }}</div>
      <sc-code-highlight
        template='<sc-switch v-model="value3" small labeled />
<sc-switch v-model="value3" medium labeled />
<sc-switch v-model="value4" size="large" labeled />'
        script="export default {
          data() {
            return {
              value3: false,
            };
          },
        }"
      />
    </sc-sample-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScSwitch from '@/components/common/ScSwitch.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleToggleButton',
  components: { ScSampleBox, ScSwitch, ScCodeHighlight },
  data() {
    return {
      value: false,
      value2: true,
      value3: false,
    };
  },
  methods: {
    onChange(val) {
      console.info('changed', val);
    },
  },
};
</script>
