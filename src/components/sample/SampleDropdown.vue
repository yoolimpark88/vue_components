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
        <sc-dropdown :items="pageItems" v-model="pageValue" borderless />
      </div>

      <div class="w-[80px] mt-5">
        <sc-dropdown :items="pageItems" v-model="pageValue" small borderless />
      </div>

      <div class="mt-5 text-sm">결과 : {{ pageValue }}</div>

      <sc-code-highlight
        template='<div class="w-[100px]">
  <sc-dropdown :items="pageItems" v-model="pageValue" borderless/>
</div>
<div class="w-[80px] mt-5">
  <sc-dropdown :items="pageItems" v-model="pageValue" small borderless/>
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

    <sc-sample-box title="item 항목이 Object 형태인 경우">
      <template v-slot:description>
        item의 키 값인 value와 라벨 값인 text로 select 영역을 만듭니다.
      </template>
      <div class="w-[150px]">
        <sc-dropdown :items="items" v-model="value" @change="onChange" />
      </div>
      <div class="mt-5 text-sm">결과 : {{ value }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
  <sc-dropdown :items="items" v-model="value" @change="onChange" />
</div>
<div class="mt-5 text-sm">결과 : {{ value }}</div>'
        script="export default {
  date() {
    return {
      items: [
        { value: 'dropdown1', text: '드롭다운1' },
        { value: 'dropdown2', text: '드롭다운2' },
        { value: 'dropdown3', text: '드롭다운3' },
        { value: 'dropdown4', text: '드롭다운4' },
        { value: 'dropdown5', text: '드롭다운5' },
      ],
      value: '',
    };
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="item의 Custom Key 사용">
      <template v-slot:description>
        기본 키값이 아닌 custom하게 Object의 키 값을 지정할 수 있습니다. 아래 예제는 key, code 라벨
        값은 name으로 지정했습니다.
      </template>
      <div class="w-[150px]">
        <sc-dropdown
          :items="items2"
          v-model="value2"
          item-value="code"
          item-text="name"
          @change="onChange"
        />
      </div>
      <div class="mt-5 text-sm">결과 : {{ value2 }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
  <sc-dropdown
    :items="items2"
    v-model="value2"
    item-value="code"
    item-text="name"
    @change="onChange"
  />
</div>
<div class="mt-5 text-sm">결과 : {{ value2 }}</div>'
        script="export default {
  date() {
    return {
      items2: [
        { code: 'A', name: 'A CODE' },
        { code: 'B', name: 'B CODE' },
        { code: 'C', name: 'C CODE' },
      ],
      value2: '',
    };
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="searchable">
      <template v-slot:description>
        <div>:searchable - 선택 가능한 항목을 검색 가능</div>
        <div>- 키보드 Up, Down, Enter키를 이용하여 선택 가능</div>
        <div>- 검색어를 입력하여 조건이 한개인 경우 Enter키로 선택</div>
      </template>
      <div class="w-[150px]">
        <sc-dropdown
          :items="simpleItems"
          v-model="dfValue1"
          searchable
          default-value
          @change="onChange"
        />
      </div>
      <div class="mt-5 text-sm">결과 : {{ dfValue1 }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
  <sc-dropdown
    :items="simpleItems"
    v-model="dfValue1"
    searchable
    default-value
    @change="onChange"
  />
</div>
<div class="mt-5 text-sm">결과 : {{ dfValue1 }}</div>'
        script="export default {
  date() {
    return {
      simpleItems: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'],
      dfValue1: '',
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
