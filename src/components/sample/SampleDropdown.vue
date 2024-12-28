<template>
  <div>
    <sc-sample-box>
      <div class="w-[150px]">
        <sc-dropdown :items="simpleItems" v-model="simpleValue" @change="onChange" />
      </div>
      <div class="w-[150px] mt-5">
        <sc-dropdown :items="simpleItems" v-model="simpleValue" disabled />
      </div>
      <div class="w-[150px] mt-5">
        <sc-dropdown :items="simpleItems" v-model="simpleValue" medium plaveholder="Select!" />
      </div>
      <div class="w-[150px] mt-5">
        <sc-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
      </div>
      <div class="mt-5 text-sm">결과 : {{ simpleValue }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" @change="onChange" />
</div>
<div class="w-[150px] mt-5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" disabled />
</div>
<div class="w-[150px] mt-5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" medium plaveholder="Select!" />
</div>
<div class="w-[150px] mt-5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
</div>
<div class="mt-5 text-sm">결과 : {{ simpleValue }}</div>'
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDropdown from '@/components/common/ScDropdown.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleDropdown',
  components: { ScSampleBox, ScDropdown, ScCodeHighlight },
  methods: {
    onChange(val) {
      console.info('onChange : ', val);
    },
  },
  data() {
    return {
      dfValue1: '',
      dfValue2: '',
      dfValue3: '',
      simpleItems: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'],
      simpleValue: '',
      items: [
        { value: 'dropdown1', text: '드롭다운1' },
        { value: 'dropdown2', text: '드롭다운2' },
        { value: 'dropdown3', text: '드롭다운3' },
        { value: 'dropdown4', text: '드롭다운4' },
        { value: 'dropdown5', text: '드롭다운5' },
      ],
      value: '',
      items2: [
        { code: 'A', name: 'A CODE' },
        { code: 'B', name: 'B CODE' },
        { code: 'C', name: 'C CODE' },
      ],
      value2: '',
      pageItems: [
        { value: '100', text: '100개' },
        { value: '300', text: '300개' },
        { value: '500', text: '500개' },
        { value: '1000', text: '1000개' },
      ],
      pageValue: '100',
    };
  },
};
</script>

<style scoped lang="scss"></style>
