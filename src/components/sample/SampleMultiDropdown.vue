<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="flex">
                  <sc-multi-dropdown
                    class="w-[120px]"
                    :items="simpleItems"
                    v-model="simpleValue"
                    @change="onChange"
                  />
                  <div class="flex ml-5 items-center">
                    <sc-icon type="information-circle" color="dark-gray" size="small" />
                    <div class="ml-1 text-sm">
                      placeholder영역 checked 된 Item 나열. (텍스트가 넘치는 경우 text-overflow: ellipsis;)
                    </div>
                  </div>
                </div>
                <div class="mt-5 flex">
                  <sc-multi-dropdown
                    class="w-[120px]"
                    :items="simpleItems"
                    v-model="simpleValue"
                    multi-label
                  />
                  <div class="flex ml-5 items-center">
                    <sc-icon type="information-circle" color="dark-gray" size="small" />
                    <div class="ml-1 text-sm">[multi-label] : placeholder에 checked 된 Item Count.</div>
                  </div>
                </div>
                <div class="mt-5 flex">
                  <sc-multi-dropdown class="w-[120px]" :items="simpleItems" v-model="simpleValue" disabled />
                  <div class="flex ml-5 items-center">
                    <sc-icon type="information-circle" color="dark-gray" size="small" />
                    <div class="ml-1 text-sm">disabled</div>
                  </div>
                </div>
                <div class="mt-5 flex">
                  <sc-multi-dropdown class="w-[120px]" :items="simpleItems" v-model="simpleValue" allCheck />
                  <div class="flex ml-5 items-center">
                    <sc-icon type="information-circle" color="dark-gray" size="small" />
                    <div class="ml-1 text-sm">[allCheck] : '전체 선택' 항목 추가.</div>
                  </div>
                </div>

                <div class="mt-5">
                  <sc-multi-dropdown
                    class="w-[120px]"
                    :items="simpleItems"
                    v-model="simpleValue"
                    size="medium"
                    placeholder="Select!"
                  />
                </div>
                <div class="w-[200px] mt-5">
                  <sc-multi-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ simpleValue }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div class="w-[200px]">
<sc-multi-dropdown :items="simpleItems" v-model="simpleValue" @change="onChange" />
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown :items="simpleItems" v-model="simpleValue" multi-label />
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown :items="simpleItems" v-model="simpleValue" disabled />
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown
  :items="simpleItems"
  v-model="simpleValue"
  size="medium"
  placeholder="Select!"
/>
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
</div>

<div class="mt-5 text-sm">결과 : {{ simpleValue }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
methods: {
  onChange(val) {
    console.info('onChange', val);
  },
},
data() {
  return {
    simpleItems: ['규정', '규칙', 'Red', 'Blue', 'White-breasted Wood swallow', 'Black', 'Grey'],
    simpleValue: ['규칙', 'Red'],
  };
}
}"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- item 항목이 Object 형태인 경우 -->
        <sc-sample-box title="item 항목이 Object 형태인 경우">
          <template #description>items의 키 값인 value와 라벨 값인 text로 select 영역을 만듭니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[200px]">
                  <sc-multi-dropdown :items="items" v-model="value" @change="onChange" />
                </div>
                <div class="w-[200px] mt-5">
                  <sc-multi-dropdown :items="items" v-model="value" @change="onChange" multi-label />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div class="w-[200px]">
<sc-multi-dropdown :items="items" v-model="value" @change="onChange" />
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown :items="items" v-model="value" @change="onChange" multi-label />
</div>

<div class="mt-5 text-sm">결과 : {{ value }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
methods: {
  onChange(val) {
    console.info('onChange', val);
  },
},
data() {
  return {
    items: [
      { value: 'COC', text: 'Cockatoo' },
      { value: 'MAG', text: 'Magpie Goose' },
      { value: 'LIT', text: 'Little Kingfisher' },
      { value: 'RIC', text: 'Richards Pipit' },
    ],
    value: ['MAG', 'LIT'],
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //item 항목이 Object 형태인 경우 -->
        <!-- item의 Custom Key 사용 -->
        <sc-sample-box title="item의 Custom Key 사용">
          <template #description>기본 키값이 아닌 custom 하게 Object의 키 값을 지정할 수 있습니다. 아래 예제는 Key 값은 code 라벨 값은 name 으로 지정했습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-[200px]">
                  <sc-multi-dropdown
                    :items="items2"
                    v-model="value2"
                    item-value="code"
                    item-text="name"
                    @change="onChange"
                  />
                </div>

                <div class="w-[200px] mt-5">
                  <sc-multi-dropdown
                    :items="items2"
                    v-model="value2"
                    item-value="code"
                    item-text="name"
                    @change="onChange"
                    multi-label
                  />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div class="w-[200px]">
<sc-multi-dropdown
  :items="items2"
  v-model="value2"
  item-value="code"
  item-text="name"
  @change="onChange"
/>
</div>

<div class="w-[200px] mt-5">
<sc-multi-dropdown
  :items="items2"
  v-model="value2"
  item-value="code"
  item-text="name"
  @change="onChange"
  multi-label
/>
</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
methods: {
  onChange(val) {
    console.info('onChange', val);
  },
},
data() {
  return {
    items2: [
      { code: 'A', name: 'A CODE' },
      { code: 'B', name: 'B CODE' },
      { code: 'C', name: 'C CODE' },
    ],
    value2: [],
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //item의 Custom Key 사용 -->
        <!-- searchable -->
        <sc-sample-box title="searchable">
          <template #description>
            :searchable - 선택 가능한 항목을 검색 가능<br />
            - 키보드 Up, Down과 Enter를 이용 하여 선택 가능<br />
            - 검색어를 입력하여 조건이 한개인 경우 Enter를 입력하면 선택
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-40 w-[150px]">
                  <sc-multi-dropdown :items="simpleItems" v-model="value3" @change="onChange" searchable />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value3 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div class="w-[150px]">
<sc-multi-dropdown :items="simpleItems" v-model="value3" @change="onChange" searchable />
</div>
<div class="mt-5 text-sm">결과 : {{ value3 }}</div>
'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
methods: {
  onChange(val) {
    console.info('onChange', val);
  },
},
data() {
  return {
    items2: [
      { code: 'A', name: 'A CODE' },
      { code: 'B', name: 'B CODE' },
      { code: 'C', name: 'C CODE' },
    ],
    value2: [],
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //searchable -->
        <!-- allCheck -->
        <sc-sample-box title="allCheck">
          <template #description>:allCheck - 선택 가능한 항목을 전체선택</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-10 w-[150px]">
                  <sc-multi-dropdown
                    :items="items4"
                    v-model="value4"
                    @change="onChange"
                    item-value="code"
                    item-text="name"
                    :allCheck="true"
                    allCheckLabel="ALL"
                  />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ value4 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<div class="w-[150px]">
<sc-multi-dropdown
  :items="items4"
  v-model="value4"
  @change="onChange"
  item-value="code"
  item-text="name"
  :allCheck="true"
  allCheckLabel="ALL"
/>
</div>
<div class="mt-5 text-sm">결과 : {{ value4 }}</div>
'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //allCheck -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScMultiDropdown from '@/components/common/ScMultiDropdown.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScIcon from '@/components/common/ScIcon.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleMultiDropdown',
  components: { ScCodeHighlight, ScMultiDropdown, ScSampleBox, ScIcon, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  methods: {
    onChange(val) {
      console.info('onChange', val);
    },
  },
  data() {
    return {
      simpleItems: ['규정', '규칙', 'Red', 'Blue', 'White-breasted Wood swallow', 'Black', 'Grey'],
      simpleValue: ['규칙', 'Red', 'Blue'],
      items: [
        { value: 'COC', text: 'Cockatoo' },
        { value: 'MAG', text: 'Magpie Goose' },
        { value: 'LIT', text: 'Little Kingfisher' },
        { value: 'RIC', text: 'Richards Pipit' },
      ],
      value: ['MAG', 'LIT'],
      items2: [
        { code: 'A', name: 'A CODE' },
        { code: 'B', name: 'B CODE' },
        { code: 'C', name: 'C CODE' },
      ],
      items4: [
        { code: 'T1', name: 'TEST1' },
        { code: 'T2', name: 'TEST2' },
        { code: 'T3', name: 'TEST3' },
      ],
      value2: [],
      value3: [],
      value4: [],
    };
  },
};
</script>

<style scoped lang="scss"></style>
