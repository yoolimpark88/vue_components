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
        script="export default {
  methods: {
    onChange(val) {
      console.info('onChange', val);
    },
  },
  data() {
    return {
      simpleItems: ['Utility-First Foundamentals', 'Hover, Focus, and Other States', 'Responsive Design', 'Dark Mode', 'Reusing Styles'],
      simpleValue: '',
    };
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="defaultValue 기본값 option 추가">
      <template #description>
        검색조건에서 dropdown 사용시 ALL 이라고 기본값을 따로 설정하고 있었음. 그리고
        전체검색값으로는 빈값으로 사용. 그래서 dafault-value 값을 ''로 설정하면 위와 같은 항목을
        만들어주는 역할.
      </template>
      <div class="w-[150px]">
        <!-- option에 'ALL' 옵션이 생김. value는 '' 빈값String -->
        <sc-dropdown :items="simpleItems" v-model="dfValue1" placeholder="ALL" default-value />
      </div>
      <div class="mt-5 text-sm">결과 : {{ dfValue1 }}</div>

      <div class="w-[150px] mt-5">
        <!-- option에 '전체' 옵션이 생김. value는 'all' -->
        <sc-dropdown :items="items" v-model="dfValue2" placeholder="전체" default-value="all" />
      </div>
      <div class="mt-5 text-sm">결과 : {{ dfValue2 }}</div>

      <sc-code-highlight
        template='<!-- option에 "ALL" 옵션이 생김. value는 "" 빈값String -->
<sc-dropdown :items="simpleItems" v-model="dfValue1" placeholder="ALL" default-value />
<div class="mt-5 text-sm">결과 : {{ dfValue1 }}</div>
<!-- option에 "전체" 옵션이 생김. value는 "all" -->
<sc-dropdown :items="items" v-model="dfValue2" placeholder="전체" default-value="all" />
<div class="mt-5 text-sm">결과 : {{ dfValue2 }}</div>'
      />
    </sc-sample-box>

    <sc-sample-box title="borderless">
      <template v-slot:description>테두리 없애기</template>
      <div class="w-[100px]">
        <sc-dropdown :items="pageItems" v-model="pageValue" boderless />
      </div>

      <div class="w-[80px] mt-5">
        <sc-dropdown :items="pageItems" v-model="pageValue" small boderless />
      </div>

      <div class="mt-5 text-sm">결과 : {{ pageValue }}</div>

      <sc-code-highlight
        template='<div class="w-[100px]">
  <sc-dropdown :items="pageItems" v-model="pageValue" boderless/>
</div>
<div class="w-[80px] mt-5">
  <sc-dropdown :items="pageItems" v-model="pageValue" small boderless/>
</div>
<div class="mt-5 text-sm">결과 : {{ pageValue }}</div>'
        script="export default {
  date() {
    return {
      pageItems: [
        { value: '100', text: '100개' },
        { value: '300', text: '300개' },
        { value: '500', text: '500개' },
        { value: '1000', text: '1000개' },
      ],
      pageValue: '100',
    };
  },
};"
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
