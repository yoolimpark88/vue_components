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
                <div style="height:350px">
                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="date" @change="onChange" />
                  </div>
                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="date2" size="medium" :clearable="false" @change="onChange" />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">결과 : {{ date }}</p>
                    <p class="list">결과 : {{ date2 }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="w-[150px]">
<sc-datepicker v-model="date" @change="onChange" />
<div class="mt-5 text-sm">결과 : {{ date }}</div>
</div>
<div class="w-[150px] mt-5">
<sc-datepicker v-model="date2" size="medium" :clearable="false" @change="onChange"/>
<div class="mt-5 text-sm">결과 : {{ date2 }}</div>
</div>'
                />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
methods: {
  onChange(val) {
    console.info('changed date', val);
  },
},
data() {
  return {
    today: '',
    date: '20231101',
    date2: '20231201',
  };
},
};"
                />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- init -->
        <sc-sample-box title="Init">
          <template #description>
            <div class="mb-2">v-model의 기본값을 설정 할 수 있습니다.</div>
            <div>today : 오늘날짜로 설정</div>
            <div>init : '' 값으로 설정</div>
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:312px">
                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="today" init="today" />
                  </div>
                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="clearDate" init="clear" />
                  </div>
                </div>
              </template>
              <template #demodescription>
                <div class="description-wrap">
                  <div class="title">Value</div>
                  <div class="box">
                    <p class="list">Today : {{ today }}</p>
                    <p class="list">Clear Date : {{ clearDate }}</p>
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="w-[150px]">
<sc-datepicker v-model="today" init="today" />
<div class="mt-5 text-sm">결과 : {{ today }}"</div>
</div>
<div class="w-[150px] mt-5">
<sc-datepicker v-model="clearDate" init="clear" />
<div class="mt-5 text-sm">clear : {{ clearDate }}"</div>
</div>
'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    today: '',
    clearDate: '20231101',
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //init -->
        <!-- readonly disabled 속성 -->
        <sc-sample-box title="readonly disabled 속성">
          <template #description>해당 속성을 가진 경우 달력을 호출 할 수 없습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:28px">
                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="date2" disabled />
                  </div>

                  <div class="w-[150px] float-left">
                    <sc-datepicker v-model="date2" readonly />
                  </div>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
              template='<div class="w-[150px]">
<sc-datepicker v-model="date2" disabled />
</div>
<div class="w-[150px] mt-5">
<sc-datepicker v-model="date2" readonly />
</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date2: '20231201',
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //readonly disabled 속성 -->
        <!-- format -->
        <sc-sample-box title="Format">
          <template #description>라벨에 보여지는 포멧과 모델의 포멧을 다르게 설정할 수 있습니다. 기본값은 'YYYY-MM-DD'</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:312px">
                  <div class="w-[150px]">
                    <sc-datepicker
                      v-model="date3"
                      input-type="YYYY/MM/DD"
                      model-type="YYYY-MM-DD"
                      init="today"
                    />
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
              template='<div class="w-[150px]">
<sc-datepicker v-model="date3" input-type="YYYY/MM/DD" model-type="YYYY-MM-DD" />
</div>
<div class="mt-5 text-sm">결과 : {{ date3 }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date3: '',
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //format -->
        <!-- minDate, maxDate -->
        <sc-sample-box title="MinDate / MaxDate">
          <template #description>선택할 수 있는 날짜를 제한 할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:312px">
                  <div class="w-[150px]">
                    <sc-datepicker v-model="date" :min-date="minDate" :max-date="maxDate" />
                  </div>
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
              template='<div class="w-[150px]">
<sc-datepicker v-model="date" :min-date="minDate" :max-date="maxDate" />
</div>
<div class="mt-5 text-sm">결과 : {{ date }}</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date: '20231115',
    minDate: '20231110',
    maxDate: '20231120',
  };
},
};"
              />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //minDate, maxDate -->
        <!-- align: left, right -->
        <sc-sample-box title="align: left, right">
          <template #description>날짜 팝업창의 위치를 조절할 수 있습니다. 기본값: left</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div style="height:312px">
                  <div class="flex gap-5">
                    <sc-datepicker v-model="date" align="left" />
                    <sc-datepicker v-model="date" align="right" />
                  </div>
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
              template='<div class="flex gap-5">
<sc-datepicker v-model="date" align="left" />
<sc-datepicker v-model="date" align="right" />
</div>'
              />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script" >
              <sc-code-highlight
              script="export default {
data() {
  return {
    date: '20231115',
  };
},
};"
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
import ScDatepicker from '@/components/common/ScDatePicker.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleDatepicker',
  components: { ScCodeHighlight, ScDatepicker, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  methods: {
    onChange(val) {
      console.info('changed date', val);
    },
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
  data() {
    return {
      today: '',
      clearDate: '20231101',
      date: '20231115',
      date2: '20231201',
      date3: '',
      minDate: '20231110',
      maxDate: '20231120',
      test: '',
      datetime: '',
      selectedTabId: 1,
    };
  },
};
</script>

<style scoped lang="scss"></style>
