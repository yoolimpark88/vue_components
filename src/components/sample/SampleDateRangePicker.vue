<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:350px">
                  <sc-date-range-picker v-model="date" @change="onChange" />
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ date }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-date-range-picker v-model="date" @change="onChange" />
<p class="list">결과 : {{ date }}</p>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date: ['20240407', '20240413'],
  };
},
methods: {
  onChange(date) {
    console.info('changed Date', date);
  },
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- 프리셋 버튼 -->
        <sc-sample-box title="프리셋 버튼">
          <template #description>오늘날짜로 부터 최근 날짜를 설정할 수 있습니다. d(day), w(week), m(month), y(year) 를 사용 할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-date-range-picker v-model="date2" @change="onChange">
                  <template #period="{ setPeriod }">
                    <sc-button small @click="setPeriod(-7, 'd')">최근 7일</sc-button>
                    <sc-button small @click="setPeriod(-2, 'w')">최근 2주</sc-button>
                    <sc-button small @click="setPeriod(-1, 'm')">최근 한달</sc-button>
                  </template>
                </sc-date-range-picker>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ date2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-date-range-picker v-model="date2" @change="onChange">
<template #period="{ setPeriod }">
  <sc-button small @click="setPeriod(-7, &#039;d&#039;)">최근 7일</sc-button>
  <sc-button small @click="setPeriod(-2, &#039;w&#039;)">최근 2주</sc-button>
  <sc-button small @click="setPeriod(-1, &#039;m&#039;)">최근 한달</sc-button>
</template>
</sc-date-range-picker>
<p class="list">결과 : {{ date2 }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date2: ['', ''],
  };
},
methods: {
  onChange(date) {
    console.info('changed Date', date);
  },
},
}"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //프리셋 버튼 -->
        <!-- date-order -->
        <sc-sample-box title="date-order">
          <template #description>끝나는 날짜가 시작 날짜보다 앞서는 경우, 시작날짜와 끝나는 날짜의 값을 서로 바꿔준다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-date-range-picker v-model="date3" @change="onChange" date-order />
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ date3 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<sc-date-range-picker v-model="date" @change="onChange" date-order />
<p class="list">결과 : {{ date3 }}</p>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date3: ['', ''],
  };
},
methods: {
  onChange(date) {
    console.info('changed Date', date);
  },
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //date-order -->
        <!-- align: left, right -->
        <sc-sample-box title="align: left, right">
          <template #description>날짜 팝업창의 위치를 조절할 수 있습니다. 기본값: left</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:350px">
                  <div class="float-left">
                    <sc-date-range-picker v-model="date" align="left" />
                  </div>
                  <div class="float-left ml-2.5">
                    <sc-date-range-picker v-model="date" align="right" />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ date3 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div>
<sc-date-range-picker v-model="date" align="left" />
<sc-date-range-picker v-model="date" align="right" />
</div>'
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //align: left, right -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDateRangePicker from '@/components/common/ScDateRangePicker.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleDateRangePicker',
  components: { ScCodeHighlight, ScButton, ScDateRangePicker, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      date: ['20240407', '20240413'],
      date2: ['', ''],
      date3: ['', ''],
      selectedTabId: 1,
    };
  },
  methods: {
    onChange(date) {
      console.info('changed Date', date);
    },
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
};
</script>
<style scoped lang="scss"></style>
