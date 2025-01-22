<template>
  <div>
    <sc-sample-box>
      <div class="w-[150px]">
        <sc-datepicker v-model="date" @change="onChange" />
        <div class="mt-5 text-sm">결과 : {{ date }}</div>
      </div>

      <div class="w-[150px] mt-5">
        <sc-datepicker v-model="date2" size="medium" :clearable="false" @change="onChange" />
        <div class="mt-5 text-sm">결과 : {{ date2 }}</div>
      </div>

      <sc-code-highlight
        template='<div class="w-[150px]">
<sc-datepicker v-model="date" @change="onChange" />
<div class="mt-5 text-sm">결과 : {{ date }}</div>
</div>

<div class="w-[150px] mt-5">
<sc-datepicker v-model="date2" size="medium" :clearable="false" @change="onChange"/>
<div class="mt-5 text-sm">결과 : {{ date2 }}</div>
</div>'
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
    </sc-sample-box>

    <sc-sample-box title="init">
      <template v-slot:description>
        <div class="mb-2">v-model의 기본값을 설정 할 수 있습니다.</div>
        <div>today : 오늘날짜로 설정</div>
        <div>init : '' 값으로 설정</div>
      </template>

      <div class="w-[150px]">
        <sc-datepicker v-model="today" init="today" />
        <div class="mt-5 text-sm">Today : {{ today }}"</div>
      </div>

      <div class="w-[150px] mt-5">
        <sc-datepicker v-model="clearDate" init="clear" />
        <div class="mt-5 text-sm">Clear Date : {{ clearDate }}"</div>
      </div>

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
        script="export default {
data() {
  return {
    today: '',
    clearDate: '20231101',
  };
},
};"
      />
    </sc-sample-box>

    <sc-sample-box title="readonly disabled 속성">
      <template v-slot:description>해당 속성을 가진 경우 달력을 호출 할 수 없습니다.</template>
      <div class="w-[150px]">
        <sc-datepicker v-model="date2" disabled />
      </div>

      <div class="w-[150px] mt-5">
        <sc-datepicker v-model="date2" readonly />
      </div>

      <sc-code-highlight
        template='<div class="w-[150px]">
<sc-datepicker v-model="date2" disabled />
</div>

<div class="w-[150px] mt-5">
<sc-datepicker v-model="date2" readonly />
</div>'
        script="export default {
data() {
  return {
    date2: '20231201',
  };
},
};"
      />
    </sc-sample-box>

    <sc-sample-box title="format">
      <template v-slot:description>
        라벨에 보여지는 포멧과 모델의 포멧을 다르게 설정할 수 있습니다. 기본값은 'YYYY-MM-DD'
      </template>
      <div class="w-[150px]">
        <sc-datepicker
          v-model="date3"
          input-type="YYYY/MM/DD"
          model-type="YYYY-MM-DD"
          init="today"
        />
      </div>
      <div class="mt-5 text-sm">결과 : {{ date3 }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
<sc-datepicker v-model="date3" input-type="YYYY/MM/DD" model-type="YYYY-MM-DD" />
</div>
<div class="mt-5 text-sm">결과 : {{ date3 }}</div>'
        script="export default {
data() {
  return {
    date3: '',
  };
},
};"
      />
    </sc-sample-box>

    <sc-sample-box title="minDate, maxDate">
      <template v-slot:description> 선택할 수 있는 날짜를 제한 할 수 있습니다. </template>
      <div class="w-[150px]">
        <sc-datepicker v-model="date" :min-date="minDate" :max-date="maxDate" />
      </div>
      <div class="mt-5 text-sm">결과 : {{ date }}</div>

      <sc-code-highlight
        template='<div class="w-[150px]">
<sc-datepicker v-model="date" :min-date="minDate" :max-date="maxDate" />
</div>
<div class="mt-5 text-sm">결과 : {{ date }}</div>'
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
    </sc-sample-box>

    <sc-sample-box title="align: left, right">
      <template #description>날짜 팝업창의 위치를 조절할 수 있습니다. 기본값: left</template>

      <div class="flex gap-5">
        <sc-datepicker v-model="date" align="left" />
        <sc-datepicker v-model="date" align="right" />
      </div>

      <sc-code-highlight
        template='<div class="flex gap-5">
<sc-datepicker v-model="date" align="left" />
<sc-datepicker v-model="date" align="right" />
</div>'
        script="export default {
data() {
  return {
    date: '20231115',
  };
},
};"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDatepicker from '@/components/common/ScDatepicker.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleDatepicker',
  components: { ScCodeHighlight, ScDatepicker, ScSampleBox },
  methods: {
    onChange(val) {
      console.info('changed date', val);
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
    };
  },
};
</script>

<style scoped lang="scss"></style>
