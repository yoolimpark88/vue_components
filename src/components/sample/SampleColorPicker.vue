<template>
  <div>
    <sc-sample-box>
      <sc-color-picker v-model="color" @change="onChange" />
      <sc-color-picker v-model="color" @change="onChange" size="medium" />
      <sc-color-picker v-model="color" @change="onChange" size="large" />

      <div class="mt-5 text-sm">결과 : {{ color }}</div>

      <sc-code-highlight
        template='<sc-color-picker v-model="color" @change="onChange" />
<sc-color-picker v-model="color" @change="onChange" size="medium" />
<sc-color-picker v-model="color" @change="onChange" size="large" />

<div class="mt-5 text-sm">결과 : {{ color }}</div>'
        script="export default {
data() {
return {
  color: '#2584da',
};
},
methods: {
onChange(colorCode) {
  console.info('onChange', colorCode);
},
},
};"
      />
    </sc-sample-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScColorPicker from '@/components/common/ScColorPicker.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleColorPicker',
  components: {
    ScCodeHighlight,
    ScColorPicker,
    ScSampleBox,
  },
  data() {
    return {
      color: '#2584da',
    };
  },
  methods: {
    onChange(colorCode) {
      console.info('onChange', colorCode);
    },
  },
};
</script>

<style scoped lang="scss">
.sc-color-picker + .sc-color-picker {
  margin-left: 10px;
}
</style>
