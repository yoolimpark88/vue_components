<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>size는 small(기본값), medium, large가 있습니다.<br />disabled 속성은 이벤트 전달을 하지 않습니다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="py-2">
                  <sc-checkbox v-model="value">체크박스</sc-checkbox>
                  <sc-checkbox v-model="value" disabled>비활성화 체크박스</sc-checkbox>
                </div>
                <div class="py-2">
                  <sc-checkbox v-model="value" medium>체크박스</sc-checkbox>
                  <sc-checkbox v-model="value" medium disabled>비활성화 체크박스</sc-checkbox>
                </div>
                <div class="py-2">
                  <sc-checkbox v-model="value" large>체크박스</sc-checkbox>
                  <sc-checkbox v-model="value" large disabled>비활성화 체크박스</sc-checkbox>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ value }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="py-2">
  <sc-checkbox v-model="value">체크박스</sc-checkbox>
  <sc-checkbox v-model="value" disabled>비활성화 체크박스</sc-checkbox>
</div>
<div class="py-2">
  <sc-checkbox v-model="value" medium>체크박스</sc-checkbox>
  <sc-checkbox v-model="value" medium disabled>비활성화 체크박스</sc-checkbox>
</div>
<div class="py-2">
  <sc-checkbox v-model="value" large>체크박스</sc-checkbox>
  <sc-checkbox v-model="value" large disabled>비활성화 체크박스</sc-checkbox>
</div>
<div>결과 : {{ value }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value: false,
    };
  }
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Single and Y/N Checkbox -->
        <sc-sample-box title="Single and Y/N Checkbox">
          <template #description>size는 small(기본값), medium, large가 있습니다.<br />disabled 속성은 이벤트 전달을 하지 않습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-checkbox v-model="value2">체크박스</sc-checkbox>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    결과 : {{ value2 }}
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-checkbox v-model="value2">체크박스</sc-checkbox>
<div>결과 : {{ value2 }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      value2: N,
    };
  }
}"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Single and Y/N Checkbox -->
        <!-- Multiple Checkbox-->
        <sc-sample-box title="Multiple Checkbox">
          <template #description>size는 small(기본값), medium, large가 있습니다.<br />disabled 속성은 이벤트 전달을 하지 않습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="py-2">
                  <sc-checkbox value="A" v-model="value3">A</sc-checkbox>
                  <sc-checkbox value="B" v-model="value3">B</sc-checkbox>
                  <sc-checkbox value="C" v-model="value3">C</sc-checkbox>
                  <sc-checkbox value="D" v-model="value3">D</sc-checkbox>
                </div>
                <div class="py-2">
                  <sc-checkbox v-for="key in keys" :key="key" :value="key" v-model="value4">
                    {{ key }}
                  </sc-checkbox>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">선택 : {{ value3 }}</p>
                    <p class="list">선택 : {{ value4 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-checkbox value="A" v-model="value3">A</sc-checkbox>
<sc-checkbox value="B" v-model="value3">B</sc-checkbox>
<sc-checkbox value="C" v-model="value3">C</sc-checkbox>
<sc-checkbox value="D" v-model="value3">D</sc-checkbox>
<p class="list">선택 : {{ value3 }}</p
<sc-checkbox v-for="key in keys" :key="key" :value="key" v-model="value4">
  {{ key }}
</sc-checkbox>>
<p class="list">선택 : {{ value4 }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
  data() {
    return {
      keys: ['Ace', 'Boss', 'Carrot', 'Dice'],
      value3: ['A', 'C'],
      value4: ['Ace', 'Dice'],
    };
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Multiple Checkbox -->
        <!-- Object Uniq Key -->
        <sc-sample-box title="Object Uniq Key">
          <template #description>value가 Object인 경우 그리고 v-model이 Array인 경우, object-uniq-key값을 이용하여 checkbox를 사용할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-checkbox
                  v-for="item in value5List"
                  :key="item.name"
                  :value="item"
                  v-model="value5"
                  object-uniq-key="id">
                  {{ item.name }}
                </sc-checkbox>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">선택 : {{ value5 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-checkbox
  v-for="item in value5List"
  :key="item.name"
  :value="item"
  v-model="value5"
  object-uniq-key="id">
  {{ item.name }}
</sc-checkbox>
<p class="list">선택 : {{ value5 }}</p>'
          />
        </ScDetailAccordion>
        <ScDetailAccordion title="Script" >
          <sc-code-highlight
          script="export default {
  data() {
    return {
      keys: ['Ace', 'Boss', 'Carrot', 'Dice'],
      value3: ['A', 'C'],
      value4: ['Ace', 'Dice'],
    };
  },
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Object Uniq Key -->      
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScCheckbox from "@/components/common/ScCheckbox.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
export default {
  name: "SampleCheckbox",
  components: { ScCheckbox, ScCodeHighlight, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      keys: ["Ace", "Boss", "Carrot", "Dice"],
      value: false,
      value2: "N",
      value3: ["A", "C"],
      value4: ["Ace", "Dice"],
      value5List: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ],
      value5: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
      ],
      selectedTabId: 1,
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    }
  }
};
</script>

<style scoped lang="scss"></style>
