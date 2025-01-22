<template>
  <div>
    <sc-sample-box>
      <sc-date-range-picker v-model="date" @change="onChange" />
      <div class="mt-5 text-sm">결과 : {{ date }}</div>

      <sc-code-highlight
        template='<sc-date-range-picker v-model="date" @change="onChange" />
<div class="mt-5 text-sm">결과 : {{ date }}</div>'
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
    </sc-sample-box>

    <sc-sample-box title="프리셋 버튼">
      <template #description>
        오늘날짜로 부터 최근 날짜를 설정할 수 있습니다. d(day), w(week), m(month), y(year) 를 사용
        할 수 있습니다.
      </template>
      <sc-date-range-picker v-model="date2" @change="onChange">
        <template #period="{ setPeriod }">
          <sc-button small @click="setPeriod(-7, 'd')">최근 7일</sc-button>
          <sc-button small @click="setPeriod(-2, 'w')">최근 2주</sc-button>
          <sc-button small @click="setPeriod(-1, 'm')">최근 한달</sc-button>
        </template>
      </sc-date-range-picker>
      <div class="mt-5 text-sm">결과 : {{ date2 }}</div>

      <sc-code-highlight
        template='<sc-date-range-picker v-model="date2" @change="onChange">
<template #period="{ setPeriod }">
  <sc-button small @click="setPeriod(-7, &#039;d&#039;)">최근 7일</sc-button>
  <sc-button small @click="setPeriod(-2, &#039;w&#039;)">최근 2주</sc-button>
  <sc-button small @click="setPeriod(-1, &#039;m&#039;)">최근 한달</sc-button>
</template>
</sc-date-range-picker>
<div class="mt-5 text-sm">결과 : {{ date2 }}</div>'
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
    </sc-sample-box>

    <sc-sample-box title="date-order">
      <template #description>
        끝나는 날짜가 시작 날짜보다 앞서는 경우, 시작날짜와 끝나는 날짜의 값을 서로 바꿔준다.
      </template>
      <sc-date-range-picker v-model="date3" @change="onChange" date-order />
      <div class="mt-5 text-sm">결과 : {{ date3 }}</div>

      <sc-code-highlight
        template='<sc-date-range-picker v-model="date" @change="onChange" date-order />
<div class="mt-5 text-sm">결과 : {{ date3 }}</div>'
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
    </sc-sample-box>

    <sc-sample-box title="align: left, right">
      <template #description>날짜 팝업창의 위치를 조절할 수 있습니다. 기본값: left</template>
      <div>
        <sc-date-range-picker v-model="date" align="left" />
      </div>
      <div class="mt-5">
        <sc-date-range-picker v-model="date" align="right" />
      </div>

      <sc-code-highlight
        template='<div>
<sc-date-range-picker v-model="date" align="left" />
<sc-date-range-picker v-model="date" align="right" />
</div>'
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDateRangePicker from '@/components/common/ScDateRangePicker.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleDateRangePicker',
  components: { ScCodeHighlight, ScButton, ScDateRangePicker, ScSampleBox },
  data() {
    return {
      date: ['20240407', '20240413'],
      date2: ['', ''],
      date3: ['', ''],
    };
  },
  methods: {
    onChange(date) {
      console.info('changed Date', date);
    },
  },
};
</script>

<style scoped lang="scss"></style>
