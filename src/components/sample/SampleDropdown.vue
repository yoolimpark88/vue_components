<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description> init-show: 생성시 open 상태로 유지 </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-40">
                  <div class="w-[150px] float-left">
                    <sc-dropdown :items="simpleItems" v-model="simpleValue" @change="onChange" />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <sc-dropdown :items="simpleItems" v-model="simpleValue" disabled />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <sc-dropdown :items="simpleItems" v-model="simpleValue" medium plaveholder="Select!" />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <sc-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
                  </div>
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
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="w-[150px] float-left">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" @change="onChange" />
</div>
<div class="w-[150px] float-left ml-2.5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" disabled />
</div>
<div class="w-[150px] float-left ml-2.5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" medium plaveholder="Select!" />
</div>
<div class="w-[150px] float-left ml-2.5">
  <sc-dropdown :items="simpleItems" v-model="simpleValue" size="medium" disabled />
</div>
<p class="list">결과 : {{ simpleValue }}</p>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- defaultValue 기본값 option 추가 -->
        <sc-sample-box title="defaultValue 기본값 option 추가">
          <template #description> 검색조건에서 dropdown 사용시 ALL 이라고 기본값을 따로 설정하고 있었음. 그리고 전체검색값으로는 빈값으로 사용. 그래서 dafault-value 값을 ''로 설정하면 위와 같은 항목을 만들어주는 역할.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-40">
                  <div class="w-[150px] float-left">
                    <!-- option에 'ALL' 옵션이 생김. value는 '' 빈값String -->
                    <sc-dropdown :items="simpleItems" v-model="dfValue1" placeholder="ALL" default-value />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <!-- option에 '전체' 옵션이 생김. value는 'all' -->
                    <sc-dropdown :items="items" v-model="dfValue2" placeholder="전체" default-value="all" />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ dfValue1 }}</p>
                    <p class="list">결과 : {{ dfValue2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<div class="w-[150px] float-left">
  <sc-dropdown :items="simpleItems" v-model="dfValue1" placeholder="ALL" default-value />
</div>
<div class="w-[150px] float-left ml-2.5">
  <sc-dropdown :items="items" v-model="dfValue2" placeholder="전체" default-value="all" />
</div>
<p class="list">결과 : {{ dfValue1 }}</p>
<p class="list">결과 : {{ dfValue2 }}</p>'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //defaultValue 기본값 option 추가 -->
        <!-- borderless -->
        <sc-sample-box title="borderless">
          <template #description>테두리 없애기</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-32">
                  <div class="w-[150px] float-left">
                    <sc-dropdown :items="pageItems" v-model="pageValue" borderless />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <sc-dropdown :items="pageItems" v-model="pageValue" small borderless />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ pageValue }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<div class="w-[150px] float-left">
  <sc-dropdown :items="pageItems" v-model="pageValue" borderless />
</div>
<div class="w-[150px] float-left ml-2.5">
  <sc-dropdown :items="pageItems" v-model="pageValue" small borderless />
</div>
<p class="list">결과 : {{ pageValue }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //borderless -->
        <!-- Type -->
        <sc-sample-box title="Type">
          <template #description>Combobox의 다양한 스타일을 적용할 수 있다. 라운딩 스타일, 언더라인 스타일의 콤보박스를 제공한다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-32">
                  <div class="w-[150px] float-left">
                    <div class="mb-3">Type: Round</div>
                    <sc-dropdown :items="pageItems" v-model="pageValue2" round />
                  </div>
                  <div class="w-[150px] float-left ml-2.5">
                    <div class="mb-3">Type: Underline</div>
                    <sc-dropdown :items="pageItems" v-model="pageValue2" underline />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ pageValue2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
                template='<div class="w-[150px] float-left">
  <div class="mb-3">Type: Round</div>
  <sc-dropdown :items="pageItems" v-model="pageValue2" round />
</div>
<div class="w-[150px] float-left ml-2.5">
  <div class="mb-3">Type: Underline</div>
  <sc-dropdown :items="pageItems" v-model="pageValue2" underline />
</div>
<p class="list">결과 : {{ pageValue2 }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //type -->
        <!-- item 항목이 Object 형태인 경우 -->
        <sc-sample-box title="item 항목이 Object 형태인 경우">
          <template #description>Item의 키 값인 value와 라벨 값인 text로 select 영역을 만듭니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-40">
                  <div class="w-[150px]">
                    <sc-dropdown :items="items" v-model="value" @change="onChange" />
                  </div>
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
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<div class="w-[150px]">
  <sc-dropdown :items="items" v-model="value" @change="onChange" />
</div>
<p class="list">결과 : {{ value }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //item 항목이 Object 형태인 경우 -->
        <!-- item의 Custom Key 사용 -->
        <sc-sample-box title="item의 Custom Key 사용">
          <template #description>기본 키값이 아닌 custom하게 Object의 키 값을 지정할 수 있습니다. 아래 예제는 key, code 라벨 값은 name으로 지정했습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-28">
                  <div class="w-[150px]">
                    <sc-dropdown
                      :items="items2"
                      v-model="value2"
                      item-value="code"
                      item-text="name"
                      @change="onChange"
                    />
                  </div>
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
            <ScDetailAccordion title="Template" >
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
<p class="list">결과 : {{ value2 }}</p>'
/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //item의 Custom Key 사용 -->
        <!-- searchable -->
        <sc-sample-box title="searchable">
          <template #description>
            :searchable - 선택 가능한 항목을 검색 가능<br />
            - 키보드 Up, Down, Enter키를 이용하여 선택 가능<br />
            - 검색어를 입력하여 조건이 한개인 경우 Enter키로 선택
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-40">
                  <div class="w-[150px]">
                    <sc-dropdown
                      :items="simpleItems"
                      v-model="dfValue1"
                      searchable
                      default-value
                      @change="onChange"
                    />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ dfValue1 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
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
<p class="list">결과 : {{ dfValue1 }}</p>'
/>
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  date() {
    return {
      simpleItems: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'],
      dfValue1: '',
    };
  },
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //searchable -->
        <!-- label, Help text -->
        <sc-sample-box title="With Label & Help Text">
          <template #description>기본 콤보박스에 라벨과 도움말 콘텐츠를 추가할 수 있는 슬롯을 적용할 수 있다.<br />라벨은 top, left적용이 가능하며, 도움말은 bottom, right적용이 가능하다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="w-full h-72">
                  <div class="mb-3"><b>Label and Help Text위치 적용</b></div>
                  <div class="w-[300px]">
                    <sc-dropdown class="mb-2.5" :items="pageItems" v-model="pageValue3" :helpSize="'medium'" :label="labelTop">
                      <template #hintMessage>{{ hintMessage }}</template>
                    </sc-dropdown>
                  </div>
                  <div class="w-[600px]">
                    <sc-dropdown :items="pageItems" v-model="pageValue3" :helpSize="'medium'" :label="labelLeft" leftLabel>
                      <template #hintMessage>{{ hintMessage }}</template>
                    </sc-dropdown>
                  </div>
                  <div class="mb-3 mt-5"><b>Help text style</b></div>
                  <div class="w-[300px]">
                    <sc-dropdown class="mb-2.5" :items="pageItems" v-model="pageValue4" :helpSize="'medium'" :helpType="'info'" :helpIcon="true">
                      <template #hintMessage>{{ hintMessage }}</template>
                    </sc-dropdown>
                    <sc-dropdown :items="pageItems" v-model="pageValue4" :helpSize="'medium'" :helpType="'caution'" :helpIcon="true">
                      <template #hintMessage>{{ hintMessage }}</template>
                    </sc-dropdown>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
                template='<div class="w-[150px] float-left">
  <div class="mb-3">Type: Round</div>
  <sc-dropdown :items="pageItems" v-model="pageValue2" round />
</div>
<div class="w-[150px] float-left ml-2.5">
  <div class="mb-3">Type: Underline</div>
  <sc-dropdown :items="pageItems" v-model="pageValue2" underline />
</div>
<p class="list">결과 : {{ pageValue2 }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
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
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //label, Help text -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDropdown from '@/components/common/ScDropdown.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleDropdown',
  components: { ScSampleBox, ScDropdown, ScCodeHighlight, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  methods: {
    onChange(val) {
      console.info('onChange : ', val);
    },
    onClick(idx) {
      this.selectedTabId = idx;
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
      pageValue2: '',
      pageValue3: '',
      pageValue4: '',
      selectedTabId: 1,
      labelTop:'Top Label',
      labelLeft:'Left Label',
      hintMessage: '도움말 텍스트는 설명이나 특정 가이드를 제공한다.'
    };
  },
};
</script>

<style scoped lang="scss"></style>
